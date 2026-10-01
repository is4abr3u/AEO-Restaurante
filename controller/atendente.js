import ServiceAtendentes from '../service/atendente.js'

class ControllerAtendentes{

async Login(req, res) {
        try {
            const { email, senha } = req.body
            const token = await ServiceAtendentes.Login(email, senha)
            res.status(200).send({ token })

        } catch (error) {
            res.status(500).send({mensagem: error.message})
        }
    }

     async Criar(req, res) {
        try {
            //Rep = RESGISTRO DO EMPREGADO
            const { nome, Rep, email, senha } = req.body

            await ServiceAtendentes.Criar(nome, Rep, email, senha)
            
            res.status(201).send({ mensagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Buscar(req, res) {
        try {
            console.log(req.session)
            const atendentes = await ServiceAtendentes.Buscar()

            res.status(200).send({ mensagem: atendentes })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

     async Detalhe(req, res) {
        try {
            const id = req.params.id
            const atendente = await ServiceAtendentes.Detalhe(id)

            res.status(200).send({ mensagem: atendente })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            const { nome, Rep, email, senha } = req.body
            const id = req.session.id 

            await ServiceAtendentes.Alterar(id, nome, Rep, email, senha)
            
            res.status(201).send({ mensagem: "Alterado com sucesso" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }

     async Deletar(req, res) {
        try {
            const identificador = req.params.id

            await ServiceAtendentes.Deletar(identificador)

            res.status(204).send({ mensagem: "Deletado" })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }
}

export default new ControllerAtendentes()