import livro from "../models/Livro.js"

class LivroController{
    static async listarLivros(req,res){
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listLivros)
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    }

    static async listarLivroPorID(req,res){
        try{
            const id = req.params.id
            const LivroEncontrado = await livro.findById(id);
            res.status(200).json(LivroEncontrado)
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na busca do livro.`})
        }
    }

    static async cadastrarLivro (req,res){
        try{
            const novoLivro = await livro.create(req.body)
            res.status(201).json({Message: "criado com sucesso!", livro: novoLivro})
        }catch(erro){
            res.status(500).json({Message: `${erro.message} - falha ao cadastrar livro`})
        }
    }
    static async AtualizarLivro(req,res){
        try{
            const id = req.params.id
            await livro.findByIdAndUpdate(id,req.body);
            res.status(200).json({Message: "Livro atualizado com sucesso!"})
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na busca do livro.`})
        }
    }
    static async ExcluirLivro(req,res){
        try{
            const id = req.params.id
            await livro.findByIdAndDelete(id);
            res.status(200).json({Message: "Livro deletado com sucesso!"})
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na busca do livro.`})
        }
    }
}

export default LivroController