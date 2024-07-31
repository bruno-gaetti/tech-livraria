import express from "express";  
import LivroController from "../Controller/LivroController.js";

const routes =  express.Router();

routes.get("/livros",LivroController.listarLivros)
routes.get("/livros/:id",LivroController.listarLivroPorID)
routes.post("/livros",LivroController.cadastrarLivro)
routes.post("/livros/:id",LivroController.AtualizarLivro)
routes.delete("/livros/:id",LivroController.ExcluirLivro)
export default routes;