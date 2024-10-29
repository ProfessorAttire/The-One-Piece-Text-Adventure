const readline = require("readline-sync");
const { shadyPirateBar } = require("./shadyPirateBar");
const { nhq } = require("./nhq");
const { crowd } = require("./crowd");
const { dock } = require("./dock");
const { recruitPirate } = require("./recruitPirate");

const exploreTown = (
  playerName,
  mainOptions,
  visitedCrowd,
  talkedToKids,
  checkedInventory,
  triedResting,
  counter1,
  counter2,
  allOptionsExhausted
) => {
  console.log("You are in the bustling town. Where would you like to go?");
  console.log("1. Shady Pirate Bar");
  console.log("2. Navy Headquarters");
  console.log("3. Large Gathering of Individuals");
  if (!allOptionsExhausted) {
    console.log("4. Go Back");
  }
  console.log("\n--------------------\n");
  const choice = readline.question("Enter the number of your choice: ");
  console.log();

  switch (choice) {
    case "1":
      console.log(
        "You head to the Shady Pirate Bar. The atmosphere is tense and filled with suspicious characters."
      );
      shadyPirateBar(
        playerName,
        mainOptions,
        visitedCrowd,
        talkedToKids,
        checkedInventory,
        triedResting,
        counter1,
        counter2
      );
      return;
    case "2":
      console.log(
        "You approach the Navy Headquarters. The building is imposing and heavily guarded."
      );
      nhq(
        playerName,
        mainOptions,
        visitedCrowd,
        talkedToKids,
        checkedInventory,
        triedResting,
        counter1,
        counter2
      );
      return;
    case "3":
      console.log(
        "You walk towards the large gathering of individuals. It seems like something important is happening."
      );
      crowd(
        playerName,
        nhq,
        dock,
        talkedToKids,
        checkedInventory,
        triedResting,
        counter1,
        counter2
      );
      return;
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

module.exports = {
  exploreTown,
};
