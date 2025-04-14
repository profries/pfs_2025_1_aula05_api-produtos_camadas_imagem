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

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});