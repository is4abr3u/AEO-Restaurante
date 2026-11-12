import bebidas from "../model/bebidas.js"

class RepositoryBebidas {

    async Create(nome, preco, tamanho, disponivel) {
        const bebidaCreate = await bebidas.create({ nome, preco, tamanho, disponivel})

        return bebidaCreate
    }

    async Find() {
        const lista = await bebidas.findAll()

        return lista
    }
    async FindById(id) {
        const bebidaDetalhe = await bebidas.findByPk(id)

        return bebidaDetalhe
    }
    async Update(id, nome, preco, tamanho, disponivel) {
        const bebidaAlterar = await bebidas.findByPk(id)

        if(!bebidaAlterar) {
            throw new Error("Bebida nao encontrada")

        }
        bebidaAlterar.nome = nome || bebidaAlterar.nome
        bebidaAlterar.preco = preco || bebidaAlterar.preco
        bebidaAlterar.tamanho = tamanho || bebidaAlterar.tamanho
        bebidaAlterar.disponivel = disponivel || bebidaAlterar.disponivel

        await bebidaAlterar.save()
    }
    async Delete(id) {
        const bebidaDeletar = await bebidas.findByPk(id)

        if(!bebidaDeletar) {
            throw new Error("bebida nao encontrada")
        }
        await bebidaDeletar.destroy()
        
        return bebidaDeletar
    }
    async FindByNome(nome) {
        return bebidas.findOne({ where: { nome}})
    }
}

export default new RepositoryBebidas()