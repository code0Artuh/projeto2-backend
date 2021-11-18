const express = require("express"); //import do express
const router = express.Router(); //define app como express
const paise = require("../model/paises"); // import do modelo paise

router.get('/', (req,res) => {
    res.status(200).json({message:"rota paises ok"});
});

router.get('/listall', async (req,res) => {
    await paise.find({}).then((paises) => { //pega todo mundo do banco
        console.log(paises);
        res.status(200).json(paises);
    }).catch((err) => {
        res.status(204).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.get('/listname/:nome', async (req,res) => {
    const id = req.params.nome;  //recebendo nome por parametro
    await paise.find({ nome:id }).then((paises) => { //findOne retorna o primeiro que der match com o item passado
        console.log(paises);
        if(paises == null){ //validando se retorna null 
            res.status(404).json({message: "nao foi encontrado"});
        }else{
            res.status(200).json(paises);
        }
    }).catch((err) => {
        res.status(404).json({message:"Nada foi encontrado"});
        console.error(err);
    });
});

router.post('/add', async (req,res) => { //add nova paise no banco
    if(!req.body.nome || !req.body.idioma || !req.body.populacao || !req.body.pib){
        res.status(400).json({message:"Preencha todos os campos"});
    };

    await paise.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    })
});

router.put('/update/:id', async (req,res) => { //edita paise no banco
    const id = req.params.id;
    if(!id){res.status(404).json({message:"Não encontrado!"})}else
    if(!req.body.nome || !req.body.idioma || !req.body.populacao || !req.body.pib){
        res.status(400).json({message:"Preencha todos os campos"});
    };

    await paise.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.status(200).json({message: "alterado com sucesso"});
    }
    ).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    }
)});

router.delete('/delete/:id', async (req,res) => { //edita paise no banco
    const id = req.params.id;
    if(!id){res.status(404).json({message:"Não encontrado!"})};

    await paise.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "deletado com sucesso"});
    }
    ).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    }
)});

module.exports = router;
