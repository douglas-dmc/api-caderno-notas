import express from "express"
import mongoose from "mongoose"
import "dotenv/config"

const port = process.env.PORT || 3001

const app = express()

app.use(express.json())

app.listen(port, () => {
    console.log(`Server Running on port: ${port}`)
})