import userModel from "../models/User.model.js";
import { dbDeleteUserById, dbGetAllUser, dbGetUserById, dbresgisterUser, dbupdateUserById } from "../services/user.service.js";
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

const getUserById = async (req, res) => {
    try{
    const idUser = req.params.idUser;

  const user = await dbGetUserById(idUser);

    res.json({
        user
    });
}
   catch (error){
    console.erro(error);
    res.json({
        msg: 'Error: No pudo obtener usuario por ID'
    });
   }
}

const deleteUserById = async (req, res) => {
    try{
    const idUser = req.params.idUser;

    const userDeleted = await dbDeleteUserById( idUser );

    res.json({
        userDeleted
    });
}

catch(error){
    console.error(error);
    res.json({
        msg:'Error no se puedo eliminar el usuario por Id'
    });
}

}

const updateUserById = async (req, res) => {
try {
    const inputData = req.body;
    const idUser = req.params.idUser;

    const userUpdate = await dbupdateUserById(idUser,inputData);
   

    res.json(
        inputData,
        idUser
    );

}

catch (error) {
    console.error(error);
    res.json({
        msg: 'ERROR: No pudo actualizar el usuariopor Id'
    })
}

};



export{createUser,getAllUsers,getUserById,deleteUserById,updateUserById}

