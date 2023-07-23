let resultBox = document.querySelector("#result");
let expressBox = document.querySelector("#expression");

let result = resultBox.innerHTML;
let express = expressBox.innerHTML;

let num = "0";
let anotherNum = "0";
let operator = "none";
let showingNum = "0";
let expression = "0";
let operatorSelected = 0;
let digit = 1;


function checkIfZeroIsHere() {
    
}

function appendNumber() {
    
}

function one() {
    if (operatorSelected > 0) {
        resultBox.innerHTML = "";
    };
    resultBox.innerHTML = resultBox.innerHTML + "1";
    expressBox.innerHTML = expressBox.innerHTML + "1";
    console.log(document.getElementById("result").innerHTML);
}

function plus() {
    operatorSelected++;
    num = document.getElementById("result").innerHTML;
    console.log(`the num is ${num}`)
    expressBox.innerHTML = expressBox.innerHTML + " + ";
}