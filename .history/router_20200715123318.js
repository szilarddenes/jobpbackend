const app = require("./app");

const express = require('express')
const router = express.Router()

router.get('/', () => {
    let hello = 'hello'
    return hello
})