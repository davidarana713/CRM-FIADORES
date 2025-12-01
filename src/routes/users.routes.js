//Importando la dependencia 'express' usando Common.js
import express from 'express'

const router = express.Router();

//definicion de las rutas
router.post( '/', ( req, res ) => {
    const data = req.body;
    
    res.json({ msg: 'Crear un usuario',
        data:data 
    });
} );

// router.get('/health',( req, res ) =>{
//     res.send('<h1>Health</h1>');
// });


//Exportando el router usando Common.js
export default router;
