import atendente from '../model/atendente.js';

class RepositoryAtendentes {
   
    async Find() {
        const atendentes = await atendente.findAll()

        return atendentes
    }

    async FindById(id) {
        const atendenteDetalhes = await atendente.findByPk(id)

        return atendenteDetalhes
    }

    async Create(nome, Rep, email, senha) {
        const atendenteCreate = await atendente.create({ nome, Rep, email, senha })

        return atendenteCreate
    }

    async Update(id, nome, Rep, email, senha) {
        const atendenteAlterar = await atendente.findByPk(id)

        if(!atendenteAlterar) {
            throw new Error("Atendente não encontrado")
        }

        atendenteAlterar.nome = nome || atendenteAlterar.nome
        atendenteAlterar.Rep = Rep || atendenteAlterar.Rep
        atendenteAlterar.email = email || atendenteAlterar.email
        atendenteAlterar.senha = senha || atendenteAlterar.senha

        await atendenteAlterar.save()
    }

    async Delete(id) {
        const atendenteDeletar = await atendente.findByPk(id)

        if(!atendenteDeletar){
            throw new Error("Atendente não encontrado")
        }

        await atendenteDeletar.destroy()

        return atendenteDeletar
    }

    async FindByEmail(email) {
        return atendente.findOne({ where: { email } })
    }
}

export default new RepositoryAtendentes()
