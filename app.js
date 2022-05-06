import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/index.routes.js';
import productRoutes from './routes/productos.routes.js';
import fileUpload from 'express-fileupload';

const app = express();


app.use( cors() );
app.use( morgan( 'dev' ) );
//Middlewares
app.use( express.json() );
//Para poder manejar archivos( imagenes );
app.use( fileUpload( {
    useTempFiles: true,
    tempFileDir: './upload'
} ) );

//Utilizando las routes
app.use( indexRoutes );
app.use( productRoutes );


export default app;