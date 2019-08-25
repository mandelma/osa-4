const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('notes are returned as json', async (done) => {
    await api   
        .get('/api/testNotes')
        .expect(404)
        .expect('Content-Type', /application\/json/)
    done()
    
}) 

/* test('there are five notes', async () => {
    const response = await api.get('/api/testNotes')
  
    expect(response.body.length).toBe(1)
}) */
  
//test('the first note is about HTTP methods', async () => {
//    const response = await api.get('/api/notes')
//  
//    expect(response.body[0].content).toBe('HTML is easy')
//})


afterAll(() => {
    mongoose.connection.close()
})
