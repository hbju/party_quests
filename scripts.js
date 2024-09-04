// Sample database of names and tasks
const tasksDatabase = [
    "Find John Doe and take a picture with him doing a 'L' on his forehead.",
    "Ask Jane Smith to teach you a word in her native language.",
    "Convince Emily Johnson to dance with you for 30 seconds and capture it on video.",
    // Add more names and tasks here
]

const participantsDatabase = [
    "Emilien Ordonneau"
]

function getRandomTask() {
    const randomIndex = Math.floor(Math.random() * tasksDatabase.length);
    return tasksDatabase[randomIndex];
}

function checkName() {
    const name = document.getElementById("nameInput").value;
    const taskResult = document.getElementById("taskResult");

    if (participantsDatabase.includes(name)) {
        taskResult.textContent = getRandomTask();
    } else {
        taskResult.textContent = "Sorry, your name is not in the database. Try again!";
    }
}
