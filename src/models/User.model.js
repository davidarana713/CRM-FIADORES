import {Schema, model} from "mongoose";

//Creando una instancia del esquema de entidad User
const userSchema = new Schema(
    {           // Reglas de validación y estructura de los documentos                 
        name: { type: String, 
            required: true, 
            trim : true 
        },  
                                                                                     
   Username: { type: String,
     required: true,
      unique: true,
       trim : true 
    },
                               
   email: { type: String, 
    required: true,
     trim: true,             // trim : elimina espacios en blanco al inicio y al final
     unique: true,          // unique: valor único en la colección 
      lowercase: true       // lowercase: convierte a minúsculas
    },  

   password:{ type: String,
     required: true,
    trim : true,
        minlength: 8,
        maxlength: 16
},

   role: { type: String,
     required: true,
     enum: ['ADMIN_ROLE', 'ADVISER_ROLE'],
    default: 'ADVISER_ROLE'
    },

    isActive: {type: Boolean,
     default: true
    }
    // isVerified: {
    //     code: String,
    //     trim: true
    // }
},{}
);

//crear el modelo  de Usuario a partir del esquema
const UserModel = model('Users',      // Nombre de la colección
    userSchema);                    // Esquema asociado a la colección



//Exportando el modelo de Usuario, para usarlo en otras partes de la aplicación
export default UserModel;

