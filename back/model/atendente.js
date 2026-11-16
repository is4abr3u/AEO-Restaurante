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
                allowNull: true
            },
            cpf: {
                type: database.db.Sequelize.STRING,
                allowNull: true,
                unique: true
            },
            ativo: {
                type: database.db.Sequelize.BOOLEAN,
            },
            turno: {
                type: database.db.Sequelize.STRING,
                allowNull: true
            },
            telefone: {
                type: database.db.Sequelize.STRING,
                allowNull: true,
                unique: true
            },
            Rep: {
                type: database.db.Sequelize.INTEGER,
                allowNull: true,
                unique: true
            },
            email: {
                type: database.db.Sequelize.STRING,
                allowNull: true,
                unique: true
            },
            senha: {
                type: database.db.Sequelize.STRING,
                allowNull: true
            }
        })
    }
}
export default new Atendente().model
