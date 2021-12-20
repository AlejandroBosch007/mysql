const sequelize = require('../db/conexion')

module.exports.list = async () => {
    let result = await sequelize.query('SELECT * FROM autor')
    return result
}
module.exports.add = async (autor) => {
    await sequelize.query(`INSERT INTO autor (name,lastname,age) VALUES ('${autor.name}','${autor.lastname}',${autor.age})`);
}
