require('dotenv').config()
const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl = process.env.MONGO_URL
const con = mongoose.connect(mongoUrl, {useNewUrlParser: true})
if(con){
    console.log("Yhteys tietokantaan luotu")
}else{
    console.log("Ei yhteyttä")
}

app.use(cors())
app.use(bodyParser.json())

app.get('/api/blogs', (req, res) => {
    Blog.find({}).then(response => {
        res.json(response)
    })
})

app.post('/api/blogs', (req, res) => {

    const blog = new Blog(req.body)
  
    blog.save().then(result => {
        console.log(result)
        res.status(201).json(result)
    })
})

const PORT = 3003
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})