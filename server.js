import express from "express"
import "dotenv/config"
import connection from "./src/config/dbConfig.js"
import routes from "./src/routes.js"

const port = process.env.PORT || 3001

// DB Connection
connection()

// Server
const app = express()

// Middleware
app.use(express.json())

// Listenner
app.listen(port, () => {
    console.log(`Server Running on port: ${port}`)
})