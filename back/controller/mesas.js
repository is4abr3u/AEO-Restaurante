import ServiceMesa from "../service/mesas.js"

class ControllerMesa {
    ///////////////////////////
    async Criar(req, res) {
        try {
            const {qtdpessoas,area,qtdcriancas, disponivel} = req.body

            await ServiceMesa.Criar(qtdpessoas,area,qtdcriancas, disponivel)

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
            const mesas = await ServiceMesa.Buscar()
            res.status(200).send({
                message: mesas })
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

            const mesa = await ServiceMesa.BuscarUm(id)

            res.status(200).send({ mensagem: mesa })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }
    }
    // ///////////////////////////
    async Alterar(req,res ) {
        try {
            const { qtdpessoas,area,qtdcriancas, disponivel } = req.body
            const id = req.params.id

            await ServiceMesa.Alterar(id, qtdpessoas,area,qtdcriancas, disponivel)

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

            await ServiceMesa.Deletar(identificador)

            res.status(204).send({
                mensagem :"Deletado"})
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }

    }

    
    ///////////////////////////

}
export default new ControllerMesa()