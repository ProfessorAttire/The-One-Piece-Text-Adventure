const readline = require("readline-sync");

const nhq = (
  playerName,
  mainOptions,
  visitedCrowd,
  talkedToKids,
  checkedInventory,
  triedResting,
  counter1,
  counter2
) => {
  console.log("You are at the Navy Headquarters. What would you like to do?");
  console.log("1. Talk to the officer in charge");
  console.log("2. Inspect the bulletin board for missions");
  console.log("3. Explore the training grounds");
  console.log("4. Leave and return to town");

  console.log("\n--------------------\n");

  const choice = readline.question("Enter the number of your choice: ");
  console.log();

  switch (choice) {
    case "1":
      console.log(
        "You approach the officer in charge. He looks stern but attentive."
      );
      break;
    case "2":
      console.log(
        "You inspect the bulletin board. It is filled with various missions and notices."
      );
      break;
    case "3":
      console.log(
        "You explore the training grounds. Sailors are rigorously training."
      );
      break;
    case "4":
      console.log(
        "You decide to leave the Navy Headquarters and return to town."
      );
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
    default:
      console.log("Invalid choice. Please try again.");
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
  }

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
};

module.exports = {
  nhq,
};
