let digit = 0;
let showBox = document.getElementById("result").innerHTML;
let firstNum = 0;
let secondNum = 0;
let selectedOperator = "none";

function one() {
    firstNum =  10 ** digit * 1 + firstNum;
    digit++;
    document.getElementById("result").innerHTML = firstNum;

}

function seven() {
    firstNum =  10 ** digit * 7 + firstNum;
    digit++;
    document.getElementById("result").innerHTML = firstNum;

}

function plus() {
    selectedOperator = " + ";
}