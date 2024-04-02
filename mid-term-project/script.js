let story = {
    start: {
        text: "Welcome to the nau and web Challenge! Choose your path:",
        choices: ["Jacks Quiz", "Web Quiz"],
        consequence: ["jacksQuiz", "webQuiz"],
        image: "images/main.jpg"
    },
    jacksQuiz: {
        text: "Welcome to the Jacks Quiz! Here's your first question: What is the mascot of Northern Arizona University?",
        choices: ["Lumberjacks", "Mountaineers", "Pioneers"],
        consequence: ["jacksCorrect", "jacksIncorrect", "jacksIncorrect"],
        image: "nau.jpg"
    },
    jacksCorrect: {
        text: "Correct! The mascot of NAU is the Lumberjacks. Go Jacks!",
        choices: ["Continue"],
        consequence: ["jacksQuiz2"],
        image: "success.jpg"
    },
    jacksIncorrect: {
        text: "Oops! That's incorrect. The adventure continues.",
        choices: ["Continue"],
        consequence: ["jacksQuiz2"],
        image: "failure.jpg"
    },
    jacksQuiz2: {
        text: "Second question: In what year was Northern Arizona University founded?",
        choices: ["1899", "1901", "1912"],
        consequence: ["jacksCorrect2", "jacksIncorrect2", "jacksIncorrect2"],
        image: "nau.jpg"
    },
    jacksCorrect2: {
        text: "Correct! NAU was founded in 1899.",
        choices: ["Continue"],
        consequence: ["jacksQuiz3"],
        image: "success.jpg"
    },
    jacksIncorrect2: {
        text: "Oops! That's incorrect. The adventure continues.",
        choices: ["Continue"],
        consequence: ["jacksQuiz3"],
        image: "failure.jpg"
    },
    jacksQuiz3: {
        text: "Final question: How many campuses does Northern Arizona University have?",
        choices: ["1", "2", "3"],
        consequence: ["jacksCorrect3", "jacksIncorrect3", "jacksIncorrect3"],
        image: "nau.jpg"
    },
    jacksCorrect3: {
        text: "Correct! NAU has three campuses.",
        choices: ["Continue"],
        consequence: ["start"],
        image: "success.jpg"
    },
    jacksIncorrect3: {
        text: "Oops! That's incorrect. The adventure continues.",
        choices: ["Continue"],
        consequence: ["start"],
        image: "failure.jpg"
    },
    webQuiz: {
        text: "Welcome to the Web Quiz! Here's your first question: What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        consequence: ["webCorrect", "webIncorrect", "webIncorrect"],
        image: "html.jpg"
    },
    webCorrect: {
        text: "Correct! HTML stands for Hyper Text Markup Language. You're a web wizard!",
        choices: ["Continue"],
        consequence: ["webQuiz2"],
        image: "success.jpg"
    },
    webIncorrect: {
        text: "Oops! That's incorrect. The adventure continues.",
        choices: ["Continue"],
        consequence: ["webQuiz2"],
        image: "failure.jpg"
    },
    webQuiz2: {
        text: "Second question: Which CSS property is used to change the text color of an element?",
        choices: ["color", "text-color", "font-color"],
        consequence: ["webCorrect2", "webIncorrect2", "webIncorrect2"],
        image: "css.jpg"
    },
    webCorrect2: {
        text: "Correct! The 'color' property is used to change the text color of an element.",
        choices: ["Continue"],
        consequence: ["webQuiz3"],
        image: "success.jpg"
    },
    webIncorrect2: {
        text: "Oops! That's incorrect. The adventure continues.",
        choices: ["Continue"],
        consequence: ["webQuiz3"],
        image: "failure.jpg"
    },
    webQuiz3: {
        text: "Final question: What is the file extension for a JavaScript file?",
        choices: [".js", ".javascript", ".script"],
        consequence: ["webCorrect3", "webIncorrect3", "webIncorrect3"],
        image: "javascript.jpg"
    },
    webCorrect3: {
        text: "Correct! The file extension for a JavaScript file is .js. You've completed the Web Quiz!",
        choices: ["Continue"],
        consequence: ["start"],
        image: "javascript.jpg"
    },
    webIncorrect3: {
        text: "Oops! That's incorrect. The adventure continues.",
        choices: ["Continue"],
        consequence: ["start"],
        image: "failure.jpg"
    }
};

