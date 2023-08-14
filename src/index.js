function verifyInput(event) {
    const eventData = event.data;
    if (!isNaN(eventData)){
        console.log("It's a number");
        if (eventData === "0"){
            console.log("It's a 0 try again");
        } else {
            console.log("It's a valid Number");
        }
    } else {
        console.log("It's not a number");
    }
}

function main() {
    const userInputs = document.querySelectorAll(".squareInput")
    for(let userInput of userInputs){
        userInput.addEventListener("input", verifyInput)
    }
};

window.addEventListener("DOMContentLoaded", main);