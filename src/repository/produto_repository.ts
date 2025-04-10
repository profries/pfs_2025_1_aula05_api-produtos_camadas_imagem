import { Produto } from "../types/produto";

let listaProdutos: Produto[] = [];
let proximoId = 1;

function listar(): Produto[] {
    return listaProdutos;
}

function inserir(data: any): Produto {
    const novoProduto: Produto = {
        id: proximoId++,
        nome: data.nome,
        categoria: data.categoria,
        preco: data.preco        
    }
    listaProdutos.push(novoProduto);
    return novoProduto;        
}

function buscarPorId(id: number): Produto | undefined {
    const produto = listaProdutos.find( function (prod) {
        return (prod.id === id);
    } )
    return produto;
}

export default {
    listar,
    inserir,
    buscarPorId
}
