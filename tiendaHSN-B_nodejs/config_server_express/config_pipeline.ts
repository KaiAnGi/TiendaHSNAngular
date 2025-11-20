//modulo de codigo typescript para configurar la pipeline de middlewares del servidor express
//exportamos una funcion que recibe el servidor express y configura la pipeline del middleware
import express, { Express } from "express";
import cors from "cors";
import objetoRoutingTienda from "./config_enrutamiento/endpointsCliente";
import objetoRoutingCliente from "./config_enrutamiento/endpointsCliente";

export default function config_pipeline(serverExpress: Express): void {
  
    //1. procesamiento de datos json en el body de la peticion http_request y lo mete en prop.body del objeto request: req.body
  serverExpress.use(express.json());
  //2. procesamiento de datos en la url pasados por GET en la peticion http_request y los mete en prop.query del objeto request: req.query
  serverExpress.use(express.urlencoded({ extended: false }));
  //3. procesamiento de peticiones desde todos los origenes (dominios) CORS
  serverExpress.use(cors());

  //configuramos las rutas de los endpoints
  serverExpress.use("/api/Cliente",require("./config_enrutamiento/endpointsCliente"));
  serverExpress.use("/api/Tienda",require("./config_enrutamiento/endpointsTienda"));
  serverExpress.use("/api/Direcciones",require("./config_enrutamiento/endpointDirecciones"));
}
