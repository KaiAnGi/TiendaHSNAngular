//definicion schema mongoose para crear objetos Cliente que se mapean
//contra documentos de la coleccion clientes de la BBDD
//OJO!! En la def. de las propiedades a mapear en el esquema de mongoose no son tipos TYPESCRIPT

import mongoose from "mongoose";

const esquemaCuenta=new mongoose.Schema({
    email:{type:String,required:true, default:''},
    pasword:{type:String,required:true, default:''},
    fechaCreacionCuenta:{type:Date,required:true},
    cuentaActiva:{type:Boolean,required:true, default:''},
    imagenAvatar:String,
    telefonoContacto:String,
    tipoCuenta:{type:String,required:true, default:'particular'},

});

const esquemaCliente = new mongoose.Schema({
    nombre:{type:String,required:true, default:''},
    apellidos:{type:String,required:true, default:''},
    genero:{type:String,required:true, default:''},
    cuenta:{type: esquemaCuenta,required:true, default:''},
    fechaNacimiento: Number,
    direcciones:[],
    pedidos:[],
    listaFavoritos:[],
    metodosPago:[],
    opiniones:[],

});

//el metodo mongoose.model crea y exporta el modelo ORM de mongoose
//el primer parametro es el nombre del modelo y ubjketos de lase a crear (clase cliente)
//el segundi parametro es el esquema mongoose que define la estructura de los documentos mapeados por el modelo
//el tercer parametro es el nombre de la coleccion de la BBDD donde se guardaran los documentos
export default mongoose.model('Cliente',esquemaCliente,'clientes');