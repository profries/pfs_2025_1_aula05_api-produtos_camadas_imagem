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

function atualizar(id: number, produto: any): Produto | undefined {
    const produtoIndex = listaProdutos.findIndex(p => p.id === id);
    if (produtoIndex === -1) {
        return undefined;
    }    
    listaProdutos[produtoIndex] = {
        ...listaProdutos[produtoIndex], //mantém os outros dados de produto (id)
        nome: produto.nome,
        categoria: produto.categoria,
        preco: produto.preco
    }

    return (listaProdutos[produtoIndex]);
}

function deletar(id: number): Produto | undefined {
    const produtoIndex = listaProdutos.findIndex(p => p.id === id); 
    if (produtoIndex === -1) {
      return undefined;
    }
    //no caso, o splice retorna array, por isso foi adicionado o índice 0 no final
    return(listaProdutos.splice(produtoIndex, 1)[0]); 
}

export default {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}
