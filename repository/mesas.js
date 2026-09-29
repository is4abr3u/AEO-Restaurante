import mesas from '../model/mesas.js';

class RepositoryMesas {
////////////////////////////////////
    async Create(qtdpessoas,area,qtdcriancas, disponivel) {
        const mesaCreate = await mesa.create({ qtdpessoas , area, qtdcriancas, disponivel })

        return mesaCreate
    }
//////////////////////////////////
        async Find() {
            const mesas = await mesa.findAll()

            return mesas
        
    }
        async FindById(id) {
        const mesaDetalhes = await mesa.findByPk(id)

        return mesaDetalhes
    }
        async Update(id, qtdpessoas, area, qtdcriancas, disponivel) {
            const mesaAlterar = await mesa.findByPk(id)

            if(!mesaAlterar) {
                throw new Error("mesa não encontrado")
            }
        
            mesaAlterar.qtdpessoas = qtdpessoas || mesaAlterar.qtdpessoas
            mesaAlterar.area = area || mesaAlterar.area
            mesaAlterar.qtdcriancas = qtdcriancas || mesaAlterar.qtdcriancas
            mesaAlterar.disponivel = disponivel || mesaAlterar.disponivel
            
            await mesaAlterar.save()
    }
        async Delete(id) {

        const mesaDeletar = await mesa.findByPk(id)

        if(!mesaDeletar){
            throw new Error("Mesa não encontrado")
        }
        await mesaDeletar.destroy()

        return mesaDeletar
    }

    async FindByarea(area) {
        return mesa.findOne({ where: {area}})
    }
    
}
export default new RepositoryMesa()