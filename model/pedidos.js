import Database from '../config/database.js'

class ModelPedidos{
constructor(){
    this.model = Database.db.define("pedidos", {

        id:{
            type: Database.db.Sequelize.INTEGER,
             primaryKey: true,
            autoIncrement: true
        },

        nome:{
            type: Database.db.Sequelize.STRING
        },

        entrada:{
            type: Database.db.Sequelize.STRING
        },

        prato:{
            type: Database.db.Sequelize.STRING
        },

        bebida:{
            type: Database.db.Sequelize.STRING
        },

        quantidade:{
            type: Database.db.Sequelize.INTEGER
        },

        formadepagamento: {
            type: Database.db.Sequelize.STRING
        },

        pago:{
            type: Database.db.Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: true
        }

    })
}

}
export default ModelPedidos().model
