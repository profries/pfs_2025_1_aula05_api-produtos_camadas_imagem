import { Request, Response } from 'express';

import produtoService from "../service/produto_service"


function listar(req: Request, res: Response) {
    res.json(produtoService.listar());
}

async function inserir(req: Request, res: Response): Promise<any> {
    const produto = req.body;
    try{ 
        let produtoInserido = produtoService.inserir(produto);
        res.status(201).json(produtoInserido);
    }
    catch(err:any) {
        res.status(err.id).json(err.msg);
    }
}

async function buscarPorId(req: Request, res: Response): Promise<any> { 
    const id = parseInt(req.params.id);
    try{ 
        const produto = produtoService.buscarPorId(id);
        res.json(produto);
    } catch (err: any) {
        res.status(err.id).json(err.msg);
    }
}

export default {
    listar,
    inserir,
    buscarPorId
}