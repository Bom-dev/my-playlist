const express = require("express")
const app = express()
const parser = require('body-parser')

const controller = require("./controller")

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.use("/", controller)

app.listen(3000, () => {
    console.log("Listening on port 3000")
})