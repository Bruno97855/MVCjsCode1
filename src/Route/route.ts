import express from 'express';
import index from '../Controllers/index';
const route = express.Router();
route.get('/', index.get);
route.get('/index/:id', index.APIViaCEP )
export default route;