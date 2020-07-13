const express = require("express")
const routes = require("./routes")
const app = express()

require('./database')

const PORT = 8080
const HOST = "0.0.0.0"

app.use(express.json())
app.use(routes)

app.listen(PORT, HOST, () => {
    console.log("Server is running on http://localhost:8080")
})