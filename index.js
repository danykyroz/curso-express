const express= require('express');
const morgan= require('morgan');
const app=express();

app.use(morgan("dev"));

app.get('/',(req,res)=>{
  res.end("Hola mundo");
})
app.get('/login',(req,res)=>{
  res.end("Aca va la página de login");
})
app.get('*',(req,res)=>{
  res.end("Url no encontrada.");
})
app.listen(3000);
