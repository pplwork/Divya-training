const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const Article=require('./articles/article.js');
var bodyParser = require('body-parser')


mongoose.connect('mongodb://localhost:27017/nodekb',{ useNewUrlParser: true, useUnifiedTopology: true});
let db=mongoose.connection;
db.once('open',()=>{console.log("connected to mongodb")})
db.on('error',(err)=>{  console.log(err) })



//load view engine
app.set('views',path.join(__dirname,"views"));
app.set('view engine','pug');
app.use(express.static(path.join(__dirname,'public')));
//parse application
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())

//serving index.pug file
app.get('/',function(req,res){
  Article.find({},(err,articles)=>{
    if (err) {
      console.log(err,"error hai bhai");
    } else {
      res.render('index',{
        title:"Add articles",
        articles:articles
      })}})});



//serving add_articles file
app.get('/articles/add',function(req,res){
  res.render('add_articles')
  })
app.get('/article/:id',(req,res)=>{
  Article.findById(req.params.id,(err,arr)=>{
  if(err){
    console.log(err);
  }
  else{
    res.render('articles',{
      article:arr
    })
  }
  })
})
app.delete('/articles/:id',(req,res)=>{
   Article.findOneAndDelete({ 
     _id: req.params.id
   }, (err) => {
    if(err) 
    console.log(err);
    else{
      res.send('Success')
    }
   });
   
})

app.post('/articles/add',(req,res)=>{
  console.log(req.body);
  let articles=new Article();
  articles.title=req.body.title;
  articles.author=req.body.author;
  articles.body=req.body.Body;
  articles.save((err)=>{
    if (err) {
      console.log(err);
    } else {
      res.redirect('/')
    }
    })

})

app.get('/article/edit/:id',(req,res)=>{
  res.render('edit_article',{
    id:req.params.id
  })
})
app.post('/article/edit/:id',(req,res)=>{
  let articles={}
  articles.title=req.body.title;
  articles.author=req.body.author;
  articles.body=req.body.Body;
  let query={_id:req.params.id}
  Article.updateOne(query,articles,(err)=>{
    if(err){
      console.log(err);
    }
    else{
      res.redirect('/');
    }
  })
})

//server started
app.listen(3000,function(){
  console.log('server started');
});
