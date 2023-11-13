//your code here

// Get references to the elements
const appDiv = document.getElementById('app');
const swapButton = document.getElementById('swap');

// Define the swapTheme function
function swapTheme() {
  // Toggle 'night' class on the #app div
  appDiv.classList.toggle('night');

  // Toggle 'button_night' class on the #swap button
  swapButton.classList.toggle('button_night');
}

// Attach the swapTheme function to the button's click event
swapButton.addEventListener('click', swapTheme);
