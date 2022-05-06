import dotenv from 'dotenv';
dotenv.config();

//Url para poder conectarme a la base de datos
export const MONGODB_URI = process.env.MONGODB_URI;