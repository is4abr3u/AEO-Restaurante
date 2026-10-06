import ServicePratos from '../service/pratos.js'

class ControllerPratos {
async Buscar(req, res) {
    try {

        const restaurante = await ServicePratos.Buscar()

        res.status(201).send({mensagem: restaurante})
    } catch (error) {
        res.status(500).send({mensagem: error.message})
    }
}

async BuscarUm(req, res)  {
    try {
        const id = Number(req.params.id)

const restaurante = await ServicePratos.Buscarum(id)

        res.status(201).send({mensagem: restaurante})

    } catch (error) {
        res.status(500).send({mensagem: error.message})
    }
}

async Criar(req, res)  {
    try {
        const {nome, preco, categoria, descricao} = req.body

await ServicePratos.Criar(nome, preco, categoria, descricao)

res.status(201).send({mensagem: "Consulta marcada com sucesso"})

    } catch (error) {
        res.status(500).send({mensagem: error.message})
    }
}

async Alterar(req, res)  {
    try {
        const id = Number(req.params.id) 
        const {nome, preco, categoria, descricao} = req.body

await ServicePratos.Alterar(id, nome, preco, categoria, descricao)

res.status(201).send({mensagem: "Pedido alterado com sucesso!"})

    } catch (error) {
        res.status(500).send({mensagem: error.message})
    }
}

async Deletar(req, res)  {
    try {
        const id = Number(req.params.id)

     await   ServicePratos.Deletar(id)

res.status(201).send({mensagem: "Pedido cancelado com sucesso"})

    } catch (error) {
        res.status(500).send({mensagem: error.message})
    }
}

}
export default new ControllerPratos()