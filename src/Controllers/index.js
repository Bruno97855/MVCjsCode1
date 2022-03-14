"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const CEPViewModel_1 = require("../Models/CEPViewModel"); //ViewModel(Modelo da tela)
const axios_1 = require("../utils/axios");
exports.default = {
    get: (req, res) => {
        res.sendFile(path_1.default.resolve(__dirname, '..', 'Views', 'index.html')); //Rederiza um html por exemplo a própria tela de index
    },
    APIViaCEP: async (req, res) => {
        const DadosViewModel = new CEPViewModel_1.CEPViewModel(req.params.cep); //Utilização da propriedade da model(CEPViewModel)
        const BuscaCep = await axios_1.AxiosRequest.get(`https://viacep.com.br/ws/${DadosViewModel.cep}/json/`);
        const Result = BuscaCep.data;
        res.send(Result); //retorna os dados da API
    },
};
//# sourceMappingURL=index.js.map