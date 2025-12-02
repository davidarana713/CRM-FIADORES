// Controlador: se debe de encargar de recibir la peticion, procesarla y devolver una respuesta al cliente

import UserModel from '../models/User.model.js';
import { registerUser } from '../services/user.service.js';

export const createUser = async ( req, res ) => {
    // extraer el cjuerpo de la peticion 
    const data = req.body;

    // registrar los datos en la base de datos
  const dataRegistered = await registerUser( data );


// responder al cliente 

    res.json({ msg: 'Crear un usuario', 
        dataRegistered
     });
};
 