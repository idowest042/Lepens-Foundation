import cors from "cors"
import express from "express"
import {connectdb} from "./Config/db.js"
import authRoutes from "./Routes/AuthRoutes.js"
const port= process.env.PORT || 3000
const app = express()
connectdb()

app.use(cors({
    origin: "http://localhost:5173"}))
app.use(express.json())
app.use("/api/auth", authRoutes)
app.get('/', (req, res) => {
    console.log("Request received at /")
})
app.use(express.urlencoded({ extended: true }))
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})