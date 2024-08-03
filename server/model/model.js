const mongoose = require('mongoose'); // Import the Mongoose library
const { Schema, model } = mongoose; // Destructure Schema and model from Mongoose

// Define the schema with the necessary fields and their types
const SchemaType = Schema({
    // define schema
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
})

//* Define the User model with the collection name "User" using the user schema
const Contact = model("Contact", SchemaType);

module.exports = Contact; //* Export the User model for use in other parts of the application