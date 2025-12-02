import userModel from "../models/User.model.js"

//servicio: se debe encargar solo de la comunicacion directa con la base de datos
const resgisterUser = async (newUser) => {
    return await userModel.create(newUser);
}

export{
    resgisterUser
}
