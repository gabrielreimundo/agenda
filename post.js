const db = require('./db')

const Post = db.sequelize.define('contato',{
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: db.Sequelize.CHAR
    },
    celular: {
        type: db.Sequelize.CHAR
    },
    email: {
        type: db.Sequelize.CHAR
    },
    dtnasc: {
        type: db.Sequelize.CHAR
    },
});

//Post.sync()

module.exports = Post