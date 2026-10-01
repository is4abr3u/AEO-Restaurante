import BancoDeDados from "../repository/pedidos.js";

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

     if(!nome || !entrada || !prato  || !bebida || !quantidade || !formadepagamento || !pago ){
         throw new Error   ( "Parâmetros inválidos")
        }

        const pedidocriar = await BancoDeDados.Create(nome, entrada, prato, bebida, quantidade, formadepagamento, pago)

return pedidocriar
}

async Alterar(id, nome, entrada, prato, bebida, quantidade, formadepagamento, pago){

    const pedido = await BancoDeDados.Update(id, nome, entrada, prato, bebida, quantidade, formadepagamento, pago)
      
     if(!nome || !entrada || !prato  || !bebida || !quantidade || !formadepagamento || !pago ){
         throw new Error   ( "Parâmetros inválidos")
        }

   

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
