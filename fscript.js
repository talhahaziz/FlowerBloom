onload = () => {
    const birthdayMessage = document.getElementById("birthdayMessage");
    const birthdayText = document.getElementById("birthdayText");
    const message = "";  // Your message here

    // Split the message into individual letters and wrap each one in a span
    birthdayText.innerHTML = message.split("").map(letter => `<span>${letter}</span>`).join("");

    const letters = birthdayText.querySelectorAll("span");

    // Apply the animation to each letter
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.1}s`; // Delay for each letter
        letter.classList.add("letter-animation");
    });

    // Keep the message visible permanently
    birthdayMessage.classList.remove("hidden");

    // Remove the timeout and removal of the message
    document.body.classList.remove("not-loaded");

    setTimeout(() => {
        birthdayMessage.classList.add("fade-out");
    }, 100000);
};