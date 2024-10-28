// Importing the readline-sync module for synchronous input
const readline = require("readline-sync");

// Defining the talkToLocals function
const talkToLocals = (
  playerName, // Player's name
  mainOptions, // Function to return to main options
  visitedCrowd, // Boolean flag for visiting the crowd
  talkedToKids, // Boolean flag for talking to kids
  checkedInventory, // Boolean flag for checking inventory
  triedResting, // Boolean flag for trying to rest
  counter1, // Counter variable 1
  counter2, // Counter variable 2
  initial = true // Boolean flag for initial conversation
) => {
  // Initial conversation with the kids
  if (initial) {
    console.log("You overhear a conversation between two kids:");
    console.log(
      `Kid 1: Did you hear? The King of Pirates is going to be executed today!`
    );
    console.log(`Kid 2: Really? That's unbelievable! Where is it happening?`);
    console.log();
  } else {
    console.log("Is there anything else you would like to know?");
  }

  // Add a blank line or separator line
  console.log("\n--------------------\n");

  // Print the options for the player to choose from
  console.log("1. Where is the execution taking place?");
  console.log("2. Why is the King of Pirates being executed?");
  console.log("3. Who is the King of Pirates?");
  console.log("4. Go back");

  // Prompt the user to enter their choice
  const choice = readline.question("Enter the number of your choice: ");
  console.log();

  // Handle the user's choice using a switch statement
  switch (choice) {
    case "1":
      console.log(
        `Kid 1: It's happening at the central square. Everyone is going to be there!`
      );
      break;
    case "2":
      console.log(
        `Kid 2: They say he knows the location of the greatest treasure in the world, and the Navy wants to make sure no one else finds it.`
      );
      break;
    case "3":
      console.log(
        `Kid 1: The King of Pirates is the most notorious pirate ever! His name is Gol D. Roger.`
      );
      break;
    case "4":
      console.log("You decide to go back to the previous options.");
      console.log(
        "The kids run off into the crowd, excited to see what is going to happen next."
      );
      mainOptions(
        playerName,
        visitedCrowd,
        true, // Update talkedToKids to true
        checkedInventory,
        triedResting,
        counter1,
        counter2
      );
      return;
    default:
      console.log("Invalid choice. Please try again.");
      talkToLocals(
        playerName,
        mainOptions,
        visitedCrowd,
        talkedToKids,
        checkedInventory,
        triedResting,
        counter1,
        counter2,
        false // Set initial to false for subsequent interactions
      );
      return;
  }

  // Recursively call talkToLocals to allow the player to make another choice
  talkToLocals(
    playerName,
    mainOptions,
    visitedCrowd,
    talkedToKids,
    checkedInventory,
    triedResting,
    counter1,
    counter2,
    false // Set initial to false for subsequent interactions
  );
};

// Exporting the talkToLocals function as a module
module.exports = talkToLocals;
