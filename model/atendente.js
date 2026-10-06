import database from "../config/database.js"

class Atendente {
    constructor() {
        this.model = database.db.define("atendentes", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING,
            },
            Rep: {
                type: database.db.Sequelize.INTEGER,
            },
            email: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            senha: {
                type: database.db.Sequelize.STRING,
            }
        })
    }
}
export default new Atendente().model
