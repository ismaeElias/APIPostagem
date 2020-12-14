const Sequelize = require("sequelize");
const sequelize = new Sequelize("postapp", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("contado com sucesso ao bando");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = { Sequelize: Sequelize, sequelize: sequelize };

/*
const Postagem = sequelize.define('postagens',{
    titulo : {
        type: Sequelize.STRING,
    },
    conteudo : {
        type : Sequelize.TEXT
    }
});



const Usuario = sequelize.define('usuarios', {
    nome : {
        type: Sequelize.STRING
    },
    sobrenome : {
        type : Sequelize.STRING
    },
    idade : {
        type : Sequelize.INTEGER
    },
    email : {
        type : Sequelize.STRING
    }
})
*/
/*Usuario.create({
    nome : 'Ismael',
    sobrenome : 'Elias',
    idade : 21,
    email: 'ismael@gmail.com'
});*/
