const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/users')

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users.map(u => u.toJSON()))
})


usersRouter.post('/', async (request, response, next) => {
    try{
        const body = request.body

        if(body.password === undefined){
            console.log("Error: password field should not to be empty!")
            return response.status(400).json({Error: "Password field should not to be empty!"}).end()
        }

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(body.password, saltRounds)

        const user = new User({
            username: body.username,
            name: body.name,
            passwordHash,
        })


        if(body.password.length < 3){""
            console.log("Error: password length should be at least 3 characters!")
            return response.status(400).json({error: "Password length should be at least 3 characters!"}).end()
        }

        console.log("Password length:", body.password, body.password.length)
        const savedUser = await user.save()

        response.json(savedUser)
    }catch(exception){
        next(exception)
    }
})

module.exports = usersRouter
