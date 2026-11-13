import api from './api'


//buscarUm
export const buscarPedidos = async () => {
    const response = await api.get('/v1/restaurante/pedidos/buscar')

    return response.data.message
}


export const criarPedido = async (nome, entrada, prato, bebida, quantidade, formadepagamento, pago) => {
    const body = {nome, entrada, prato, bebida, quantidade, formadepagamento, pago}
    const response = await api.post('/v1/restaurante/pedidos/criar', body, {
        headers: {'Content-Type': 'application/json'}
    })

    return response.data
}

//alterar
export const alterarPedido = async (id, nome, entrada, prato, bebida, quantidade, formadepagamento, pago) => {
    const body = {nome, entrada, prato, bebida, quantidade, formadepagamento, pago}
    const response = await api.put(`/v1/restaurante/pedidos/alterar/${id}`, body, {
        headers: {'Content-Type': 'application/json'}
    })

    return response.data
}

//deletar
export const deletarPedido = async (id) => {
    const response = await api.delete(`/v1/restaurante/pedidos/deletar/${id}`)

    return response.data
}



// id:{
//             type: Database.db.Sequelize.INTEGER,
//              primaryKey: true,
//             autoIncrement: true
//         },

//         nome:{
//             type: Database.db.Sequelize.STRING
//         },

//         entrada:{
//             type: Database.db.Sequelize.STRING
//         },

//         prato:{
//             type: Database.db.Sequelize.STRING
//         },

//         bebida:{
//             type: Database.db.Sequelize.STRING
//         },

//         quantidade:{
//             type: Database.db.Sequelize.INTEGER
//         },

//         formadepagamento: {
//             type: Database.db.Sequelize.STRING
//         },

//         pago:{
//             type: Database.db.Sequelize.BOOLEAN,
//             allowNull: true,
//             defaultValue: true
//         }