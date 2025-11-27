const express = require ('express');

const router = express.Router();

router.get('/products',(req,res)=>{
    res.send('<h1>productos</h1>');
});

module.exports = router;