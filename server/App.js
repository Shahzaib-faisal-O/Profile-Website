const express = require('express');
const route = require('./router/routes')
const PORT = 5000;
const cors = require('cors')
const ConnectionDB = require('./utils/db'); // Import the database connection function

const app = express();


//* Cors Policy Function
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE,PATCH,HEAD',
    credentials: true,
};

app.use(cors(corsOptions)) //*  Handle cors policy

app.use(express.json()); //* Use Express middleware to parse JSON request bodies

app.use('/', route);

ConnectionDB().then(() => {
    app.listen(PORT, (req, res) => {
        console.log('====================================');
        console.log(`App is listening on http://localhost:${PORT} `);
        console.log('====================================');
    })
})
