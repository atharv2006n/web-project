let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = document.getElementById("guessInput").value;
    let message = document.getElementById("message");

    attempts++;
    document.getElementById("attempts").innerText = 
        "Attempts: " + attempts;

    if (userGuess == randomNumber) {
        message.innerText = "Congratulations! You guessed correctly.";
    }
    else if (userGuess > randomNumber) {
        message.innerText = "Too High!";
    }
    else {
        message.innerText = "Too Low!";
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("message").innerText = "";
    document.getElementById("attempts").innerText = "Attempts: 0";
    document.getElementById("guessInput").value = "";
}