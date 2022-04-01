require('dotenv').config()
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());


const journalController = require('./controllers/journalController');
app.use('/Journals', journalController);

const noteController = require('./controllers/noteController');
app.use('/Notes', noteController)

app.get('/', (req,res) => {
    res.send('hello earth!')
})

app.listen(PORT, ()=> {
    console.log(`Listening in on port: ${PORT}`)
})
