import express from 'express';
import routes from './routes/routes.js'
import './config/db.js'
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3001

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(routes);

app.listen(PORT, ()=> {
    console.log(`Listening on port: ${PORT}`);
})