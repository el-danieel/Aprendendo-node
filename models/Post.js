const db = require("./db")
const Post = db.sequelize.define("postagens", {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

//Post.sync({force: true}) EXECUTAR APENAS 1 VEZ

module.exports = Post
