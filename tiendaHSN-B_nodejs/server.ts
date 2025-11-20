//modulo typescript de entrada en el proyecto nodejs
//leo fichero .env para cargar variables de entorno
import 'dotenv/config';

import express, { Express } from 'express';
import configurepipeline from './config_server_express/config_pipeline';

//nos creamos un servidor web express a partir  de la funcion express()
const app:Express = express();

//configuramos la pipeline con middlewares del servidor para procesar peticiones entrantes del cliente de Angular...
configurepipeline(app);

app.listen(3000, (err:any) => {
    if(err){
      console.log(`error al levantar el servidor express: ${err}`);
    } else {
        console.log(`....servidor express levantado y escuchando en el puerto 3000...`);
    }

});