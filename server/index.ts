import express from "express";
import dotenv from 'dotenv'
import path from "path"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 10000
app.use(express.static(path.join(__dirname, '../client/MerchantAppFrontend/dist')))

app.get("/api", (req, res) => {
    res.send("hey")
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/MerchantAppFrontend/dist/index.html'))
})
app.listen(PORT, () => console.log(`server is running on localhost:${PORT}`))

