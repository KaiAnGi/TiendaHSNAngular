"use strict";
//definicion schema mongoose para crear objetos Cliente que se mapean
//contra documentos de la coleccion clientes de la BBDD
//OJO!! En la def. de las propiedades a mapear en el esquema de mongoose no son tipos TYPESCRIPT
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const esquemaCuenta = new mongoose_1.default.Schema({
    email: { type: String, required: true, default: '' },
    pasword: { type: String, required: true, default: '' },
    fechaCreacionCuenta: { type: Date, required: true },
    cuentaActiva: { type: Boolean, required: true, default: '' },
    imagenAvatar: String,
    telefonoContacto: String,
    tipoCuenta: { type: String, required: true, default: 'particular' },
});
const esquemaCliente = new mongoose_1.default.Schema({
    nombre: { type: String, required: true, default: '' },
    apellidos: { type: String, required: true, default: '' },
    genero: { type: String, required: true, default: '' },
    cuenta: { type: esquemaCuenta, required: true, default: '' },
    fechaNacimiento: Number,
    direcciones: [],
    pedidos: [],
    listaFavoritos: [],
    metodosPago: [],
    opiniones: [],
});
//el metodo mongoose.model crea y exporta el modelo ORM de mongoose
//el primer parametro es el nombre del modelo y ubjketos de lase a crear (clase cliente)
//el segundi parametro es el esquema mongoose que define la estructura de los documentos mapeados por el modelo
//el tercer parametro es el nombre de la coleccion de la BBDD donde se guardaran los documentos
exports.default = mongoose_1.default.model('Cliente', esquemaCliente, 'clientes');
//# sourceMappingURL=Cliente.js.map