import database from "../config/database.js"

//atributos: id, nome, cpf, ativo, turno, telefone, Rep, email, senha

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
            cpf: {
                type: database.db.Sequelize.STRING,
            },
            ativo: {
                type: database.db.Sequelize.BOOLEAN,
            },
            turno: {
                type: database.db.Sequelize.STRING,
            },
            telefone: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            Rep: {
                type: database.db.Sequelize.INTEGER,
                unique: true
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
