import express from "express";

import produtoController from "../controller/produto_controller"

const router = express.Router();
//Prefixo: /api/produtos
//listar produtos
router.get('/', produtoController.listar);

//inserir produto
router.post('/', produtoController.inserir)

//buscar produto por id
router.get('/:id', produtoController.buscarPorId)

export default router;