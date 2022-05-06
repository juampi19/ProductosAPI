//Metodos para el CRUD
import { eliminarImagen, subirImagen } from '../libs/cloudinary.js';
import Producto from '../models/producto.js';
import fs from 'fs-extra'


export const getProductos = async ( req, res ) => {
    //Controlamos con try catch
    try {
        const productos = await Producto.find();
        res.send( productos );
    } catch (error) {
        return res.status( 500 ).json( {message: error.message} );
    }

};

export const createProducto = async ( req, res ) => {
    try {
        //Comprobar si se esta recibiendo los datos
        const { nombre, categoria, precio } = req.body;

        let imagen;
        //Comprobamos si esta recibiendo un nuevo archivo
        if( req.files.imagen ) {
            const resultado = await subirImagen( req.files.imagen.tempFilePath );

            console.log( resultado.public_id )

            imagen = {
                url: resultado.secure_url,
                public_id: resultado.public_id
            }
            await fs.remove( req.files.imagen.tempFilePath );
            console.log( resultado );
        }

        const nuevoProducto = new Producto( { nombre, categoria, precio, imagen } );
        await nuevoProducto.save();

        return res.json( nuevoProducto );

    } catch (error) {
        return res.status( 500 ).json( {message: error.message} );
    }
};

export const updateProducto = async ( req, res ) => {
    
    try {
        //Para actualizar el producto
        const productoActualizado = await Producto.findByIdAndUpdate( req.params.id, req.body,{ new: true } );
        return res.send( productoActualizado );

    } catch (error) {
        return res.status( 500 ).json( {message: error.message} );
    }
};

export const deleteProducto = async ( req, res ) => {
    

    try {
        const productoEliminado = await Producto.findByIdAndDelete( req.params.id );
        //Si el id no existe, mandamos un status 
        if( !productoEliminado ) return res.sendStatus( 404 );
        
        if( productoEliminado.imagen.plublic_id ) {
            await eliminarImagen( productoEliminado.imagen.plublic_id );
        }

        
        return res.sendStatus( 204 ); 
    } catch (error) {
        return res.status( 500 ).json( {message: error.message} );
    }
};

export const getProducto = async ( req, res ) => {
    

    try {
        const producto = await Producto.findById( req.params.id );
        //Si el id no existe, mandamos un status 
        if( !producto ) return res.sendStatus( 404 );

        return res.json( producto );

    } catch (error) {
        return res.status( 500 ).json( {message: error.message} );
    }
};