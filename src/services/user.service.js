import userModel from "../models/User.model.js"

//servicio: se debe encargar solo de la comunicacion directa con la base de datos
const dbresgisterUser = async (newUser) => {
    return await userModel.create(newUser);
}

const dbGetAllUser = async () =>{
   return await userModel.find();
}

const dbGetUserById = async (_id) => {
   return await userModel.findOne({ _id});
}

const dbDeleteUserById = async (_id) => {
   return await userModel.findOneAndDelete({ _id });

}

const dbupdateUserById = async (_id,inputData) => {
      
   return await userModel.findByIdAndUpdate(
        _id,
        inputData,
        {new: true}
    );
}

export{
    dbresgisterUser,
    dbGetAllUser,
    dbGetUserById,
    dbDeleteUserById,
    dbupdateUserById
}
