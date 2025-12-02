//Importando la dependencia 'express' usando Common.js
import express from 'express'
import userModel from '../models/User.model.js';

const router = express.Router();

//definicion de las rutas
router.post( '/', async ( req, res ) => {
    const data = req.body;

    //Mostrar en la consola
    console.log(data);

    //registrar los datos usando el userModel
    
    const dataRegister = await userModel.create(data); //Registrar los datos en la base de datos

    res.json({ msg: 'Crear un usuario',
        dataRegister 
    });
} );

// router.get('/health',( req, res ) =>{
//     res.send('<h1>Health</h1>');
// });


//Exportando el router usando Common.js
export default router;
