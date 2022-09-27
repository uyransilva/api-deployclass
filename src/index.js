require('dotenv').config();
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', async ( req, res ) => {
    return res.json('Api ok!')
})

const port = process.env.PORTA || 3000;

app.listen(port, () => {
    console.log('Servidor funcionando na porta 3000');
})