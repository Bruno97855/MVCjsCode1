import express from 'express';
import Newroute from './src/Route/route' 
const server = express();
const port = 3000;

server.use(express.json());
server.use(Newroute);
server.use(express.static("public"));
server.listen(port);
