import ModelPedidos from '../model/pedidos.js'

class BancoDeDados{

async Find(){
    const pedidos = await ModelPedidos.findAll()

    return pedidos
}

async Findall(id){
    const buscar = await ModelPedidos.findByPk(id)

    return buscar
}


async Create(nome, entrada, prato,  bebida, quantidade, formadepagamento, pago,){

const criarpedido = await ModelPedidos.create({nome, entrada, prato,  bebida, quantidade, formadepagamento, pago,})


return criarpedido
}


async Update(id, nome, entrada, prato,  bebida, quantidade, formadepagamento, pago,){

const pedidoUpdate = await ModelPedidos.findByPk(id)

if(!pedidoUpdate){
    throw new Error("Pedido não encontrado")
}

pedidoUpdate.nome = nome
    pedidoUpdate.entrada = entrada
     pedidoUpdate.prato = prato
      pedidoUpdate.bebida = bebida
       pedidoUpdate.quantidade = quantidade
        pedidoUpdate.formadepagamento = formadepagamento
         pedidoUpdate.pago = pago

await pedidoUpdate.save()
return pedidoUpdate
}

async Delete(id){
if(!id){
    throw new Error("Favor informar o id")
}
const carroDeletar = await ModelPedidos.findByPk(id)

if(!carroDeletar){
    throw new Error("Pedido não encontrado")
}

await carroDeletar.destroy()

return carroDeletar
}

async Pagamento(id){
if(!id){
    throw new Error("Favor informar o id")
}

const pedidopagar = await ModelPedidos.findByPk(id)

if(!pedidopagar){
    throw new Error("Pedido não encontrado")
}

pedidopagar.pago = true
await pedidopagar.save()

return pedidopagar
}

}
export default new BancoDeDados()