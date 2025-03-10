
// Array of random messages
const messages = [
  "Have an awesome day!",
  "You're doing great!",
  "Keep smiling!",
  "Today is your day!",
  "Stay positive!",
  "You got this!",
  "Make today amazing!",
  "Believe in yourself!",
  "Dream big!",
  "Never give up!"
];

// Function to get random message
function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

// Generate and return a random message
console.log(getRandomMessage());