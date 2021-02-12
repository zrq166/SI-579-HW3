/*
* Excercise 1
*
*/


/*
* Then write a function that changes the text and the color inside the div
*
*/
const colordiv = document.getElementById("color-block");
colordiv.addEventListener("click", changeColor);


function changeColor() {
    //Write a condition determine what color it should be changed to
    if (colordiv.getAttribute("id") === "color-block") {
        //change the background color using JS
        colordiv.setAttribute("id", "color-block-change");
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerHTML = "#decaf1";
    } else {
        //change the background color using JS
        colordiv.setAttribute("id", "color-block");
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerHTML = "#F08080";

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

const button = document.getElementById("convertbtn");
button.addEventListener("click", convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp() {
    //Calculate the temperature here
    let temperature = (document.getElementById("f-input").value - 32) * 5 / 9;
    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerHTML = temperature;
}


