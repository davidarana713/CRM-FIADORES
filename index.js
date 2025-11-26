const express = require('express'); //Importaciom

const app = express();       //Invocando core Express
const PORT = 3000;           //Definiendo el puerto de escucha

//Definir rutas
app.get('/',( req, res ) =>{
    res.send('<h1>home</h1>');
});

app.get('/health',( req, res ) =>{
    res.send('<h1>health</h1>');
});


//Lanzando el servidor web
app.listen( PORT, () => {
    console.log(`Serve running on http://localhost:${PORT}`)
} );