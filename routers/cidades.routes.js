const express = require("express"); //import do express
const router = express.Router(); //define app como express
const cidade = require("../model/cidades"); // import do modelo cidade

router.get('/', (req,res) => {
    res.status(200).json({message:"rota cidades ok"});
});

router.get('/listall', async (req,res) => {
    await cidade.find({}).then((cidades) => { //pega todo mundo do banco
        console.log(cidades);
        res.status(200).json(cidades);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.get('/listname/:nome', async (req,res) => {
    const id = req.params.nome;  //recebendo nome por parametro
    await cidade.find({ nome:id }).then((cidades) => { //findOne retorna o primeiro que der match com o item passado
        console.log(cidades);
        if(cidades == null){ //validando se retorna null 
            res.status(404).json({message: "nao foi encontrado"});
        }else{
            res.status(200).json(cidades);
        }
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.post('/add', async (req,res) => { //add nova cidade no banco
    if(!req.body.nome || !req.body.bairros || !req.body.populacao || !req.body.aniversario){
        res.status(400).json({message:"Preencha todos os campos"});
    };

    await cidade.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })
});

router.put('/update/:id', async (req,res) => { //edita cidade no banco
    const id = req.params.id;
    if(!id){res.status(404).json({message:"Não encontrado!"})}else
    if(!req.body.nome || !req.body.bairros || !req.body.populacao || !req.body.aniversario){
        res.status(400).json({message:"Preencha todos os campos"});
    };

    await cidade.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.status(200).json({message: "alterado com sucesso"});
    }
    ).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    }
)});

router.delete('/delete/:id', async (req,res) => { //edita cidade no banco
    const id = req.params.id;
    if(!id){res.status(404).json({message:"Não encontrado!"})};

    await cidade.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "deletado com sucesso"});
    }
    ).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    }
)});

module.exports = router;
