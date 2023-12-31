import express  from "express";
// import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authroute.js'
import cors from "cors";
import categoryRoutes from './routes/categoryRoutes.js'
import productRoute from './routes/productRoute.js'
import path from "path"
// import { fileURLToPath } from 'url';
// import { __dirname } from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
//configure env
dotenv.config();

//database conffg
connectDB();

//rest object
const app=express()

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'./client/build')))

//routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoute);


//rest api  
app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})

  
//PORT
const PORT =process.env.PORT || 8000;

//app listen
app.listen(PORT,()=>{
    console.log(`Server is Running ${process.env.DEV_MODE} mode on port ${PORT}`);
}) 