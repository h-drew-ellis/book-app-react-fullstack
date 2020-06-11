const express = require("express")
const app = express()
const models = require("./models")
const cors = require('cors')
const bodyParser = require("body-parser")


app.use(cors())
app.use(express.json())


app.get("/api/books", async (req, res) => {
    let books = await models.Books.findAll()
    res.json(books)
})


app.post("/add-book", async (req, res) => {
    try {
        const newBook = await models.Books.build({
            title: req.body.title,
            genre: req.body.genre,
            publisher: req.body.publisher,
            year: req.body.year,
            imageURL: req.body.imageURL
        })
        let response = await newBook.save()
        res.send(response)
    } catch (error) {
        console.log(error.message)
    }
})

app.listen(3719, () => {
    console.log("Moby Dick says: Your Server running on http://localhost:3719")
})