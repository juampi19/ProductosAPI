import { Router } from 'express';

const router = Router();

//Routes
router.get( '/', ( req, res ) => res.send( 'Hello World' ) );

export default router;