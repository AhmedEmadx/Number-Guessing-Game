var num = Math.floor(Math.random() * 100) + 1;
var turns = 10;

function checkNumber() {
    while (turns > 0) {
        guess=prompt("Tell me your guess.", "Your guess: ");
        if (guess == 1) {
            turns = 0;
            alert("Congratulations, you won! The mystery number was " + num + ".");
        } else if (guess < num) {
            turns--;
            alert("Your guess was too low. Turns remaining: " + turns);
        } else if (guess > num) {
            turns--;
             alert("Your guess was too high. Turns remaining: " + turns);
        }
    }
        if (turns==0)
        alert ("good job");
}

    function resetGame() {
        turns = 10;
        num = Math.floor(Math.random() * 100) + 1;
}

    function getResults() {
        checkNumber();
}