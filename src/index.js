require('dotenv').config();
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', async ( req, res ) => {
    return res.json('Api ok!')
})

app.listen(process.env.PORTA)