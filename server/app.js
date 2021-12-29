var express = require('express');
var aws = require('aws-sdk');
    aws.config.update({region: 'eu-central-1'});
var MongoClient = require('mongodb').MongoClient;
var path = require('path');
var multer = require('multer');
var multerS3 = require('multer-s3')
var s3 = new aws.S3({apiVersion: '2006-03-01'})
var db;

//set storage engine
var storage = multerS3({
    s3: s3,
    bucket: 'tonight-img',
    key: function(req, file, cb){
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
    },
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    }
});


//Init upload
var upload = multer({ //multer settings
    storage: storage,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname).toLowerCase();
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
    limits:{
        fileSize: 2*1024*1024
    }
}).single('image');

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

console.log(process.env.MP);

//connect to AWS Mongo
MongoClient.connect('mongodb://mongoUser:'+process.env.MP+'@tonight-documentdb.cu3crpeyzais.eu-central-1.docdb.amazonaws.com:27141/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&retryWrites=false/myDB', function(err, database){
    if(err) {
        return console.log(err);
    }

    db = database;
    //запуск express(ожидание запросов)
    app.listen(3012, function(){
        console.log('Server started on :3012');
    });

});

app.post('/thread[1,2,3]', function(req, res){
    console.log('post route works');
    console.log('image?');
    upload(req, res, (err)=>{
        if (err) {
            console.log(err);
        };

        var post = {};

        if (req.file) { //если есть картинка
            console.log('We have an image!');
            console.log(JSON.stringify(req.file));
            post = {
            text: req.body.text,
            date: Date.now(),
            imageURL: 'https://tonight-img.s3.eu-central-1.amazonaws.com/' + req.file.key,
            thread: req.body.thread,
            }
        } else {  //если картинки нет
            post = {
            text: req.body.text,
            date: Date.now(),
            thread: req.body.thread,
            };
        }

        db.collection(`${req.url.substring(1)}`).insert(post, function(err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
        });
        res.sendStatus(201);
    })

});

//If u r reading this, don't use it please
app.delete('/ggwp', function(req, res){
    console.log('clear all');
    db.collection('thread1').remove( { } );
    db.collection('thread2').remove( { } );
    db.collection('thread3').remove( { } );

    res.sendStatus(200);
});

app.get('/thread[1,2,3]', function(req, res){
    db.collection(`${req.url.substring(1)}`).find().toArray(function(err, docs){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });
});
