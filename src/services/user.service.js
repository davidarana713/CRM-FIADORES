import userModel from "../models/User.model.js"

//servicio: se debe encargar solo de la comunicacion directa con la base de datos
const dbresgisterUser = async (newUser) => {
    return await userModel.create(newUser);
}

const dbGetAllUser = async () =>{
   return await userModel.find();
}

export{
    dbresgisterUser,
    dbGetAllUser
}
