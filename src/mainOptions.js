const readline = require("readline-sync");
const { exploreTown } = require("./exploreTown");
const talkToLocals = require("./talkToLocals");

const mainOptions = (
  playerName,
  visitedCrowd,
  talkedToKids,
  checkedInventory,
  triedResting,
  counter1,
  counter2
) => {
  const options = [];

  if (!talkedToKids) {
    options.push("Talk to the locals");
  }

  if (!checkedInventory) {
    options.push("Check your inventory");
  }

  if (!triedResting) {
    options.push("Rest at the inn");
  }

  const allOptionsExhausted = options.length === 0;

  if (allOptionsExhausted) {
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
    return;
  }

  options.unshift("Explore the town");

  console.log("What would you like to do?");
  options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });

  console.log("\n--------------------\n");

  const choice = readline.question("Enter the number of your choice: ");
  console.log(`You chose: ${choice}`);

  switch (choice) {
    case "1":
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
    case "2":
      if (!talkedToKids) {
        talkToLocals(
          playerName,
          mainOptions,
          visitedCrowd,
          talkedToKids,
          checkedInventory,
          triedResting,
          counter1,
          counter2,
          true
        );
      } else if (!checkedInventory) {
        console.log(
          "Wow, you really have nothing on you. Don't worry, you won't have to manage an inventory in this game."
        );
        mainOptions(
          playerName,
          visitedCrowd,
          talkedToKids,
          true,
          triedResting,
          counter1,
          counter2
        );
      } else if (!triedResting) {
        if (!checkedInventory) {
          console.log(
            "You don't have any money! Maybe you can find a job somewhere or steal something from someone in the crowd."
          );
        } else {
          console.log(
            "You should know by now you already checked your inventory. You don't have the money to spend a night at an Inn."
          );
        }
        mainOptions(
          playerName,
          visitedCrowd,
          talkedToKids,
          checkedInventory,
          true,
          counter1,
          counter2
        );
      } else {
        console.log("Invalid choice. Please try again.");
        mainOptions(
          playerName,
          visitedCrowd,
          talkedToKids,
          checkedInventory,
          triedResting,
          counter1,
          counter2
        );
      }
      break;
    default:
      console.log("Invalid choice. Please try again.");
      mainOptions(
        playerName,
        visitedCrowd,
        talkedToKids,
        checkedInventory,
        triedResting,
        counter1,
        counter2
      );
      break;
  }
};

module.exports = mainOptions;
