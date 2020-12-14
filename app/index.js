const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const database = require("./database/index");
const bodyParser = require("body-parser");
const Post = require("./models/Post");

// Config
// Template Engine
app.engine(
  "handlebars",
  handlebars({ defaultLayout: false, layoutsDir: "views/layouts/" })
);
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  Post.findAll({order : [['id','DESC']]}).then((posts) => {
    res.render(`${__dirname}/views/layout/home`,{posts: posts});
  });
});

app.get("/cadastro", (req, res) => {
  res.render(`${__dirname}/views/layout/formulario`);
});

app.post("/add", (req, res) => {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      res.send(`Houve um erro ${error}`);
    });
});

app.get('/deletar/:id', (req,res) => {
  Post.destroy({where : {
    'id' : req.params.id
  }}).then(()=>{
    res.send('Postagem deletada')
  }).catch((error) =>{
    res.send(`Está postagem não existe. ${error}`)
  });
});

app.listen(3000, () => console.log("rodando"));
