const Blog = require('../models/blog')
const User = require('../models/users')
const initialBlogs = [
    {
        title: 'Eka blogi',
        author: 'Eka',
        url: 'www.eka.com',
        likes: 44
    },
    {
        title: 'Toka blogi',
        author: 'Toka',
        url: 'www.toka.com',
        likes: 89
    }
]

const blogForDelete = {
    title: "Delete this blog",
    author: "Testaaja",
    url: "/",
    likes: 11
}


const inDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(note => note.toJSON())
}


const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}


module.exports = {
    initialBlogs,
    inDb,
    blogForDelete,
    usersInDb
}