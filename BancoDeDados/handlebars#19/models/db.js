const Sequelize = require("sequelize")
const sequelize = new Sequelize('app','root','1718',{
    host:'localhost',
    dialect:'mysql',
})

module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
}