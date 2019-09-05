const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
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
    /* Blog.findById(request.params.id)
        .then(data => {
            if (data) {
                response.json(data.toJSON())
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error)) */
})

blogsRouter.post('/', async (request, response, next) => {
  try{

      const body = request.body

      const blogi = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes
    })

   if(!('title' in body)){
      response.status(400)
    }

    if(!('url' in body)){
      response.status(400)
    }   

    const savedBlog = await blogi.save()
    response.json(savedBlog.toJSON())
  }catch(exception){
    next(exception)
  }

  /* blogi.save()
    .then(savedNote => {
      response.json(savedNote.toJSON())
    })
    .catch(error => next(error)) */
})

blogsRouter.delete('/:id', async (request, response, next) => {
  try{
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
  }catch(exception){
    next(exception)
  }

  /* Blog.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error)) */
})

blogsRouter.put('/:id', async (request, response, next) => {
  try{
    const body = request.body
    const blogi = {
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes
    }

    const changedBlog = await Blog.findByIdAndUpdate(request.params.id, blogi, {new: true})
    response.json(changedBlog.toJSON())
  }catch(exception){
    next(exception)
  }
  /* const body = request.body

  const blogi = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  }

  Blog.findByIdAndUpdate(request.params.id, blogi, { new: true })
    .then(updatedNote => {
      response.json(updatedNote.toJSON())
    })
    .catch(error => next(error)) */
})

module.exports = blogsRouter