let currentState = "start";
let timeLeft = 30;
let timerInterval;

function startGame() {
    currentState = "start";
    updatePage();

    // Change starting button name
    document.getElementById("start-button").innerText = "Begin Math Challenge";
}

function updatePage() {
    let stage = story[currentState];
    document.getElementById("story").innerText = stage.text;

    // Create buttons for choices
    let choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    for (let i = 0; i < stage.choices.length; i++) {
        let button = document.createElement("button");
        button.innerText = stage.choices[i];
        button.addEventListener("click", function() {
            makeChoice(i);
        });
        choicesDiv.appendChild(button);
    }

    // Update image
    let imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = ""; // Clear previous image
    let image = document.createElement("img");
    image.src = stage.image;
    image.alt = "Story Image";
    imageContainer.appendChild(image);
}

function makeChoice(choiceIndex) {
    let stage = story[currentState];
    let nextStageKey = stage.consequence[choiceIndex];
    
    if (nextStageKey in story) {
        if (nextStageKey.includes("Correct")) {
            document.body.style.backgroundImage = `url('success.jpg')`; // Change background image to success image
            document.body.style.backgroundSize = "30%"; // Set background size
            document.body.style.backgroundRepeat = "no-repeat"; // Set background repeat
            document.body.style.backgroundPosition = "center 250px"; // Set background position
            startTimer(); // Start or continue the timer if the correct option is chosen
        } else if (currentState === "start" && nextStageKey === "jacksQuiz") {
            document.body.style.backgroundImage = `url('nau.jpg')`; // Change background image to nau.jpg for Jacks Quiz
            document.body.style.backgroundSize = "30%"; // Set background size
            document.body.style.backgroundRepeat = "no-repeat"; // Set background repeat
            document.body.style.backgroundPosition = "center 250px"; // Set background position
        } else if (currentState === "start" && nextStageKey === "webQuiz") {
            document.body.style.backgroundImage = `url('images/html.jpg')`; // Change background image to html.jpg for Web Quiz
            document.body.style.backgroundSize = "30%"; // Set background size
            document.body.style.backgroundRepeat = "no-repeat"; // Set background repeat
            document.body.style.backgroundPosition = "center 350px"; // Set background position
        }else {
            document.body.style.backgroundImage = `url('failure.jpg')`; // Change background image to failure image
            document.body.style.backgroundSize = "30%"; // Set background size
            document.body.style.backgroundRepeat = "no-repeat"; // Set background repeat
            document.body.style.backgroundPosition = "center 300px"; // Set background position
        }
        currentState = nextStageKey;
        if (currentState === "jacksQuiz" || currentState === "webQuiz") {
            startTimer(); // Start the timer for Jacks or Web Quiz questions
        } else {
            resetTimer(); // Reset the timer for other stages
        }
        updatePage();
    } else {
        endGame();
    }

    // Pause timer if the user chose the wrong answer
    if (nextStageKey.includes("Incorrect")) {
        resetTimer();
    }
}



function startTimer() {
    clearInterval(timerInterval); // Clear any existing timer
    timeLeft = 30; // Reset the timer to 30 seconds
    document.getElementById("timer").innerText = timeLeft; // Update timer display
    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft; // Update timer display
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame(); // End the game if time runs out
        }
    }, 1000); // Update timer every second (1000 milliseconds)
}

function resetTimer() {
    clearInterval(timerInterval); // Stop the timer
    timeLeft = 30; // Reset the timer to 30 seconds
    document.getElementById("timer").innerText = timeLeft; // Update timer display
}

function endGame() {
    document.getElementById("story").innerText = "Thanks for playing the Math Challenge!";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("image-container").innerHTML = `<img src="end.jpg" alt="End Image">`;
}

// Initialize the game
startGame();