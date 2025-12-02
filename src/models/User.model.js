import { Schema, model } from "mongoose";


//Creando una instacioa del esquema de la entidad User
const userSchema = new Schema({
    username:{
        //Reglas
        type:String, //Define el tipo
        required: true, //Es obligatorio
        //Modificador
        unique: true, //obliga a que el valor sea unico
        trim: true,   //Elimina los espacios en blanco
        lowercase: true
    }, //Obliga a que los caracteres sean en minuscula
         
        name:{type:String,
            required: true,
            trim: true
        },
    
        email:{type:String,
            required: true,
            trim:true,
            lowercase:true,
            unique:true
        },

        password: {type:String,
            required: true,
            trim:true,
            minLength: 8,
            maxLength: 12
        },
        role:{
            type:String,
            enum:['admin','super-admin','resgister','colaborator','registered'],
            default:'registered'
        },
        isActive:{
            type:Boolean,
            default: true
        },

        // isVerified:{
        //     code:String,
        //     trim: true,

        // }

},{versionKey: false,
    timestamps: true
}); 

//Crear el modelo user basado en el esquema userSchema
const userModel = model(
    'users', //Nombre de la coleccion en singular 'User'
    userSchema  //Esquema asociado al modelo
);

//Eportando el modelo user para que sea usado en otras partes de la aplicacion
export default userModel;