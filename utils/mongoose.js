import mongoose from "mongoose";
import { MONGODB_URI } from "../config.js";

//Funcion para conectarme a la base de datos
export async function conexionDB() {
    try {
        await mongoose.connect( MONGODB_URI );
        console.log( 'Conectado a MongoDB' );
    } catch (error) {
        console.error( error );
    }
}