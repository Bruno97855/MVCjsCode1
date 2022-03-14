
import { Request, Response } from 'express';
import path from 'path';
import { CEPViewModel } from '../Models/CEPViewModel';//ViewModel(Modelo da tela)
import {AxiosRequest} from '../utils/axios'
export default {
get: (req:Request, res:Response) =>{
    res.sendFile(path.resolve(__dirname, '..','Views','index.html'))//Rederiza um html por exemplo a própria tela de index
},
APIViaCEP: async (req:Request<CEPViewModel>, res:Response) =>{//Método criado para fazer a busca do CEP pela API
    
    const DadosViewModel = new CEPViewModel(req.params.cep);//Utilização da propriedade da model(CEPViewModel)

        const BuscaCep = await AxiosRequest.get(`https://viacep.com.br/ws/${DadosViewModel.cep}/json/`);
        const Result = BuscaCep.data;

    res.send(Result)//retorna os dados da API
},

}