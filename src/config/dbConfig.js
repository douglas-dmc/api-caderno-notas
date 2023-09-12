import mongoose from "mongoose"
import "dotenv/config"

const url = process.env.URL

const connection = async () => {

    try {
        console.log("Conectando no MongoDB Atlas...")
         await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDB Atlas Conectado!")
    } catch (error) {
        console.log("Falha na Conexão do MongoDB Atlas!")
    }
}

export default connection