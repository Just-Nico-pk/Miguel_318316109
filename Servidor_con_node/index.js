const express =require('express'); //modulo para gestionar nuestras rutas
const router = express.Router();
const path = require("path");   //Path busca directorios en nuestro equipo

//Midware: funcion que envia info al usuario para recibir su info y poder trabajar con ella

//Pagina de inicio
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname +"/index.html") );
});

//Pagina del formulario
router.get('/formulario',(req,res)=>{
    res.sendFile(path.join(__dirname + "/formulario.html"));
});

//Pagina de informacion generica
router.get('/informacion',(req,res)=>{
    res.sendFile(path.join(__dirname + "/informacion.html"));
});

module.exports = router; 