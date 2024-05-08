const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "-", "+", "="];
let output = "";

//console.log(display, buttons);

const calculate = (btnValue) => {
    // console.log(btnValue);

    if (btnValue === "=" && output !== "") {
        //if output has % replace with /100 before evaluating
        output = eval(output.replace("%", "/100"));
    } else if (btnValue == "AC") {
        output = "";
    }
    else if (btnValue == "DEL") {
        // remove last character from the output
        output = output.toString().slice(0, -1);
    }else {
        //if output is empty and button is specialCharms then return
        if(output === "" && specialChars.includes(btnValue))return; 
        output += btnValue;
    }
    display.value = output;
};

buttons.forEach((button) => {
    //calls calculate() with dataset value as argument
    button.addEventListener("click", (e) => {
        //console.log(e.target.dataset.value);
        //dataset -> Retrieves the value of the data-value attribute
        calculate(e.target.dataset.value);
    });
});