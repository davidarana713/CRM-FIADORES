//Importando la dependencia 'express' usando Common.js
import express from 'express'
import { createUser, deleteUserById, getAllUsers, getUserById } from '../controllers/user.controller.js';

const router = express.Router();

//definicion de las rutas
router.post( '/', createUser);
router.get('/',getAllUsers);
router.get('/:idUser', getUserById); //parametrizar la ruta: crear un parametro en la ruta que funje como variable
router.delete('/:idUser',deleteUserById);

// router.get('/health',( req, res ) =>{
//     res.send('<h1>Health</h1>');
// });


//Exportando el router usando Common.js
export default router;
