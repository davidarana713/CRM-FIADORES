//Importando la dependencia 'express' usando Common.js
import express from 'express'
import { createUser } from '../controllers/user.controller.js';

const router = express.Router();

//definicion de las rutas
router.post( '/', createUser);

// router.get('/health',( req, res ) =>{
//     res.send('<h1>Health</h1>');
// });


//Exportando el router usando Common.js
export default router;
