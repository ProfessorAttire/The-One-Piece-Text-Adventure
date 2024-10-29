const readline = require("readline-sync");

const dock = (
  playerName,
  nhq,
  crowd,
  talkedToKids,
  checkedInventory,
  triedResting,
  counter1,
  counter2
) => {
  console.log(
    "You arrive at the docks. Pirate ships are docked, and pirates are preparing to set sail."
  );
  console.log("You see a group of pirates recruiting new members.");
  console.log("\nWhat would you like to do?");
  console.log("1. Talk to the pirate recruiter");
  console.log("2. Inspect the pirate ships");
  console.log("3. Change your mind and go back to the town");

  console.log("\n--------------------\n");

  const choice = readline.question("Enter the number of your choice: ");
  console.log();

  switch (choice) {
    case "1":
      console.log(
        "You approach the pirate recruiter. He looks you up and down before speaking."
      );
      break;
    case "2":
      console.log(
        "You inspect the pirate ships. They are heavily armed and ready for adventure."
      );
      break;
    case "3":
      console.log(
        "Realizing the pirate life might not be for you, you decide to return to the town."
      );
      nhq(
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
  }

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
};

module.exports = {
  dock,
};
