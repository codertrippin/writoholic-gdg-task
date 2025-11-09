const textElement = document.getElementById("typewriter-text");
const titles = ["Proses", "Poems", "Novels", "Dramas"];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100; // Speed of typing (in milliseconds)
const deletingSpeed = 50; // Speed of deleting (in milliseconds)
const pauseTime = 1500; // Pause after a word is fully typed (in milliseconds)

function typeTitle() {
  const currentTitle = titles[titleIndex];

  // Determine the text to display
  let displayText = currentTitle.substring(0, charIndex);

  // Update the HTML element
  textElement.textContent = displayText;

  if (!isDeleting) {
    // --- TYPING PHASE ---
    if (charIndex < currentTitle.length) {
      charIndex++;
      // Continue typing
      setTimeout(typeTitle, typingSpeed);
    } else {
      // Finished typing, start deletion after a pause
      isDeleting = true;
      setTimeout(typeTitle, pauseTime);
    }
  } else {
    // --- DELETING PHASE ---
    if (charIndex > 0) {
      charIndex--;
      // Continue deleting
      setTimeout(typeTitle, deletingSpeed);
    } else {
      // Finished deleting, move to the next title
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length; // Loop back to the start if at the end
      setTimeout(typeTitle, 500); // Short pause before starting the next word
    }
  }
}

// Start the effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
  typeTitle();
});
