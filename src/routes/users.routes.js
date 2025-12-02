//Importando la dependencia 'express' usando Common.js
import express from 'express'

import { createUser } from '../controllers/user.comtroller.js';

const router = express.Router();

//definicion de las rutas
// router.get( '/', ( req, res ) => {
//     res.json({ msg: 'Obtiene todos los usuarios' });
// } );

router.post( '/', createUser );










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
