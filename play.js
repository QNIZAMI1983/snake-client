const { connect } = require('./client');

const handleUserInput = function (key) {
  if (key === '\u0003') {
    // Ctrl + C was pressed
    process.exit();
  }
  // Add more key handlers if needed
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Register the event listener for "data" event
  stdin.on("data", handleUserInput);

  return stdin;
};

console.log("Connecting ...");
const connection = connect();
const stdin = setupInput();
