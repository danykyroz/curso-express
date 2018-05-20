const express= require('express');
const app=express();
app.get('/',(req,res)=>{
  res.end("Hola mundo");
})
app.listen(3000);
