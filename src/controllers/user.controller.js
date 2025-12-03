import userModel from "../models/User.model.js";
import { dbGetAllUser, dbresgisterUser } from "../services/user.service.js";
const createUser = async ( req, res ) => {
    try{
    const data = req.body;

    //Mostrar en la consola
    console.log(data);

    //registrar los datos usando el userModel
    
    const dataRegister = await dbresgisterUser( data ); //Registrar los datos en la base de datos

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

const getAllUsers = async (req, res) => {
     try {
    const users = await dbGetAllUser ();
    res.json({
        msg:'obtiene todos los usuarios',
        users
    });
}
catch (error){
    console.error( error );
    res.json({
        msg:'Error:No se puedo obtener el listado de usuarios'
    });
}

}

export{createUser,getAllUsers}