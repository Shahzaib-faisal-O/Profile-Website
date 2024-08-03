const Contact = require('../model/model'); // Import the User model

// Controller function for the home route
const home = (req, res) => {
    try {
        res.status(200).send('Hello world from the Controller Side 3 2 1 '); // Send a success response with a message
    } catch (error) {
        res.status(500); // Send a server error status
        console.log(`Server Error ${error}`); // Log the error to the console
    }
}
const contact = async (req, res) => {
    try {
        //* Destructure the required fields from the request body
        const { username, email, message } = req.body;

        //* Create a new user with the provided data
        const user = await Contact.create({ username, email, message });

        //* Send a success response with the request body
        res.status(201).json({ message: user });
    } catch (error) {
        //* If an error occurs, send a 400 status with an error message
        res.status(401).json({ msg: 'Page not found ' });
    }
}

// Controller function for the registration route


module.exports = { home, contact }; // Export the controller functions
