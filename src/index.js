let puzzleBoard = {largeBox1:[{row1:[],row2:[],row3:[]},{col1:[],col2:[],col3:[]}] 
    , largeBox2:[{row1:[],row2:[],row3:[]},{col4:[],col5:[],col6:[]}] 
    , largeBox3:[{row1:[],row2:[],row3:[]},{col7:[],col8:[],col9:[]}] 
    , largeBox4:[{row4:[],row5:[],row6:[]},{col1:[],col2:[],col3:[]}] 
    , largeBox5:[{row4:[],row5:[],row6:[]},{col4:[],col5:[],col6:[]}] 
    , largeBox6:[{row4:[],row5:[],row6:[]},{col7:[],col8:[],col9:[]}]
    , largeBox7:[{row7:[],row8:[],row9:[]},{col1:[],col2:[],col3:[]}] 
    , largeBox8:[{row7:[],row8:[],row9:[]},{col4:[],col5:[],col6:[]}] 
    , largeBox9:[{row7:[],row8:[],row9:[]},{col7:[],col8:[],col9:[]}]}

function addInputToArray(eventData, eventId){
    console.log(eventData)
    console.log(eventId)
    
}

function verifyInput(event) {
    const eventId = document.getElementById(event.target.id)
    const eventData = event.data;
    if (!isNaN(eventData)){
        if (eventData === "0"){
            alert("0 is not valid: Please enter any number 1-9");
        } else {
            return addInputToArray(eventData, eventId);
        }
    } else {
        alert("Input is not valid: Please enter any number 1-9");
    };
}

function main() {
    const userInputs = document.querySelectorAll(".squareInput")
    for(let userInput of userInputs){
        userInput.addEventListener("input", verifyInput)
    }
};

window.addEventListener("DOMContentLoaded", main);