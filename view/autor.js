const autorController = require('../controller/autor')

module.exports = (app)=> {
    app.get('/autors', async (req, res)=>{
        let result = await autorController.listAutor()
        res.json(result)
    })
    app.post('/autors', async (req,res)=>{
        let autor = req.body
        let result = await autorController.addAutor(autor)
        res.json(result)
    })
}