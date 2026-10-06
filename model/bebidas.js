import database from "../config/database.js";

class Bebidas {
    constructor() {
        this.model = database.db.define("bebidas",{
            id: {
                type:database.db.Sequelize.INTEGER,
                primaryKey : true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING,
            },
            preco: {
                type: database.db.Sequelize.FLOAT,
            },
            tammanho: {
                type: database.db.Sequelize.STRING,

            },
            disponivel: {
                type: database.db.Sequelize.STRING,
            }

        })
    }
}


export default new Bebidas().model