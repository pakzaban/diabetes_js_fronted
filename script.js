/*
- We are processing the form with Javascript in the front end rather than sending it to the back end for processing.
for this to work, we need several things to give JS time to work in the front-end
1. event.preventDefault() to keep the form populated until JS has had time to act on it.
2. Rather than submit form with the HTML onsubmit="handleForm()" attribute, we attach and EventListener to the SubMit event
 */
document.getElementById("diabetesForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Hello World !");
    console.log(document.getElementById("1").value);
    document.querySelectorAll("input").forEach(function(input) {
        console.log(input.value);
    });
});