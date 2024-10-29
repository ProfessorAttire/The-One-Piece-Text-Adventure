const readline = require("readline-sync");

const recruitPirate = (
  playerName,
  dock,
  nhq,
  crowd,
  talkedToKids,
  checkedInventory,
  triedResting,
  counter1,
  counter2
) => {
  console.log(
    "You approach the pirate recruiter. He looks you up and down before speaking."
  );
  console.log(
    "'So, you want to join our crew? We need capable and courageous souls. What can you do?'"
  );
  console.log("\nHow will you respond?");
  console.log("1. 'I'm a skilled navigator.'");
  console.log("2. 'I'm an excellent cook.'");
  console.log("3. 'I have no special skills, but I'm willing to learn.'");
  console.log("4. Change your mind and go back to the town");

  console.log("\n--------------------\n");

  const choice = readline.question("Enter the number of your choice: ");
  console.log();

  switch (choice) {
    case "1":
      console.log(
        "'A navigator, huh? We could use someone with your skills. Welcome aboard!'"
      );
      break;
    case "2":
      console.log(
        "'A cook, you say? Our crew could definitely use a talented cook. You're in!'"
      );
      break;
    case "3":
      console.log(
        "'No special skills, huh? As long as you're willing to learn, we can teach you. Welcome to the crew!'"
      );
      break;
    case "4":
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
      recruitPirate(
        playerName,
        dock,
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

  recruitPirate(
    playerName,
    dock,
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
  recruitPirate,
};
