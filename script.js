// app.js - JavaScript module for UYA website

import { fetchQuote } from './quoteModule.js';

// Chapter 4–7: Variables, Functions, Loops, Conditionals
const categories = ["Beaded Jewelry", "Wooden Crafts", "Traditional Art", "Recycled Decor"];
const userProfile = { name: "Guest", visits: 1 };

function greetUser(profile) {
  const greeting = profile.visits > 1 ? `Welcome back, ${profile.name}!` : `Hello ${profile.name}, enjoy exploring!`;
  alert(greeting);
  console.log(greeting);
}

function listCategories() {
  const container = document.getElementById('category-list');
  for (let i = 0; i < categories.length; i++) {
    const div = document.createElement('div');
    div.className = 'category';
    div.innerText = categories[i];
    container.appendChild(div);
  }
}

// Chapter 9: Object Map with External Images
const galleryMap = new Map();
galleryMap.set('Beaded Jewelry', 'https://upload.wikimedia.org/wikipedia/commons/8/87/Beaded_jewelry_by_Zulu_artisans.jpg');
galleryMap.set('Wooden Crafts', 'https://upload.wikimedia.org/wikipedia/commons/7/71/Wooden_art_carvings_in_Kenya.jpg');
galleryMap.set('Traditional Art', 'https://upload.wikimedia.org/wikipedia/commons/2/2a/African_painting_art.jpg');
galleryMap.set('Recycled Decor', 'https://upload.wikimedia.org/wikipedia/commons/2/28/Recycled_can_lamps.jpg');
galleryMap.set('Pottery', 'https://upload.wikimedia.org/wikipedia/commons/e/eb/African_ceramics.jpg');
galleryMap.set('Handmade Dolls', 'https://upload.wikimedia.org/wikipedia/commons/2/24/African_handmade_dolls.jpg');

galleryMap.forEach((src, title) => {
  const container = document.getElementById('gallery');
  const div = document.createElement('div');
  div.className = 'gallery-item';
  div.innerHTML = `<img src="${src}" alt="${title}"><p>${title}</p>`;
  container.appendChild(div);
});

// Chapter 10: Try/Catch for safe fetch
async function displayQuote() {
  try {
    const quote = await fetchQuote();
    document.getElementById('quote').innerText = quote;
  } catch (error) {
    document.getElementById('quote').innerText = "Could not load quote.";
  }
}

// Chapter 11: Class Example
class User {
  constructor(name) {
    this.name = name;
    this.loggedIn = false;
  }

  login() {
    this.loggedIn = true;
    console.log(`${this.name} logged in.`);
  }
}

// Form validation
function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email.includes('@') || message.length < 5) {
    alert("Please fill in all fields correctly.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}

// Chart.js - Chapter 14
function renderChart() {
  const ctx = document.getElementById('visitorChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Visitors',
        data: [50, 60, 70, 80, 120],
        backgroundColor: 'rgba(109, 76, 65, 0.8)'
      }]
    }
  });
}

// Initialize all on DOM load
document.addEventListener('DOMContentLoaded', () => {
  greetUser(userProfile);
  listCategories();
  displayQuote();
  renderChart();
  document.querySelector('form').addEventListener('submit', validateForm);
});
