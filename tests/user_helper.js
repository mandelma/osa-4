const User = require('../models/users')

const initialUsers = [
    {
        username: "root",
        name: "Testija",
        password: "test"
    },
    {
        username: "secRoot",
        name: "Tester2",
        password: "uustest"
    }
]

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(note => note.toJSON())
}


module.exports = {
    initialUsers,
    usersInDb
}