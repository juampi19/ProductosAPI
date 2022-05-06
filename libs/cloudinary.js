import { v2 as cloudinary} from 'cloudinary';

//Nos conectamos a nuestra cuenta
cloudinary.config( {
    cloud_name: "ds9gg46za",
    api_key: "252253168251922",
    api_secret: "XMU2H4k_18CfWKY_zhCGX2_TS1s"
} )

//Nos permite subir el archivo a cloudinary
export const subirImagen = async ( ruta ) => {
    return await cloudinary.uploader.upload( ruta, {
        folder: 'productos'
    } );
}

//Para eliminar
export const eliminarImagen = async ( id ) => {
    return await cloudinary.uploader.destroy( id );
}