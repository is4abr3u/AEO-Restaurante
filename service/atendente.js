import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import RepositoryAtendentes from '../repository/atendente.js'

const segredo = '3stac4o7'

class ServivceAtendentes{
async Login(email, senha) {
        if(!email || !senha) {
            throw new Error("Email ou senha inválido")
        }

        const atendente = await RepositoryAtendentes.FindByEmail(email)

        if(!atendente) {
            throw new Error("Email ou senha inválido")
        }

        if(
           !(await bcrypt.compare(String(senha), atendente.senha)) 
        ) {
            throw new Error("Email ou senha inválido")
        }

        return jwt.sign(
            { id: atendente.id, email },
            segredo,
            { expiresIn: 60 * 60 }
        )
    }

     async Criar(nome, Rep, email, senha) {
       
        if (!nome || !Rep || !email || !senha) {
            throw new Error("Favor informar todos os dados")
        }

        const senhaCripto = await bcrypt.hash(senha, 12)

        const atendente = await RepositoryAtendentes.Create(nome, Rep, email, senhaCripto)

        return atendente
    }

    async Buscar() {
        return RepositoryAtendentes.Find()
    }

     async Detalhe(id) {
        if(!id) {
            throw new Error("Favor informar o ID")
        }

        const atendente = await RepositoryAtendentes.FindById(id)
        
        if(!atendente) {
            throw new Error(`ID ${id} do atendente não encontrado`)
        }

        return atendente
    }

    async Alterar(id, nome, Rep, email, senha) {
        if (!id) {
            throw new Error("Favor informar os dados");
        }

        const senhaCripto = !senha 
            ? undefined 
            : await bcrypt.hash(senha, 12) 

        const atendenteAlterado = await RepositoryAtendentes.Update(id, nome, Rep, email, senhaCripto)
        
        return atendenteAlterado
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }
        
        const atendente = await RepositoryAtendentes.Delete(id)

        return atendente
    }

}

export default new ServivceAtendentes()