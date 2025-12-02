import userModel from "../models/User.model.js";
import { resgisterUser } from "../services/user.service.js";
const createUser = async ( req, res ) => {
    try{
    const data = req.body;

    //Mostrar en la consola
    console.log(data);

    //registrar los datos usando el userModel
    
    const dataRegister = await resgisterUser( data ); //Registrar los datos en la base de datos

    res.json({ msg: 'Crear un usuario',
        dataRegister 
    });
}

catch (error){
    console.error(error);
    res.json({
        msg:'Error no se puede crear el usuario'
    });

};
};

export{createUser}