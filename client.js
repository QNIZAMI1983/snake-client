const net = require("net");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15', // IP address here
    port: 50541, // PORT number here
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Event listener for "data" event
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // Event listener for "connect" event
  conn.on("connect", () => {
    console.log("Successfully connected to game server.");

    // Send the player's name to the server
    conn.write("Name: QAN");
  });

  // Event listener for "end" event
  conn.on("end", () => {
    console.log("Connection closed by server.");
  });

  return conn;
};

// Export the connect function using ES6 shorthand syntax
module.exports = { connect };

