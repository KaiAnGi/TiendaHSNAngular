"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const Cliente_1 = __importDefault(require("../../modelos/modelos_ORM_mongoose/Cliente"));
//nos creamos objeto router de express para definir las rutas de la API REST de zona Cliente
const objetoRoutingCliente = express_1.default.Router();
objetoRoutingCliente.post('/Registro', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('datos mandados por el cliente ANGULAR en el cuerpo de la peticion POST /Registro:', req.body);
        const { nombre, apellidos, genero, email, password } = req.body;
        //1º crear objeto cliente a partir de los datos recibidos en req.body segun esquema ORM de mongoose e insertarlo en la coleccion clientes de la BBDD mongodb
        yield mongoose_1.default.connect(process.env.URL_MONGODB);
        const nuevoCliente = new Cliente_1.default({
            nombre,
            apellidos,
            genero,
            cuenta: {
                email,
                password: bcrypt_1.default.hashSync(password, 10),
                fechaCreacionCuenta: Date.now(),
                cuentaActiva: false,
                imagenAvatar: '',
                telefonoContacto: '',
                tipoCuenta: 'particular'
            },
            nifcif: '',
            fechaNacimiento: Date.now(),
            direcciones: [],
            pedidos: [],
            listaFavoritos: [],
            metodosPago: [],
            opiniones: [],
        });
        //2º enviar correo de activacion de cuenta al email del cliente
        //3º enviar respuesta al cliente angular de exito en el registro
        res.status(200).send({ codigo: 0, mensaje: 'Registro procesado correctamente en el servidor' });
    }
    catch (error) {
        console.log('Error en endpoint /Registro:', error);
        res.status(200).send({ codigo: 1, mensaje: 'Error en el servidor al procesar el registro' });
    }
}));
exports.default = objetoRoutingCliente;
//# sourceMappingURL=endpointsCliente.js.map