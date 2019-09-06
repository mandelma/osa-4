const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./test_helper')
const apis = supertest(app)
const Blog = require('../models/blog')
const User = require('../models/users')

describe('Blogs are returned as correct formatted', () => {
    beforeEach(async () => {
        await  Blog.deleteMany({})
    
        let blogObject = new Blog(helper.initialBlogs[0])
        await blogObject.save()
    
        blogObject = new Blog(helper.initialBlogs[1])
        await blogObject.save()
    })
    
    
     test('notes are returned as json', async () => {
        await apis   
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })    
    
    
    test('id field is id, not _id', async () => {
        const response =  await apis.get('/api/blogs')
    
        expect(response.body[0].id).toBeDefined()
        
    })

    test('all blogs are returned', async () => {
        const response = await apis.get('/api/blogs')
      
        expect(response.body.length).toBe(helper.initialBlogs.length)
    })  
})


describe('Blogs can be added and empty likes count is zero', () => {
    test('Blog can be added', async () => {
        const newBlog = {
            title: 'Some new blog',
            author: 'Kristina',
            url: 'www.kristina.ee',
            likes: 50
        }
    
        await apis
            .post('/api/blogs')
            .send(newBlog)
            .expect(200)
            .expect('Content-Type', /application\/json/)
    
        const blogsInDb = await helper.inDb()
        expect(blogsInDb.length).toBe(helper.initialBlogs.length + 1)
    })
    

    test('If no likes, likes count is zero', async () => {
        const newBlog = {
            title: 'mr',
            author: 'Marco Polo',
            url: 'www.polo.us',
        }
    
        await apis 
            .post('/api/blogs')
            .send(newBlog)
            .expect(200)
            .expect('Content-Type', /application\/json/)
    
        const noLikes = await helper.inDb()
        const noLikesBlog = noLikes.find(line => line.author === newBlog.author)
        noLikesBlog.likes = 0
        expect(noLikesBlog.likes).toBe(0)
    })
})  
   

describe('If contents are missing from blog', () => {
    test('There is no url in the blog, response 400', async () => {
        const newBlog = {
            author: "Author",
            title: "This is the title!",
            likes: 48
        }
    
        await apis
            .post('/api/blogs')
            .send(newBlog)
            .expect(400)
    }) 
    
    test('There is no title in the blog, response 400', async () => {
        const newBlog = {
            author: "Kalle",
            url: 'www.uusiUrl.com',
            likes: 480
        }
    
        await apis
            .post('/api/blogs')
            .send(newBlog)
            .expect(400)
    })
})


describe('Delete blog and update blog', () => {
    beforeEach(async () => {
        await  Blog.deleteMany({})
    
        let blogObject = new Blog(helper.initialBlogs[0])
        await blogObject.save()
    
        blogObject = new Blog(helper.initialBlogs[1])
        await blogObject.save()
    })


    test('Delete blog and response statuscode 204', async () => {
        const firstBlog = await helper.inDb()
        const deletedBlog = firstBlog[0]
    
        await apis
            .delete('/api/blogs/' + deletedBlog.id)
            .expect(204)
    
        const blogsAfter = await helper.inDb()
    
        expect(blogsAfter.length).toBe(helper.initialBlogs.length - 1)
    })

    test('Update blog likes and response statuscode 200', async () => {
        const blogsFirst = await helper.inDb()
        const updateBlog = blogsFirst[1]

        await apis
            .put('/api/blogs/' + updateBlog.id)
            .expect(200)

        const blogsAfterUpdate = await helper.inDb()
        const  updatedBlog= blogsAfterUpdate[1]
        console.log("Likes on: ", updatedBlog)
        expect(updatedBlog.likes).toBe(updateBlog.likes + 1)
    })
})

describe('When there is initially one user at db', () => {
    beforeEach(async () => {
        await User.deleteMany({})
        const user = new User({
            username: 'root',
            password: 'sekret'
        })
        await user.save()
    })

    test('creation succeeds with a fresh username', async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username: 'MarMan',
            name: 'Marko',
            password: 'salainen'
        }

        await apis
            .post('/api/users')
            .send(newUser)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd.length).toBe(usersAtStart.length + 1)

        const usernames = usersAtEnd.map(u => u.username)
        expect(usernames).toContain(newUser.username)
    }) 
 

     test('creation fails with proper statuscode and message if username already taken', async () => {
        const usersAtStart = await helper.usersInDb()
        
        const newUser = {
            username: 'root',
            name: 'Superuser',
            password: 'salainen'
        }

        const result = await apis
            .post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-Type', /application\/json/)
        
         expect(result.body.error).toContain('`username` to be unique')
        
        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd.length).toBe(usersAtStart.length) 
    })

    test('creation failed with proper statuscode if username length is less than 3', async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username: "ha",
            name: "Hanna",
            password: "secret"
        }

        await apis
            .post('/api/users')
            .send(newUser)
            .expect(400)

        const usersAtEnd = await helper.usersInDb()

        expect(usersAtStart.length).toBe(usersAtEnd.length)
    })
 
    test('creation failed with statuscode 400 if password length is less than 3 characters', async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username: "HannaHa",
            name: "Hanna",
            password: "sa"
        }

        await apis
            .post('/api/users')
            .send(newUser)
            expect(400)

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtStart.length).toBe(usersAtEnd.length)
    })
})


afterAll(() => {
    mongoose.connection.close()
})
