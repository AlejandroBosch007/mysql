const sequelize = require('../db/conexion')

module.exports.list = async ()=> {
    let result = await sequelize.query('SELECT * FROM books');
    return result;
};

module.exports.add = async (book)=> {
    await sequelize.query(`INSERT INTO books (title,description,autor) VALUES ('${book.title}','${book.description}',${book.autor})`);
}