import Database from "../config/database.js"

class Model{
constructor(){
    this.model = Database.db.define("pratos", {
id: {
   type: Database.db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},

nome:{
    type: Database.db.Sequelize.STRING
},

preco:{
    type: Database.db.Sequelize.STRING
},

categoria:{
    type: Database.db.Sequelize.STRING
},


descricao:{
    type: Database.db.Sequelize.STRING
},

})
}
}

export default new Model().model
//id, nome, preco, categoria, descricao pratos