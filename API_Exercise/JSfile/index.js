
// Get elements and assign them to variables for use
const greetingBox = document.getElementById("greetingBox");
const eventBox = document.getElementById("eventBoxInput");
const messageBox = document.getElementById("messageBox");
const submitbtn = document.getElementById("submitbtn");
const fullForm = document.getElementById("inputForm");
const cardBody = document.getElementById("cardBody");



//Declare event handlers


fullForm.addEventListener("submit",formSubmitEventTEST)

//Functions for event handlers

function formSubmitEventTEST(event)
{
    event.preventDefault();

    let greeting = greetingBox.value;
    let message = messageBox.value;
    let eventType = eventBox.value;
    console.log(eventType + " is event type")

    if(!fullForm.classList.contains("invisible"))
    {
        fullForm.classList.add("invisible");
    }

    createCard(greeting,message,eventType)

}


//createCard

function createCard(greeting = "default",message = "default",eventType ="default")
{
    let greetingP = document.createElement("p");
    greetingP.textContent = greeting;
    cardBody.appendChild(greetingP);

    console.log("message = "+message);
    console.log("type = " +eventType);

    let messageP = document.createElement("p");
    messageP.textContent = message;
    cardBody.appendChild(messageP);

    let eventP = document.createElement("p");
    eventP.textContent = eventType;
    cardBody.appendChild(eventP);



}
