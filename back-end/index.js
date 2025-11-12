import cors from "cors"
import express from "express"
import {connectdb} from "./Config/db.js"
import authRoutes from "./Routes/AuthRoutes.js"
import path from "path";
import { fileURLToPath } from "url";
import adminRoutes from "./Routes/AdminRoute.js";

const port= process.env.PORT || 3000
const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
connectdb()

app.use(cors({
    origin: ["http://localhost:5173",
        "http://localhost:5174",
    
    ], // Your React app URL
  credentials: true,
}))
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes);
app.get('/', (req, res) => {
    console.log("Request received at /")
})
app.use(express.urlencoded({ extended: true }))
// Serve static files
app.use(express.static(path.join(__dirname, "public")));
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})