// Importing the readline-sync module for synchronous input
const readline = require("readline-sync");

// Defining the exploreTown function
const exploreTown = (
  playerName, // Player's name
  mainOptions, // Function to return to main options
  visitedCrowd, // Boolean flag for visiting the crowd
  talkedToKids, // Boolean flag for talking to kids
  checkedInventory, // Boolean flag for checking inventory
  triedResting, // Boolean flag for trying to rest
  counter1, // Counter variable 1
  counter2, // Counter variable 2
  allOptionsExhausted // Boolean flag for exhausting all options
) => {
  // Print the current location and options to the console
  console.log("You are in the bustling town. Where would you like to go?");
  console.log("1. Shady Pirate Bar");
  console.log("2. Navy Headquarters");
  console.log("3. Large Gathering of Individuals");

  // If not all options are exhausted, provide an option to go back
  if (!allOptionsExhausted) {
    console.log("4. Go Back");
  }

  // Add a blank line or separator line
  console.log("\n--------------------\n");

  // Prompt the user to enter their choice
  const choice = readline.question("Enter the number of your choice: ");
  console.log();

  // Handle the user's choice using a switch statement
  switch (choice) {
    case "1":
      console.log(
        "You head to the Shady Pirate Bar. The atmosphere is tense and filled with suspicious characters."
      );
      break;
    case "2":
      console.log(
        "You approach the Navy Headquarters. The building is imposing and heavily guarded."
      );
      break;
    case "3":
      console.log(
        "You walk towards the large gathering of individuals. It seems like something important is happening."
      );
      break;
    case "4":
      if (!allOptionsExhausted) {
        console.log("You decide to go back to the previous options.");
        mainOptions(
          playerName,
          visitedCrowd,
          talkedToKids,
          checkedInventory,
          triedResting,
          counter1,
          counter2
        );
        return;
      }
    // Fall through to default if allOptionsExhausted
    default:
      console.log("Invalid choice. Please try again.");
      exploreTown(
        playerName,
        mainOptions,
        visitedCrowd,
        talkedToKids,
        checkedInventory,
        triedResting,
        counter1,
        counter2,
        allOptionsExhausted
      );
      break;
  }

  // Recursively call exploreTown to allow the player to make another choice
  exploreTown(
    playerName,
    mainOptions,
    visitedCrowd,
    talkedToKids,
    checkedInventory,
    triedResting,
    counter1,
    counter2,
    allOptionsExhausted
  );
};

// Exporting the exploreTown function as a module
module.exports = {
  exploreTown,
};
