const net = require("net");
const { IP, PORT } = require("./constants");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
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

