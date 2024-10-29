const readline = require("readline-sync");

const crowd = (
  playerName,
  nhq,
  dock,
  talkedToKids,
  checkedInventory,
  triedResting,
  counter1,
  counter2
) => {
  console.log("You join the large crowd. It’s an electric atmosphere.");
  console.log(
    "You see the legendary pirate Gol D. Roger on the execution platform."
  );
  console.log("As he speaks, the crowd hangs on every word.");
  console.log(
    "Gol D. Roger: My treasure? If you want it, you can have it. Seek it out! I left everything I own in one piece."
  );
  console.log("With his final words, Gol D. Roger ignites the age of piracy.");
  console.log("\nThe crowd erupts into chaos. You have a choice to make.");
  console.log("1. Talk to people in the crowd about the event");
  console.log("2. Head to the Navy Headquarters to join the Navy");
  console.log("3. Go to the docks to join the pirates");

  console.log("\n--------------------\n");

  let choice = readline.question("Enter the number of your choice: ");
  console.log();

  while (true) {
    switch (choice) {
      case "1":
        console.log(
          "You talk to people in the crowd. Everyone is excited and inspired by Gol D. Roger’s words."
        );
        console.log("\nWhat do you want to do next?");
        console.log("2. Head to the Navy Headquarters to join the Navy");
        console.log("3. Go to the docks to join the pirates");
        console.log("\n--------------------\n");
        choice = readline.question("Enter the number of your choice: ");
        break;
      case "2":
        console.log(
          "You decide to head to the Navy Headquarters to join the Navy."
        );
        nhq(
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
      case "3":
        console.log("You decide to go to the docks to join the pirates.");
        dock(
          playerName,
          nhq,
          crowd,
          talkedToKids,
          checkedInventory,
          triedResting,
          counter1,
          counter2
        );
        return;
      default:
        console.log("Invalid choice. Please try again.");
        console.log("\n--------------------\n");
        choice = readline.question("Enter the number of your choice: ");
        break;
    }
  }
};

module.exports = {
  crowd,
};
