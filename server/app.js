var express = require('express');
//var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var path = require('path');
var multer = require('multer');
var db;

// Set storage engine
const storage = multer.diskStorage({
    destination: '../img',
    filename: function(req, file, cb){
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));

    }
});

//Init upload
const upload = multer({
    storage: storage
}).single('image');


var app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

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

app.post('/posts', function(req, res){

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
            }
        } else {  //если картинки нет
            post = {
            text: req.body.text,
            date: Date.now(),
            };
        }
        console.log(post);
        db.collection('posts').insert(post, function(err, result) {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
        });
        res.sendStatus(201);
    })

});

app.get('/posts', function(req, res){
    db.collection('posts').find().toArray(function(err, docs){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });
});