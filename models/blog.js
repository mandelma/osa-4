const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const noteSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    url: {
        type: String
    },
    likes: {
        type: Number
    }
})

noteSchema.set('toJSON', {
    trasnsform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Blog', noteSchema)