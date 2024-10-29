const readline = require("readline-sync");
const mainOptions = require("./mainOptions");

const startGame = () => {
  console.log("Welcome to the One Piece Adventure Game!\n");

  const playerName = readline.question("A bystander asks for your name: ");
  console.log(
    `Ahoy, ${playerName}! You enter a bustling town filled with pirates and sailors.\n`
  );

  console.log("\n--------------------\n");

  mainOptions(playerName, false, false, false, false, 0, 0);
};

startGame();
