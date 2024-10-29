const readline = require("readline-sync");

const talkToLocals = (
  playerName,
  mainOptions,
  visitedCrowd,
  talkedToKids,
  checkedInventory,
  triedResting,
  counter1,
  counter2,
  initial = true
) => {
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

  console.log("\n--------------------\n");

  console.log("1. Where is the execution taking place?");
  console.log("2. Why is the King of Pirates being executed?");
  console.log("3. Who is the King of Pirates?");
  console.log("4. Go back");

  const choice = readline.question("Enter the number of your choice: ");
  console.log();

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
        true,
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
        false
      );
      return;
  }

  talkToLocals(
    playerName,
    mainOptions,
    visitedCrowd,
    talkedToKids,
    checkedInventory,
    triedResting,
    counter1,
    counter2,
    false
  );
};

module.exports = talkToLocals;
