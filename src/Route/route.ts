import express from 'express';
import index from '../Controllers/index';
const route = express.Router();
route.get('/', index.get);//Rota para carregar a tela de index
route.get('/index/:cep', index.APIViaCEP );//Rota para o método utilizado na hora de chamar a API
export default route;