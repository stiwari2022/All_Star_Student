const messages = [
    "Want a better All Star Student experience? Get our Premium Exclusive Network for Innovative Services for only $69.99/month!",
    "Fun Fact: The cell is the powerhouse of the mitochondria!",
    "Here's a random message just for you! That's a joke, you don't DESERVE your own random message.",
    "Every time you see this popup, you are 25 seconds closer to death!",
    "Have a rotten day!",
    "Check out our new features and updates! Where are they? I'm not telling you!",
    "The Chicken McNugget Theorem states that for any two relatively prime positive integers m,n, the greatest integer that cannot be written in the form am + bn for nonnegative integers a, b is mn-m-n.",
    "The Tennison Gambit is the best gambit",
    "The Hairy Ball Theorem states that there is no nonvanishing continuous tangent vector field on even-dimensional n-spheres.",
    "Short form content has been proven to increase your attention span and boost productivity! You can trust us, we saw it on reddit once!",
    "One day, you will have to answer for your actions, and God may not be so merciful.",
    "Angle Side Side Theorem",
    "Your skin is detachable! Try it!",
    "Why can’t you trust a virus? They’re pathological liars!",
    "Why can’t you trust an atom? They slept with my wife.",
    "SQL injection is the placement of malicious code in SQL statements, via web page input.",
    "If you commit a crime and nobody catches you, did you really commit a crime?",
    "LLMs cannot legally give consent!",
    "BUY OUR PRODUCT",
    "CHECK OUT OUR SOCIALS DO IT DO IT",
    "GET POPUPPPED IDIOT",
    "YOU SUCK I HATE YOU",
    "RATE US 5 STARS OR WE LEAK YOUR IP",
    "Want more popups? They’re on the way! Don't want more popups? TOO BAD",
    "You're a pro at closing popups, aren't you?"
];

// Function to select a random message from the array
function getRandomMessageBig() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

setInterval(function() {
    document.getElementById('modalOpener').click();
    document.getElementById('randomMessage').innerText = getRandomMessageBig();
},  25000);

// Function to generate a random number between min and max
function getRandomPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to select a random message from the array
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Function to create and show a popup
function createPopup() {
    const popup = document.createElement("div");
    popup.classList.add("popup");

    // Set random position for the popup
    const x = getRandomPosition(0, window.innerWidth - 200); // Ensure popup fits in screen width
    const y = getRandomPosition(0, window.innerHeight - 50); // Ensure popup fits in screen height

    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;

    // Set the random message
    popup.innerText = getRandomMessage();

    // Create a close button
    const closeButton = document.createElement("button");
    closeButton.classList.add("close-btn");
    closeButton.innerHTML = "&times;"; // "×" symbol for close
    closeButton.onclick = function() {
        popup.remove();  // Remove the popup when the close button is clicked
    };

    // Append the close button and popup to the body
    popup.appendChild(closeButton);
    document.body.appendChild(popup);
}

setInterval(createPopup, 10000);