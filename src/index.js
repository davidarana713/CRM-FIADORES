const express = require('express'); //Importaciom

const app = express();       //Invocando core Express
const PORT = 3000;           //Definiendo el puerto de escucha

//end point
app.get('/health',( req, res ) =>{
    const perro = [
        {name:'gato' },
        {name: 'loro'}
    ];
    res.json(perro);
});

//Middlewares Express las rutas por entidad
app.use('/api/v1',require('./routes/users.routes.js'));
app.use('/products',require('./routes/products.routes.js'));


//Lanzando el servidor web usando Express
app.listen( PORT, () => {
    console.log(`Serve running on http://localhost:${PORT}`)
} );