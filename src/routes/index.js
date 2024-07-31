import express from "express";
import livros from "./livrosRoutes.js"

const routes = (app)=>{
    app.route("/").get((req,res)=>res.status(200).send("Livraria do Bruno Gaetti"))
    app.use(express.json(),livros);
}


export default routes