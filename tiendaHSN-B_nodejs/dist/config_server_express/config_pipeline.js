"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = config_pipeline;
//modulo de codigo typescript para configurar la pipeline de middlewares del servidor express
//exportamos una funcion que recibe el servidor express y configura la pipeline del middleware
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
function config_pipeline(serverExpress) {
    //1. procesamiento de datos json en el body de la peticion http_request y lo mete en prop.body del objeto request: req.body
    serverExpress.use(express_1.default.json());
    //2. procesamiento de datos en la url pasados por GET en la peticion http_request y los mete en prop.query del objeto request: req.query
    serverExpress.use(express_1.default.urlencoded({ extended: false }));
    //3. procesamiento de peticiones desde todos los origenes (dominios) CORS
    serverExpress.use((0, cors_1.default)());
    //configuramos las rutas de los endpoints
    serverExpress.use("/api/Cliente", require("./config_enrutamiento/endpointsCliente"));
    serverExpress.use("/api/Tienda", require("./config_enrutamiento/endpointsTienda"));
    serverExpress.use("/api/Direcciones", require("./config_enrutamiento/endpointDirecciones"));
}
//# sourceMappingURL=config_pipeline.js.map