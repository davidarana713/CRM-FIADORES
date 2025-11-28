const express = require('express'); //Importaciom
const dbconection = require('./config/mongo.config.js');

const app = express();       //Invocando core Express
const PORT = 3000;           //Definiendo el puerto de escucha

dbconection();

//end point
app.get('/health',( req, res ) =>{
    const perro = [
        {name:'gato' },
        {name: 'loro'}
    ];
    res.json(perro);
});
    
//Middlewares Express las rutas por entidad
app.use('/api/v1/user',require('./routes/users.routes.js'));
app.use('/api/v1/products',require('./routes/products.routes.js'));


//Lanzando el servidor web usando Express
app.listen( PORT, () => {
    console.log(`Serve running on http://localhost:${PORT}`)
} );