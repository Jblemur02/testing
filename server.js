import express from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql';
import cors from 'cors';

dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => res.send('Server running'));

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "12345",
    database: "first"
});

const PORT = process.env.PORT || 5000;

app.post('/register',(req,res) => {

    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO user(username,password) VALUES (?,?)" , [username,password], 
    (err, result) => {
        console.log(err);
    })
});

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
