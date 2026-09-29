import ServiceMe from "../service/cliente.js"

class ControllerCliente {
    ///////////////////////////
    async Criar(req, res) {
        try {
            const { nome, email, senha } = req.body

            await ServiceCliente.Criar(nome, email, senha)

            res.status(201).send({
                message:"Cadastrado com sucesso"
            })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }

    }
    ///////////////////////////
    async Buscar(_,res) {
        try{
            const clientes = await ServiceCliente.Buscar()
            res.status(200).send({
                message: clientes })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }
    // ///////////////////////////
    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const cliente = await ServiceCliente.Detalhe(id)

            res.status(200).send({
                message:cliente
            })
        } catch(error) {
            res.status(500).send({
                message: error.message
            })
        }
    }
    // ///////////////////////////
    async Alterar(req,res ) {
        try {
            const { nome, email, senha } = req.body
            const id = req.params.id

            await ServiceCliente.Alterar(id, nome, email, senha)

            res.status(201).send({message:"Alterado com sucesso"})
        }catch (error) {
            res.status(500).send({
                message:error.message
            })
        }

    }
    // ///////////////////////////
    async Deletar(req, res) {
        try {
            const identificador = req.params.id

            await ServiceCliente.Deletar( identificador)

            res.status(204).send({
                message :"Deletado"})
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }

    }

    
    ///////////////////////////

    async Login(req,res){
        try {
            const {nome, email, senha} = req.body
            const token = await ServiceCliente.Login(nome,email,senha)

            res.status(200).send({
               token 
            })
        } catch (error) {
            res.status(500).send({
                message :error.message
            })
        }
    }
}
export default new ControllerCliente()