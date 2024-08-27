require('dotenv').config();

const mongoose = require('mongoose'); // Import the Mongoose library

// Local database URI (commented out)
// const URI = 'mongodb://127.0.0.1:27017/admin_panel';

// Remote MongoDB Atlas URI
const URI = ''; // Your Mongo db drive from your admin dataBase 

// Function to establish a connection ta Base Namn to the database
const ConnectionDB = async () => {
    try {
        await mongoose.connect(URI); // Attempt to connect to the database with the given URI
        console.log('====================================');
        console.log("Connection Successful"); // Log a success message if the connection is successful
        console.log('====================================');
    } catch (error) {
        console.error('Database connection failed'); // Log an error message if the connection fails
        process.exit(0); // Exit the process with status 0
    }
}

module.exports = ConnectionDB; // Export the connection function for use in other parts of the application
