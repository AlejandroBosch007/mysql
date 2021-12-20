const autorModel = require('../model/autor')

module.exports.listAutor = async ()=>{
    let result = await autorModel.list()
    return result
}

module.exports.addAutor = async (autor)=> {
    await autorModel.add(autor)
    return 'Autor added'
}
