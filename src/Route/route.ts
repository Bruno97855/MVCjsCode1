import express from 'express';
import index from '../Controllers/index';
const route = express.Router();
route.get('/', index.get);
route.get('/index/:cep', index.APIViaCEP )
export default route;