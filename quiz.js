function checkAnswer() {
    let correctAnswer = "4"; // Step 2

    // Step 3: get user’s selected option
    let selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = selectedOption ? selectedOption.value : null;

    let feedback = document.getElementById("feedback");

    // Step 4: compare answers
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Step 5: add event listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
