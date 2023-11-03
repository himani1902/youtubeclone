const express = require('express');
const mongoose = require('mongoose')
 const videoRouter = require('./routes/videoRouter')

const app  = express();
app.use(express.json());

const DBURL = "mongodb://localhost:27017/youtubeclone"

mongoose.connect(DBURL)
.then(() => {console.log("Database connected" , DBURL)})
.catch((error) => {console.log("Cannot connect DB ",error)})

app.get('/', function (req, res){
    return res.send("hello Server!")
})

//app.get('/', (req, res){
   // return res.send("hello Server!")
//})

app.use(videoRouter)

//app.get('/videos' , function(req, res){
 //   return res.send[({id: "1", link : "some video link"})]
//})

//app.post('/video',function(req ,res) {
   // console.log(req.body);
   // return res.send({body: req.body, response: "success"});
//})


app.listen(5500, function(){
    console.log("app server running on 5500")
})

