import RepositoryMesa from '../repository/mesas.js'
import bcrypt from 'bcrypt'

class ServiceMesa {

    async Buscar() {
        return RepositoryMesa.Find()
    }

    async BuscarUm(id) {
        if(!id) {
            throw new Error("Favor informar todos os dados.")
        }

        const mesa = await RepositoryMesa.FindById(id)

        if(!mesa) {
            throw new Error("Mesa não encontrada")
        }

        return mesa
    }

    async Criar(qtdpessoas, area, qtdcriancas, disponivel) {
        if(!qtdpessoas || !area || !qtdcriancas || !disponivel) {
            throw new Error("Favor informar todos os dados.")
        }

        const mesa = await RepositoryMesa.Create(qtdpessoas, area, qtdcriancas, disponivel)

        return mesa
    }

    async Alterar(id, qtdpessoas, area, qtdcriancas, disponivel) {
        if (!id) {
            throw new Error("Favor informar os dados");
        }

        const mesaAlterado = await RepositoryMesa.Update(id,qtdpessoas, area, qtdcriancas, disponivel)
        
        return mesaAlterado
    }

    async Deletar(id) {
        if(!id) {
            throw new Error("Favor informar todos os dados.")
        }

        const mesa = await RepositoryMesa.Deletar(id)

        return mesa
    }

}

export default new ServiceMesa()