import express from 'express';
import dotenv from "dotenv";
import mongoDbConnect from './config/mongoDB.js';
import userRouter from "./router/user.route.js";
import errorHandler from './middlewares/errorHandler.js';
import productRoutes from './router/product.route.js';
import cors from "cors";

// Load environment variables
dotenv.config();

// Initialization
const app = express();

// CORS configuration
const corsConfig = {
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
};
app.use(cors(corsConfig));

// Set middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static folders
app.use(express.static("public"));

// Routing
app.use("/api/v1/user", userRouter);
app.use('/api/v1/product', productRoutes);

// Error handlers
app.use(errorHandler);

// MongoDB connection and server start
mongoDbConnect().then(() => {
    const PORT = process.env.PORT || 9090
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });
}).catch(error => {
    console.error("MongoDB connection failed:", error);
});
