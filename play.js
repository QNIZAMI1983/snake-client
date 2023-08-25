const { connect } = require('./client');
const { setupInput, handleUserInput } = require('./input');

console.log("Connecting ...");
const connection = connect(); // Get the connection object
setupInput(connection); // Pass the connection object to setupInput
