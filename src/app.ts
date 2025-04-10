import express, { Request, Response } from 'express';
import produtoRouter from './router/produto_router';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/hello', (req: Request, res: Response) => {
    res.json({ message: "Hello World" });
})

//Trabalhando com produtos
app.use("/api/produtos", produtoRouter);

/*
//atualizar produto
app.put('/api/produtos/:id', async (req: Request, res: Response): Promise<any> => {
    const id = parseInt(req.params.id);
    const { nome, categoria, preco } = req.body;
    const produtoIndex = listaProdutos.findIndex(p => p.id === id);
  
    if (produtoIndex === -1) {
      return res.status(404).json({ error: 'Produto Não encontrado' });
    }
  
    if (!nome || !categoria || preco === undefined) {
      return res.status(400).json({ error: 'Falta dados obrigatorios' });
    }
  
    listaProdutos[produtoIndex] = {
      ...listaProdutos[produtoIndex], //mantém os outros dados de produto (id)
      nome,
      categoria,
      preco
    };
  
    res.json(listaProdutos[produtoIndex]);
  });
  
//deletar produto
app.delete('/api/produtos/:id', async(req: Request, res: Response): Promise<any> => {
    const id = parseInt(req.params.id);
    const produtoIndex = listaProdutos.findIndex(p => p.id === id);
  
    if (produtoIndex === -1) {
      return res.status(404).json({ error: 'produto not found' });
    }
  
    let produtoDeletado = listaProdutos.splice(produtoIndex, 1);
    res.json(produtoDeletado);
});
*/  
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});