const express = require("express")
const router = express.Router()
const Model = require("./Model")

router.get("/", (req, res) => {
    Model.find({})
    .then(models => {
        for (let i = 0; i < models.length; i++) {
            res.send(`titles`)
        }
    })
})

module.exports = router