const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

const User = require('../models/users')
const jwt = require('jsonwebtoken')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('user', {username: 1, name: 1})
    response.json(blogs.map(blog => blog.toJSON()))     
})

blogsRouter.get('/:id', async (request, response, next) => {
  try{
    const blogi = await Blog.findById(request.params.id)
    if(blogi){
      response.json(blogi.toJSON())
    }else{
      response.status(404).end()
    }
  }catch(exception){
    next(exception)
  }
})

blogsRouter.post('/', async (request, response, next) => {
    const body = request.body
    
    try{
      const decodedToken = jwt.verify(request.token, process.env.SECRET)

      if(!request.token || !decodedToken.id){
        return resoponse.status(401).json({error: 'token missing or invalid'})
      }

      const user = await User.findById(decodedToken.id)

      const blogi = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
        user: user._id
      })
  
        if(!('title' in body)){
          response.status(400)
        }
  
        if(!('url' in body)){
          response.status(400)
        }   
  
        const savedBlog = await blogi.save()
        user.blogs = user.blogs.concat(savedBlog._id)
        await user.save()
        response.json(savedBlog.toJSON())
    }catch(exception){
      next(exception)
    }

})

blogsRouter.delete('/:id', async (request, response, next) => {
  try{
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
  }catch(exception){
    next(exception)
  }
})

blogsRouter.put('/:id', async (request, response, next) => {
  try{
    const body = request.body
    /*
    const blogi = {
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes
    } */

    const blogi = {
      likes: 90
    }

    const changedBlog = await Blog.findByIdAndUpdate(request.params.id, blogi, {new: true})
    response.status(200).json(changedBlog.toJSON())
  }catch(exception){
    next(exception)
  }
})

module.exports = blogsRouter