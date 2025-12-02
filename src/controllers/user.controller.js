import userModel from "../models/User.model.js";
const createUser = async ( req, res ) => {
    const data = req.body;

    //Mostrar en la consola
    console.log(data);

    //registrar los datos usando el userModel
    
    const dataRegister = await userModel.create(data); //Registrar los datos en la base de datos

    res.json({ msg: 'Crear un usuario',
        dataRegister 
    });
}

export{createUser}