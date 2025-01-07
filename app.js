// Typing effect for the "I Am Into" text
const typingElement = document.querySelector(".typing");
const words = ["Web Development", "UI/UX Design", "Coding"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const word = words[wordIndex];
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = word.substring(0, charIndex);

    if (!isDeleting && charIndex === word.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 100 : 200);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});
