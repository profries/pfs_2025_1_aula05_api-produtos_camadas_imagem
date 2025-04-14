import express from "express";
import multer from 'multer';
import { Request, Response } from 'express';
import produtoController from "../controller/produto_controller"

const router = express.Router();
const upload = multer({dest:'./uploads/'});
//Prefixo: /api/produtos
//listar produtos
router.get('/', produtoController.listar);

//inserir produto
router.post('/', produtoController.inserir);

//buscar produto por id
router.get('/:id', produtoController.buscarPorId);

//atualizar produto
router.put('/:id', produtoController.atualizar);

//deletar produto
router.delete('/:id', produtoController.deletar);

//Upload
router.post('/imagens/upload', upload.single('imagem') , async (req: Request, res: Response): Promise<any>  => {
    console.log(req.file);
    res.send("Imagem carregada com sucesso!");
});
export default router;