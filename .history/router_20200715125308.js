const app = require("./app");

const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')
router.get('/','respond)

let respond = (req, res) => {
    res.render('home')
}
respond()
module.exports = router