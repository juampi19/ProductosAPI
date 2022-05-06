import mongoose from "mongoose";


const productoSchema = new mongoose.Schema( {
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    categoria: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true
    },
    imagen: {
        url: String,
        public_id: String
    }
} );

export default mongoose.model( 'Producto', productoSchema );