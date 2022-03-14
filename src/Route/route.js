"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../Controllers/index"));
const route = express_1.default.Router();
route.get('/', index_1.default.get); //Rota para carregar a tela de index
route.get('/index/:cep', index_1.default.APIViaCEP); //Rota para o método utilizado na hora de chamar a API
exports.default = route;
//# sourceMappingURL=route.js.map