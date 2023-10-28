// script.js

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const mainContent = document.getElementById("main-content");
    const weekContainers = document.querySelectorAll(".week-container");
    const thElements = document.querySelectorAll("th");
  
    body.classList.toggle("dark-mode");
    mainContent.classList.toggle("dark-mode");
  
    weekContainers.forEach((container) => {
      container.classList.toggle("dark-mode");
    });
  
    thElements.forEach((element) => {
      element.classList.toggle("dark-mode");
    });
  }
  
  // Add an event listener to the button
  document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
  