import UserModel from '../models/User.model.js';

export const createUser = async ( req, res ) => {
    // extraer el cjuerpo de la peticion 
    const data = req.body;

    // registrar los datos en la base de datos
  const dataRegistered = await UserModel.create(data);


// responder al cliente 

    res.json({ msg: 'Crear un usuario', 
        dataRegistered
     });
};
 