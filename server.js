import express from 'express';
import roomRoutes from './routes/roomRoutes.js'
import userRoutes from './routes/userRoutes.js'
import './config/db.js'
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3001

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/rooms', roomRoutes);
app.use('/api/user', userRoutes)


// Server
app.listen(PORT, ()=> {
    console.log(`Listening on port: ${PORT}`);
})