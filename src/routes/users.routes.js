//Importando la dependencia 'express' usando Common.js
import express from 'express'
import { createUser, getAllUsers } from '../controllers/user.controller.js';

const router = express.Router();

//definicion de las rutas
router.post( '/', createUser);
router.get('/',getAllUsers);
// router.get('/health',( req, res ) =>{
//     res.send('<h1>Health</h1>');
// });


//Exportando el router usando Common.js
export default router;
