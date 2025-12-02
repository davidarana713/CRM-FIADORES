//Importando la dependencia 'express' usando Common.js
import express from 'express'
import UserModel from '../models/User.model.js';

const router = express.Router();

//definicion de las rutas
// router.get( '/', ( req, res ) => {
//     res.json({ msg: 'Obtiene todos los usuarios' });
// } );

router.post( '/', async ( req, res ) => {
    // extraer el cjuerpo de la peticion 
    const data = req.body;

    // registrar los datos en la base de datos
  const dataRegistered = await UserModel.create(data);


// responder al cliente 

    res.json({ msg: 'Crear un usuario', 
        dataRegistered
     });
} );










// router.put( '/', ( req, res ) => {
//     res.json({ msg: 'Actualiza todos las propiedades del usuario' });
// } );

// router.patch( '/', ( req, res ) => {
//     res.json({ msg: 'Actualiza parcialmente 1 o todas las propiedades del usuario' });
// } );

// router.delete( '/', ( req, res ) => {
//     res.json({ msg: 'Elimina un usuario' });
// } );
// router.get('/health',( req, res ) =>{
//     res.send('<h1>Health</h1>');
// });


//Exportando el router usando Common.js
export default router;
