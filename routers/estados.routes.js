const express = require("express"); //import do express
const router = express.Router(); //define app como express
const estado = require("../model/estados"); // import do modelo estado

router.get('/', (req,res) => {
    res.status(200).json({message:"rota estados ok"});
});

router.get('/listall', async (req,res) => {
    await estado.find({}).then((estados) => { //pega todo mundo do banco
        console.log(estados);
        res.status(200).json(estados);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.get('/listname/:id', async (req,res) => {
    const id = req.params.id;  //recebendo nome por parametro
    await estado.findOne({ _id:id }).then((estados) => { //findOne retorna o primeiro que der match com o item passado
        console.log(estados);
        if(estados == null){ //validando se retorna null 
            res.status(404).json({message: "nao foi encontrado"});
        }else{
            res.status(200).json(estados);
        }
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.post('/add', async (req,res) => { //add nova estado no banco
    if(!req.body.nome || !req.body.regiao || !req.body.populacao || !req.body.salario){
        res.status(400).json({message:"Preencha todos os campos"});
    };

    await estado.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })
});

router.put('/edit/:id', async (req,res) => { //edita estado no banco
    const id = req.params.id;
    if(!id){res.status(404).json({message:"Não encontrado!"})}else
    if(!req.body.nome || !req.body.regiao || !req.body.populacao || !req.body.salario){
        res.status(400).json({message:"Preencha todos os campos"});
    };

    await estado.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.status(200).json({message: "alterado com sucesso"});
    }
    ).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    }
)});

router.delete('/delete/:id', async (req,res) => { //edita estado no banco
    const id = req.params.id;
    if(!id){res.status(404).json({message:"Não encontrado!"})};

    await estado.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "deletado com sucesso"});
    }
    ).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    }
)});

module.exports = router;
