//Importando la dependencia 'express' usando Common.js
const express = require ('express');

const router = express.Router();

//definicion de las rutas
router.get('/',( req, res ) =>{
    res.send('<h1>Users</h1>');
});

// router.get('/health',( req, res ) =>{
//     res.send('<h1>Health</h1>');
// });


//Exportando el router usando Common.js
module.exports = router;