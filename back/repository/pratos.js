import Model from '../model/pratos.js'

class RepositoryPratos {

   async Find(){
const pratos1 = await Model.findAll()

return pratos1
    }

async Findall(id){
const pratos2 = await Model.findByPk(id)

return pratos2
}

async Create(nome, preco, categoria, descricao){

const pratos3 = await Model.create({nome, preco, categoria, descricao})

return pratos3
}

async Update(id, nome, preco, categoria, descricao){
const pratos4 = await Model.findByPk(id)

if(!pratos4){
    throw new Error("Consulta não encontrada")
}

pratos4.nome = nome
pratos4.preco= preco
pratos4.categoria = categoria
pratos4.descricao = descricao


await pratos4.save()

return pratos4
}

async Delete(id){
const pratos5 = await Model.findByPk(id)

if(!pratos5){
    throw new Error("Consulta não encontrada")
}

pratos5.destroy()

return pratos5
}


}

export default new RepositoryPratos()