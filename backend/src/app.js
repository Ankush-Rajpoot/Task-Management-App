import express from 'express';
// import mongoose from 'mongoose';
import cors from 'cors';
// import dotenv from 'dotenv';
import cron from 'node-cron';
import cookieParser from "cookie-parser";
import taskRoutes from './routes/tasks.js';
import { checkExpiredTasks } from './controllers/taskController.js';


const app = express();
// const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// Routes
app.use('/api/tasks', taskRoutes);

// Cron job to check expired tasks every minute
cron.schedule('* * * * *', async () => {
  try {
    await checkExpiredTasks();
  } catch (error) {
    console.error('Error in cron job:', error);
  }
});



export {app}