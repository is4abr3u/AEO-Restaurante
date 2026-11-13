import database from "../config/database.js";

class Mesa {
    constructor() {
        this.model = database.db.define("mesas", {
            id: {
                type:database.db.Sequelize.INTEGER,
                primaryKey : true,
                autoIncrement: true
            },
            qtdpessoas: { 
                type: database.db.Sequelize.INTEGER,
            },
            area : { 
                type: database.db.Sequelize.STRING,
            },
            qtdcriancas: {
                type: database.db.Sequelize.INTEGER,
            },
            disponivel: {
                type: database.db.Sequelize.STRING,
            }
        })
    }
}

export default new Mesa().model