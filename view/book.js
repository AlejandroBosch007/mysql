const bookController = require('../controller/book')

module.exports = (app)=> {
    app.get('/books', async (req,res)=>{
        let result = await bookController.listBooks();
        res.json(result)
    })

    app.post('/books', async (req,res)=>{
        let book = req.body
        console.log(book)
        let result = await bookController.addBook(book)
        res.json(result)
    })
}