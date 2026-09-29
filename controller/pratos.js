import ServicePratos from '../service/pratos.js'

class ControllerPratos {

    // Recebimento e a Saida das info 
    async Buscar(_, res) {
        try {
            const pratos = await ServicePratos.Buscar()
            res.send({ mensagem: pratos })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const nome = req.params.nome

            const pratos = await ServicePratos.Detalhe(nome)

            res.send({ mensagem: pratos })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }


    Criar(req, res) {
        try {
            const { nome, preco, categoria, descrição } = req.body

            ServicePratos.Criar(nome, preco, categoria, descrição)

            res.send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }


    Alterar(req, res) {
        try {
            ServicePratos.Alterar
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }


    Deletar(req, res) {
        try {
            const nome = req.body.nome

            ServicePratos.Deletar(nome)

            res.send({mensagem: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

}
export default new ControllerPratos()