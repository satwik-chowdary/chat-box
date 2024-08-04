const chatBox = document.getElementById("chat-box");
const responseOptions = document.getElementById("response-options");

const conversation = [
  {
    question: "Hello Divyamma! I've got some questions for you. Ready?",
    options: [
      { text: "Yes, let's do it!", next: 1 },
      { text: "Hmm, what do you have in mind?", next: 1 },
    ],
  },
  {
    question: "Do you think you are beautiful?",
    options: [
      { text: "Yes, I do!", next: 2 },
      { text: "Not really...", next: 3 },
    ],
  },
  {
    question:
      "Yes ofcourse you are the most beautiful girl. What's the most prettiest thing in the world?",
    options: [
      { text: "Your smile.", next: 4 },
      { text: "Your voice.", next: 4 },
      { text: "Your beauty.", next: 4 },
    ],
  },
  {
    question:
      "Shut up you idiot. You are the most beautiful girl. Don't forget it. What's the most prettiest thing in the world?",
    options: [
      { text: "Your smile.", next: 4 },
      { text: "Your voice.", next: 4 },
      { text: "Your beauty.", next: 4 },
    ],
  },
  {
    question:
      "I know it was a tough one to choose, since all three are the most prettiest things ever. What is one quality of yours that you are most proud of?",
    options: [
      { text: "Your kind and helping nature.", next: 5 },
      { text: "Your creativity.", next: 5 },
      { text: "Your determination.", next: 5 },
    ],
  },
  {
    question: "Absolutely agree!!! Now, what do you think about Sat?",
    options: [
      { text: "Absolutely, he is the best!", next: 6 },
      { text: "Best without a doubt", next: 6 },
    ],
  },
  {
    question:
      "Thank u Thank u. Telisinde le. Hehe. Thanks for being amazing person as you ever are divyamma. Just be the person you ever wanted to be. Thank you soo much for the support and care that you have shown all this time. You are truly the best bestest thing that ever happened to this world. Happy Friendship Day Divyamma!",
    options: [],
  },
];

let currentStep = 0;

function displayMessage(message, isBot = true) {
  const messageElement = document.createElement("div");
  messageElement.className = `message ${
    isBot ? "bot-message" : "user-message"
  }`;
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function displayOptions(options) {
  responseOptions.innerHTML = "";
  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.textContent = option.text;
    button.onclick = () => handleOptionClick(option);
    responseOptions.appendChild(button);
  });
}

function handleOptionClick(option) {
  displayMessage(option.text, false);
  currentStep = option.next;
  setTimeout(() => nextStep(), 500);
}

function nextStep() {
  if (currentStep < conversation.length) {
    const step = conversation[currentStep];
    displayMessage(step.question);
    displayOptions(step.options);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  nextStep();
  addFlowers();
});

function addFlowers() {
  const flowerContainer = document.createElement("div");
  flowerContainer.id = "flowers";
  document.body.appendChild(flowerContainer);

  for (let i = 0; i < 20; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.top = `${Math.random() * 100}%`;
    flower.style.animationDuration = `${Math.random() * 5 + 3}s`;
    flowerContainer.appendChild(flower);
  }
}
