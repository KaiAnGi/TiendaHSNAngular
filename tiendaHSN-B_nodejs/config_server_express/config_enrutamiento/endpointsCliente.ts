import express, { Router, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import Cliente from '../../modelos/modelos_ORM_mongoose/Cliente';

//nos creamos objeto router de express para definir las rutas de la API REST de zona Cliente
const objetoRoutingCliente:Router = express.Router();

objetoRoutingCliente.post
('/Registro', async (req:Request, res:Response, next:NextFunction)=>{
    try {
        console.log('datos mandados por el cliente ANGULAR en el cuerpo de la peticion POST /Registro:',req.body);
        const { nombre, apellidos, genero, email, password } = req.body;

        //1º crear objeto cliente a partir de los datos recibidos en req.body segun esquema ORM de mongoose e insertarlo en la coleccion clientes de la BBDD mongodb
        await mongoose.connect(process.env.URL_MONGODB!);
        const nuevoCliente=new Cliente(
            {
                nombre,
                apellidos,
                genero,
                cuenta: {
                    email,
                    password: bcrypt.hashSync(password,10),
                    fechaCreacionCuenta: Date.now(),
                    cuentaActiva: false,
                    imagenAvatar: '',
                    telefonoContacto: '',
                    tipoCuenta: 'particular'
                },
                nifcif:'',
                fechaNacimiento: Date.now(),
                direcciones: [],
                pedidos: [],
                listaFavoritos: [],
                metodosPago: [],
                opiniones: [],
            }
        )

        //2º enviar correo de activacion de cuenta al email del cliente

        //3º enviar respuesta al cliente angular de exito en el registro
        res.status(200).send( { codigo:0, mensaje:'Registro procesado correctamente en el servidor' } );

    } catch (error) {
        console.log('Error en endpoint /Registro:',error);
        res.status(200).send( { codigo:1, mensaje:'Error en el servidor al procesar el registro' } );
    }
})

export default objetoRoutingCliente; 