import cors from "cors"
import express from "express"
import {connectdb} from "./Config/db.js"
import authRoutes from "./Routes/AuthRoutes.js"
import path from "path";
import { fileURLToPath } from "url";
import adminRoutes from "./Routes/AdminRoute.js";

const port = process.env.PORT || 3000
const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to database
connectdb()

// CORS Middleware
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://lepens.ng",
    "https://lepens-admin.vercel.app"
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or Postman)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(null, true); // For now, allow all during testing
        }
    },
    credentials: true,
}));

// Manual CORS headers for preflight
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin) || !origin) {
        res.setHeader('Access-Control-Allow-Origin', origin || '*');
    }
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)

// Root route
app.get('/', (req, res) => {
    console.log("Request received at /")
    res.json({ 
        message: "Backend API is running", 
        status: "ok",
        timestamp: new Date().toISOString()
    })
})

// For local development only
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}

// Export for Vercel serverless deployment
export default app;