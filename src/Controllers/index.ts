
import { Request, Response } from 'express';
import path from 'path';
import { CEPViewModel } from '../Models/CEPViewModel';
import {AxiosRequest} from '../utils/axios'
export default {
get: (req:Request, res:Response) =>{
    res.sendFile(path.resolve(__dirname, '..','Views','index.html'))
},
usuarios: (req:Request, res:Response) =>{
    
    const params = req.params
    res.send(params.id)
},
//da  repository
APIViaCEP: async (req:Request, res:Response) =>{
    
    const DadosViewModel = new CEPViewModel(req.params.id);
       const BuscaCep = await AxiosRequest.get(`https://viacep.com.br/ws/${DadosViewModel.cep}/json/`);
       const Result = BuscaCep.data;
    res.send(Result)
},

}