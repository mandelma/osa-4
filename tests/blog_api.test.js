const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const apis = supertest(app)
const Blog = require('../models/blog')



const initialBlogs = [
    {
        title: 'mr',
        author: 'Eka',
        url: 'www.eka.com',
        likes: 44
    },
    {
        title: 'ms',
        author: 'Toka',
        url: 'www.toka.com',
        likes: 89
    }
]

beforeEach(async () => {
    await  Blog.deleteMany({})

    let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()

    blogObject = new Blog(initialBlogs[1])
    await blogObject.save()
})


/* test('notes are returned as json', async () => {
    await apis   
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})  */   



test('all blogs are returned', async () => {
    const response = await apis.get('/api/blogs')
  
    expect(response.body.length).toBe(initialBlogs.length)
}) 
   
test('a blog is within the returned blogs', async () => {
    const response = await apis.get('/api/blogs')

    const authors = response.body.map(item => item.author)
  
    expect(authors).toContain('Toka')
})
 

afterAll(() => {
    //setTimeout(() => process.exit(), 1000)
    mongoose.connection.close()
})
