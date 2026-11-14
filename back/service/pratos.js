import RepositoryPratos from "../repository/pratos.js"

class ServicePratos {

async Buscar(){
    return RepositoryPratos.Find()
}

async Buscarum(id){
if(!id){
    throw new Error ("Favor informar o id")
}

      const Pedido1 = await RepositoryPratos.Findall(id)

        if(!Pedido1){
            throw new Error ("Pedido não encontrada")

        }

       // res.status(201).send({mensagem: BancoDeDados})
return Pedido1
}

   async Criar( nome, preco, categoria, descricao){
        if(!nome || !preco || !categoria || !descricao){
    throw new Error ("Parametros invalidos")
}

 const Pratocriar =  await RepositoryPratos.Create(nome, preco, categoria, descricao)
 return Pratocriar
    }

 async   Alterar(id, nome, preco, categoria, descricao){
        if(!id){
            throw new Error ("Favor informar o id")
        }
        const Pedido2 = RepositoryPratos.Update(id, nome, preco, categoria, descricao)

if(!Pedido2){
    throw new Error ("Pedido não encontrado")
}


return Pedido2
    }

async Deletar(id){
    if(!id){
        throw new Error("Favor informar o id")
    }
    const Pedido3 = RepositoryPratos.Delete(id)

        if(Pedido3 === -1){
            throw new Error ("Pedido não encontrado")
            
        }

return Pedido3
}

}
export default new ServicePratos()