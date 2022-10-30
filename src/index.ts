import express from 'express';
import { connectDB } from './db'
import postRoutes from './routes/post.routes';
import cors from 'cors';

const app = express();
connectDB();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
}))
app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.use(postRoutes)

app.listen(4000);
console.log("Server on port",4000);