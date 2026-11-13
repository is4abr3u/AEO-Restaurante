import BancoDeDados from "../repository/pedidos.js";

const validarPedido = (nome, prato, quantidade, pago) => {
    if (
        typeof nome !== "string" ||
        !nome.trim() ||
        typeof prato !== "string" ||
        !prato.trim() ||
        !Number.isInteger(Number(quantidade)) ||
        Number(quantidade) <= 0 ||
        typeof pago !== "boolean"
    ) {
        throw new Error("Parâmetros inválidos")
    }
}

class ServicePedidos{

async Buscar(){
 
return BancoDeDados.Find()

}

async Buscarum(id){
    if(!id){
        throw new Error("Favor informar o id")
    }

  const pedido = await BancoDeDados.Find(id)

        if(!pedido){
            throw new Error ("Pedido não encontrado")
        }

return pedido
}

async Criar(nome, entrada, prato, bebida, quantidade, formadepagamento, pago){
    validarPedido(nome, prato, quantidade, pago)

    const pedidocriar = await BancoDeDados.Create(nome, entrada, prato, bebida, quantidade, formadepagamento, pago)

return pedidocriar
}

async Alterar(id, nome, entrada, prato, bebida, quantidade, formadepagamento, pago){
    validarPedido(nome, prato, quantidade, pago)

    const pedido = await BancoDeDados.Update(id, nome, entrada, prato, bebida, quantidade, formadepagamento, pago)

return pedido
}

async Deletar(id){
if(!id){
    throw new Error ("Favor informar o id")
}
 const pedidosDeletar = await BancoDeDados.Delete(id)

if(pedidosDeletar === -1){
    throw new Error("Pedido não encontrado")
}

return pedidosDeletar
}

async Pagamento(id){

 const  pedidos = await BancoDeDados.Pagamento(id)
      
      if(!pedidos){
       throw new Error ( "Pedido não encontrado")
      }

      pedidos.pago = true


return pedidos
}
}
export default new ServicePedidos()
