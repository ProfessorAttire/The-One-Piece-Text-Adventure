const readline = require("readline-sync");

const shadyPirateBar = (
  playerName,
  mainOptions,
  visitedCrowd,
  talkedToKids,
  checkedInventory,
  triedResting,
  counter1,
  counter2
) => {
  console.log("You are in the Shady Pirate Bar. What would you like to do?");
  console.log("1. Talk to the suspicious-looking pirate");
  console.log("2. Order a drink");
  console.log("3. Try to overhear some conversations");
  console.log("4. Change your mind and leave quickly");

  console.log("\n--------------------\n");

  const choice = readline.question("Enter the number of your choice: ");
  console.log();

  switch (choice) {
    case "1":
      console.log(
        "You approach the suspicious-looking pirate. He eyes you warily and asks, 'What do you want?'"
      );
      console.log("1. Ask about any rumors or information");
      console.log("2. Challenge him to a duel");

      const pirateChoice = readline.question(
        "Enter the number of your choice: "
      );
      console.log();

      switch (pirateChoice) {
        case "1":
          console.log(
            "The pirate shares some interesting rumors about hidden treasure."
          );
          console.log(
            "You learn about a hidden treasure on a nearby island. This could be valuable information!"
          );
          break;
        case "2":
          console.log("The pirate accepts your challenge. Prepare for a duel!");
          console.log(
            "You engage in a fierce duel with the pirate. After a tough battle, you emerge victorious!"
          );
          break;
        default:
          console.log("Invalid choice. Please try again.");
          break;
      }
      break;
    case "2":
      console.log(
        "You order a drink from the bartender. The drink is surprisingly good."
      );
      console.log("1. Ask the bartender about the town");
      console.log("2. Ask if the bartender has heard any interesting rumors");

      const bartenderChoice = readline.question(
        "Enter the number of your choice: "
      );
      console.log();

      switch (bartenderChoice) {
        case "1":
          console.log(
            "The bartender tells you about the town's history and notable places."
          );
          console.log(
            "You learn about the town's history and some notable places to visit."
          );
          break;
        case "2":
          console.log(
            "The bartender shares some interesting rumors they've heard."
          );
          console.log(
            "The bartender tells you about a hidden treasure on a nearby island."
          );
          break;
        default:
          console.log("Invalid choice. Please try again.");
          break;
      }
      break;
    case "3":
      console.log(
        "You try to overhear some conversations. You pick up bits of gossip and rumors."
      );
      console.log("1. A pirate mentions a hidden treasure on a nearby island.");
      console.log(
        "2. You hear someone mention a secret meeting happening tonight."
      );

      const overhearChoice = readline.question(
        "Enter the number of your choice: "
      );
      console.log();

      switch (overhearChoice) {
        case "1":
          console.log(
            "You learn about a hidden treasure on a nearby island. This could be valuable information!"
          );
          break;
        case "2":
          console.log(
            "You overhear details about a secret meeting happening tonight. This could be an opportunity to gather more intel."
          );
          break;
        default:
          console.log("Invalid choice. Please try again.");
          break;
      }
      break;
    case "4":
      console.log(
        "Realizing this might not be the best place to hang out, you make a hasty exit. Sometimes discretion is the better part of valor!"
      );
      console.log(
        "You quickly leave the bar and head back to the bustling town."
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
  }

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
};

module.exports = {
  shadyPirateBar,
};
