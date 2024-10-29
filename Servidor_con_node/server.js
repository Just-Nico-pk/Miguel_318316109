const express =require('express');  //Importar express
const app = express();  
const PORT =3009;   //Ocupamos cualquier puerto libre, en este caso el 3009
const routes = require('./index');  //imoprtar las rutas seleccionadas 
app.use('/', routes);

app.use(express.static('style')); //Indica a express que todos los archivos de estilos 
//estan en forma estatica, por lo que se tendran que mandar a llamar
//Habilitamos el servidor 
app.listen(PORT,()=>{
 console.log(`Servidor: http://localhost:${PORT}`);
});