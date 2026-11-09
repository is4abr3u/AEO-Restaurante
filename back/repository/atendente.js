import atendente from '../model/atendente.js'

class RepositoryAtendentes {
   
    async Find() {
        const atendentes = await atendente.findAll()

        return atendentes
    }

    async FindById(id) {
        const atendenteDetalhes = await atendente.findByPk(id)

        return atendenteDetalhes
    }

    async Create(nome, cpf, ativo, turno, telefone, Rep, email, senha) {
        const atendenteCreate = await atendente.create({ nome, cpf, ativo, turno, telefone, Rep, email, senha })

        return atendenteCreate
    }

    async Update(id, nome, cpf, ativo, turno, telefone, Rep, email, senha) {
        const atendenteAlterar = await atendente.findByPk(id)

        if(!atendenteAlterar) {
            throw new Error("O atendente não foi encontrado")
        }

        atendenteAlterar.nome = nome || atendenteAlterar.nome
        atendenteAlterar.cpf = cpf || atendenteAlterar.cpf
        atendenteAlterar.ativo = ativo || atendenteAlterar.ativo
        atendenteAlterar.turno = turno || atendenteAlterar.turno
        atendenteAlterar.telefone = telefone || atendenteAlterar.telefone
        atendenteAlterar.Rep = Rep || atendenteAlterar.Rep
        atendenteAlterar.email = email || atendenteAlterar.email
        atendenteAlterar.senha = senha || atendenteAlterar.senha

        await atendenteAlterar.save()
    }

    async Delete(id) {
        const atendenteDeletar = await atendente.findByPk(id)

        if(!atendenteDeletar){
            throw new Error("O atendente não foi encontrado")
        }

        await atendenteDeletar.destroy()

        return atendenteDeletar
    }

    async FindByEmail(email) {
        return atendente.findOne({ where: { email } })
    }
}

export default new RepositoryAtendentes()
