
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

function atualizar(id: number, data: any): Produto {
    if(!data.nome || !data.categoria || !data.preco) {
        throw ({id: 400, msg: "Falta dados obrigatorios"});    
    }
    let produtoAtualizado = produtoRepository.atualizar(id, data);
    if (!produtoAtualizado) {
        throw ({id: 404, msg: "Produto nao encontrado"});    
    }    
    return produtoAtualizado;
}

function deletar(id: number): Produto {
    let produtoDeletado = produtoRepository.deletar(id);
    if (!produtoDeletado) {
        throw ({id: 404, msg: "Produto nao encontrado"});    
    }    
    return produtoDeletado;
}

export default {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}
