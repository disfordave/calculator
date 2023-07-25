let firstNum = "0";
let secondNum = "0";
let operator = "";
let showingNum = "";
let showingExpNum = "";
let operatorSelected = 0;

function clearAll() {
    firstNum = "0";
    secondNum = "0";
    operator = "";
    showingNum = "";
    showingExpNum = "";
    operatorSelected = 0;
    updateStatus();
}

function updateStatus() {
    if (operatorSelected === 0) {
        document.getElementById("result").innerHTML = firstNum;
    } else if (operatorSelected === 1) {
        if (operator === "+") {
            document.getElementById("result").innerHTML = Math.round((Number(firstNum) + Number(secondNum) + Number.EPSILON) * 1000000) / 1000000;
        } else if (operator === "-") {
            document.getElementById("result").innerHTML = Math.round((Number(firstNum) - Number(secondNum) + Number.EPSILON) * 1000000) / 1000000;
        } else if (operator === "×") {
            document.getElementById("result").innerHTML = Math.round((Number(firstNum) * Number(secondNum) + Number.EPSILON) * 1000000) / 1000000;
        } else if (operator === "÷") {
            document.getElementById("result").innerHTML = Math.round((Number(firstNum) / Number(secondNum) + Number.EPSILON) * 1000000) / 1000000;
        }
        
    } else {
        document.getElementById("result").innerHTML = "Error";
    }
    
    if (operatorSelected === 0) {
        document.getElementById("expression").innerHTML = `${firstNum} ${operator}`;
    } else if (operatorSelected === 1) {
        document.getElementById("expression").innerHTML = `${firstNum} ${operator} ${secondNum}`;
    } else {
        document.getElementById("expression").innerHTML = "Error";
    }
    
}

function operate() {
    if (operatorSelected === 0) {
        document.getElementById("expression").innerHTML = firstNum;
    } else if (operatorSelected === 1) {
        if (operator === "+") {
            document.getElementById("expression").innerHTML = Math.round((Number(firstNum) + Number(secondNum) + Number.EPSILON) * 1000000) / 1000000;
        } else if (operator === "-") {
            document.getElementById("expression").innerHTML = Math.round((Number(firstNum) - Number(secondNum) + Number.EPSILON) * 1000000) / 1000000;
        } else if (operator === "×") {
            document.getElementById("expression").innerHTML = Math.round((Number(firstNum) * Number(secondNum) + Number.EPSILON) * 1000000) / 1000000;
        } else if (operator === "÷") {
            document.getElementById("expression").innerHTML = Math.round((Number(firstNum) / Number(secondNum) + Number.EPSILON) * 1000000) / 1000000;
        }
        
    } else {
        document.getElementById("expression").innerHTML = "Error";
    }
}

function omitZero() {
    if (firstNum === "0") {
        firstNum = "";
    } else if (secondNum === "0") {
        secondNum = "";
    } else {
        console.log("Error");
    }
}

// function seven() {
//     let number = "7";
//     omitZero();
//     if (operatorSelected === 0) {
//         firstNum += number;
//     } else if (operatorSelected === 1) {
//         secondNum += number;
//     } else {
//         document.getElementById("result").innerHTML = "Error";
//     }
//     updateStatus();
// }

function decimalPoint() {
    let number = ".";
    if (secondNum === "") {
        secondNum += "0";
    }
    numberAdd(number);
}

function zero() {
    let number = "0";
    omitZero();
    numberAdd(number);
}

function one() {
    let number = "1";
    omitZero();
    numberAdd(number);
}

function two() {
    let number = "2";
    omitZero();
    numberAdd(number);
}

function three() {
    let number = "3";
    omitZero();
    numberAdd(number);
}

function four() {
    let number = "4";
    omitZero();
    numberAdd(number);
}

function five() {
    let number = "5";
    omitZero();
    numberAdd(number);
}

function six() {
    let number = "6";
    omitZero();
    numberAdd(number);
}

function seven() {
    let number = "7";
    omitZero();
    numberAdd(number);
}

function eight() {
    let number = "8";
    omitZero();
    numberAdd(number);
}

function nine() {
    let number = "9";
    omitZero();
    numberAdd(number);
}

function numberAdd(numb) {
    if (operatorSelected === 0) {
        firstNum += numb;
    } else if (operatorSelected === 1) {
        secondNum += numb;
    } else {
        document.getElementById("result").innerHTML = "Error";
    }
    updateStatus(); 
}

function plus() {
    // showingExpNum += "+";
    operator = "+";
    operatorSelected += 1;
    updateStatus();
}

function minus() {
    // showingExpNum += "+";
    operator = "-";
    operatorSelected += 1;
    updateStatus();
}

function multiply() {
    // showingExpNum += "+";
    operator = "×";
    operatorSelected += 1;
    updateStatus();
}

function divide() {
    // showingExpNum += "+";
    operator = "÷";
    operatorSelected += 1;
    updateStatus();
}


