const mongoose = require('./connection')
const seed = require('./data.json')
const Model = require('../Model')

Model.deleteMany({})
.then(() => {
    Model.create(seed)
    .then(playlist => {
        console.log(playlist)
        process.exit()
    })
})