// Importing required modules
const readline = require("readline-sync");
const mainOptions = require("./mainOptions");

// Defining the startGame function
const startGame = () => {
  // Print a welcome message to the console
  console.log("Welcome to the One Piece Adventure Game!\n");

  // Prompt the user to enter their name and store it in playerName
  const playerName = readline.question("A bystander asks for your name: ");
  console.log(
    `Ahoy, ${playerName}! You enter a bustling town filled with pirates and sailors.\n`
  );

  // Add a blank line or separator line
  console.log("\n--------------------\n");

  // Call the mainOptions function with initial parameters
  mainOptions(playerName, false, false, false, false, 0, 0);
};

// Start the game by calling the startGame function
startGame();
