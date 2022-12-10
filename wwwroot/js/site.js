// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function Onload() {
    document.getElementById("input").value = "0";
}

function AddZero() {
    if (document.getElementById("input").value == "0")
        document.getElementById("input").value = "0";
    else
        document.getElementById("input").value += "0";
}

function AddOne() {
    if (document.getElementById("input").value == "0")
        document.getElementById("input").value = "1";
    else
        document.getElementById("input").value += "1";
}

function AddTwo() {
    if (document.getElementById("input").value == "0")
        document.getElementById("input").value = "2";
    else
        document.getElementById("input").value += "2";
}

function AddThree() {
    if (document.getElementById("input").value == "0")
        document.getElementById("input").value = "3";
    else
        document.getElementById("input").value += "3";
}

function AddFour() {
    if (document.getElementById("input").value == "0")
        document.getElementById("input").value = "4";
    else
        document.getElementById("input").value += "4";
}

function AddFive() {
    if (document.getElementById("input").value == "0")
        document.getElementById("input").value = "5";
    else
        document.getElementById("input").value += "5";
}

function AddSix() {
    if (document.getElementById("input").value == "0")
        document.getElementById("input").value = "6";
    else
        document.getElementById("input").value += "6";
}

function AddSeven() {
    if (document.getElementById("input").value == "0")
        document.getElementById("input").value = "7";
    else
        document.getElementById("input").value += "7";
}

function AddEight() {
    if (document.getElementById("input").value == "0")
        document.getElementById("input").value = "8";
    else
        document.getElementById("input").value += "8";
}

function AddNine() {
    if (document.getElementById("input").value == "0")
        document.getElementById("input").value = "9";
    else
        document.getElementById("input").value += "9";
}

function AddDivide() {
    if (document.getElementById("input").value == "0")
        document.getElementById("input").value = "÷";
    else
        document.getElementById("input").value += "÷";
}

function AddMuliply() {
    if (document.getElementById("input").value != "0")
        document.getElementById("input").value += "×";
}

function AddMinus() {
    if (document.getElementById("input").value != "0")
        document.getElementById("input").value += "-";
}

function AddPlus() {
    if (document.getElementById("input").value != "0")
        document.getElementById("input").value += "+";
}

function AddDot() {
    if (document.getElementById("input").value == "0") 
        document.getElementById("input").value = ".";
    else
        document.getElementById("input").value += ".";
}

function Clear() {
    if (document.getElementById("input").value != "0")
        document.getElementById("input").value = "0";
}

function Equals() {
    let inputArray;
    let Operator;
    let inputText = document.getElementById("input").value;
    if (inputText.includes("÷") == true) {
        inputArray = inputText.split("÷");
        Operator = 0;
    }
    else if (inputText.includes("×") == true) {
        inputArray = inputText.split("×");
        Operator = 1;
    }
    else if (inputText.includes("-") == true) {
        inputArray = inputText.split("-");
        Operator = 2;
    }
    else if (inputText.includes("+") == true) {
        inputArray = inputText.split("+");
        Operator = 3;
    }
    let NumberOne = parseFloat(inputArray[0]);
    let NumberTwo = parseFloat(inputArray[1]);

    switch (Operator) {
        case 0:
            document.getElementById("input").value = NumberOne / NumberTwo;
            break;
        case 1:
            document.getElementById("input").value = NumberOne * NumberTwo; 
            break;
        case 2:
            document.getElementById("input").value = NumberOne - NumberTwo;
            break;
        case 3:
            document.getElementById("input").value = NumberOne + NumberTwo;
            break;
        default:
            alert("Test");
            break;
    }
    document.getElementById("last").innerHTML = document.getElementById("input").value;

}