import express from 'express'; //Importaciom
import dbconection from  './config/mongo.config.js';
import usersRoute from './routes/users.routes.js';
import productsRoute from './routes/products.routes.js';


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
app.use('/api/v1/user',usersRoute);
app.use('/api/v1/products',productsRoute);


//Lanzando el servidor web usando Express
app.listen( PORT, () => {
    console.log(`Serve running on http://localhost:${PORT}`)
} );