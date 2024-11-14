const bodyParser = require('body-parser');  //Milware 
const express = require('express');     //Importar express 
const mysql = require('mysql2');        //Importar mysql

//  Creacion de una instancia (objeto)
const app = express();

//      Configuracion 
app.use(bodyParser.urlencoded({extended:false}));
//App tiene archivos de express. Ocupamos que body comparta esos archivos 

//      Plantilla dinamicas
app.set('view engine','ejs') //Trae informacion de manera dinamica

//      Crear conexion a la base de datos 
const db = mysql.createConnection({ 
    //Objeto que configura la conexion de base de datos 
    host:       'localhost',   //Server
    user:       'root',
    password:   '',
    database:   'p1_14al',
    port:       3306            //Port de la DB
});

//      Validar la conexion con la DB
db.connect(err=> {
    if(err){
        console.log(`Ocurrio un error al momento de conectarse a la base de datos: ${err}`);
    }else{
        console.log(`Conexion a la base de datos exitosa!`)
    }
});

//      Iniciamos el server
const puerto = 3009;    //Port de escucha para el node 
app.listen(puerto,()=>{ 
    console.log(`El servidor está en funcionamiento en: http://localhost:${puerto}`);
});