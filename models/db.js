const Sequelize = require('sequelize') 

//Conectando com o banco de dados
const sequelize = new Sequelize('postagens','root','1234', {
    host: "localhost",
    dialect: 'mysql'
})

//Autenticando a conexao com o banco de dados
sequelize.authenticate().then(function(){ 
    console.log("Conectado com sucesso")
}).catch(function(erro){ //caso de erro
    console.log("Falha ao se conectar" + erro) //printa o erro ocorrido
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
