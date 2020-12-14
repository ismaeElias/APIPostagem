const database = require('../database/index');

const Post = database.sequelize.define('Postagens', {
    titulo : {
        type : database.Sequelize.STRING
    },
    conteudo : {
        type : database.Sequelize.TEXT
    }
});

module.exports = Post;