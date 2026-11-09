import ServiceBebidas from "../service/bebidas.js"

class ControllerBebidas {
    async Criar(req, res) {
        try {

            const {  nome, preco, tamanho, disponivel } = req.body;
            
            
            await ServiceBebidas.Criar(nome, preco, tamanho, disponivel)
            
            res.status(201).send ({
                mensagem: "Bebida cadastrada com sucesso"
            })
        } catch (error) {
            res.status(500).send({
                mensagem: error.message
            })
        }

  };

  async Buscar(_, res) {
    try{

        const bebidas = await ServiceBebidas.Buscar()
        res.status(200).send({
            mensagem: bebidas
        })
    } catch (error) {
        res.status(500).send({
            mensagem: error.message
        })
    }
  }

  async Detalhe (req, res)  {
    try{

        const id = req.params.id
        
        const bebidas = await ServiceBebidas.BuscarUm(id)
        
        res.status(200).send({
            mensagem: bebidas
        })
    } catch (error) {
        res.status(500).send({
            mensagem: error.message
        })
    }
}

async Alterar(req, res)  {
    try{

        const { nome, preco, tamanho, disponivel} = req.body
        const id = req.params.id
        
        await ServiceBebidas.Alterar(id, nome, preco, tamanho, disponivel)
        
        res.status(201).send({
            mensagem: "Bebida alterada com sucesso"
        })
    } catch (error) {
        res.status(500).send({
            mensagem: error.message
        })
    }
}

async Deletar(req, res)  {
    try{

        const id = req.params.id
        
        await ServiceBebidas.Deletar( id )
        
        res.status(204).send({
            mensagem: "Bebida deletada"
        })
    }catch (error) {
        res.status(500).send({
            mensagem: error.message
        })
    }
}
}


export default new ControllerBebidas()