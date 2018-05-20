const express= require('express');
const morgan= require('morgan');
const app=express();

//Set variables
app.set("appName","Primer Server Express");
//Midlewares
app.use(morgan("dev"));

//Routes
app.get('/',(req,res)=>{
  res.end("Hola mundo");
})
app.get('/login',(req,res)=>{
  res.end("Aca va la página de login");
})

//Todas las rutas
app.get('*',(req,res)=>{
  res.end("Url no encontrada.");
})

//Iniciar servidor
app.listen(3000,()=>{
  console.log("Servidor escuchando 3000");
  console.log("Nombre App",app.get("appName"));


});
