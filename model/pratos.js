import database from "../config/database.js";

class Pratos {
    constructor() {
        this.model = database.db.define("pratos", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            marca: {
                type: database.db.Sequelize.STRING,
            },
            ano: {
                type: database.db.Sequelize.INTEGER,
            }
        })
    }
}

export default new Pratos().model