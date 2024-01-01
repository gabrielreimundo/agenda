const express = require("express");
const app = express()
const Post = require('./post');
const cors = require('cors'); 

app.use(cors());
app.use(express.json());

//recebendo
app.post('/add', (req, res) => {
    const {id: id, nome: nome, celular: celular, email: email, dtnasc: dtnasc}= req.body; 
      Post.create({
         id: req.body.id,
         nome: req.body.nome,
         celular: req.body.celular,
         email: req.body.email,
         dtnasc: req.body.dtnasc
      }).then(function(){
        res.json({ message: 'Dados recebidos com sucesso!' });
      }).catch(function(erro){
        res.status(500).json({ erro: erro.toString() });
      });
   })

   //CALLBACK    
   app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081")
});