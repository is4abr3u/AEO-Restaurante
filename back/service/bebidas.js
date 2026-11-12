import RepositoryBebidas from "../repository/bebidas.js"
import bcrypt from "bcrypt"

class ServiceBebidas {

    async Buscar() {
        return RepositoryBebidas.Find()
    }

    async BuscarUm(id) {
        if(!id) {
            throw new Error("Informar os dados")
        }

        const bebida = await RepositoryBebidas.FindById(id)

        if(!bebida) {
            throw new Error("Bebida nao encontrado")
        }
        return bebida
    }

    async Criar(nome,preco,tamanho,disponivel) {
        if (!nome || !preco || !tamanho || !disponivel ) {
            throw new Error("Informar dados")
        }
        return RepositoryBebidas.Create(nome, preco, tamanho, disponivel)
    }




    async Alterar(id, nome, preco, tamanho, disponivel) {
        if(!id) {
            throw new Error("Informar os dados")
        }

        const BebidaAlterada =await RepositoryBebidas.Update(id, nome, preco, tamanho, disponivel )
        return BebidaAlterada

    }
    async Deletar(id) {
        if (!id) {
            throw new Error("Informar o id")
        }
        const bebida = await RepositoryBebidas.Delete(id)
        return bebida
    }
}

export default new ServiceBebidas()