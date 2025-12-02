// Servicio: se debe de encargar solo de la comunicacion directa con la base de datos
import UserModel from "../models/User.model.js";

const registerUser =async (newUser) => {
return await  UserModel.create(newUser);  //async/await porque el modelo retorna una promesa
};

export {
     registerUser 
};