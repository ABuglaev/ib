var express = require('express');
//var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var path = require('path');
var multer = require('multer');
var db;

// Set storage engine
var storage = multer.diskStorage({
    destination: '../img',
    filename: function(req, file, cb){
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
    }
});

//Init upload
var upload = multer({ //multer settings
    storage: storage,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
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

//необходимо передать имя каталога, в котором находятся статические ресурсы, в функцию промежуточной обработки express.static
app.use(express.static('../img'));


//запуск БД на моем серваке
MongoClient.connect('mongodb://87.252.241.43:27017/myDB', function(err, database){
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
    upload(req, res, (err)=>{
        if (err) {
            console.log(err);
        };

        var post = {};

        if (req.file) { //если есть картинка
            post = {
            text: req.body.text,
            date: Date.now(),
            imageURL: 'http://tonight.by/img/'+ req.file.filename,
            thread: req.body.thread,
            }
        } else {  //если картинки нет
            post = {
            text: req.body.text,
            date: Date.now(),
            thread: req.body.thread,
            };
        }
        
        db.collection(req.body.thread).insert(post, function(err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
        });
        res.sendStatus(201);
    })

});

app.get('/thread[1,2,3]', function(req, res){
    db.collection(`#${req.url.substring(1)}`).find().toArray(function(err, docs){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });
});