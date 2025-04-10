
import produtoRepository from "../repository/produto_repository";
import { Produto } from "../types/produto";

function listar(): Produto[] {
    return produtoRepository.listar();
}

function inserir(data: any): Produto {
    if(!data.nome || !data.categoria || !data.preco) {
        throw ({id: 400, msg: "Falta dados obrigatorios"});    
    }
    return produtoRepository.inserir(data);
}

function buscarPorId(id: number): Produto {
    let produto = produtoRepository.buscarPorId(id);
    if(!produto) {
        throw ({id: 404, msg: "Produto nao encontrado"});    
    }
    return produto;
}

export default {
    listar,
    inserir,
    buscarPorId
}
