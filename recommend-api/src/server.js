const express = require('express');
const routes = require('./routes')
const app = express()

app.use(express.json())
app.use(routes)

const PORT = 8888
const HOST = '0.0.0.0'

app.listen(PORT, HOST, () => {
    console.log('Server is running on: http://localhost:8888')
})