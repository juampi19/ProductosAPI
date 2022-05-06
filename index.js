import app from './app.js';
import { conexionDB } from './utils/mongoose.js';



async function main() {
    //Conexion a la base de datos
    await conexionDB();

    const PORT = process.env.PORT || 8080;
    app.listen( PORT );
    console.log( `Server is running on port: ${ PORT }` );
}

main();