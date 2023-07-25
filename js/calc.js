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
        console.log("No zero");
    }
}

function backspace() {
        if (operatorSelected === 0) {
            firstNum = firstNum.slice(0, -1);
            if (firstNum.length < 1) {
                firstNum = "0"
            }
        } else if (operatorSelected === 1) {
            secondNum = secondNum.slice(0, -1);
            if (secondNum.length < 1) {
                secondNum = "0"
            }
        } else {
            document.getElementById("result").innerHTML = "Error";
            console.log("error");
        
    }
    console.log("finish backspace function");
    updateStatus(); 
    
    
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

// function plusMinus() {
//     let firstNumPM = false;
//     let secondNumPM = false;
//     if (!firstNumPM) {
//         firstNum = "-" + firstNum;
        
//     } else if (firstNumPM) {
//         firstNumPM = !firstNumPM;
//     }
//     // if (firstNum === "0") {
//     //     return firstNum;
//     // } else if (firstNum !== "0") {
//     //     firstNum = ""
//     // } else if (secondNum === "0") {
//     //     return secondNum;
//     // }
//     updateStatus(); 

// }

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

function temporalOperate() {
    let temOp = document.getElementById("expression").innerHTML.slice(firstNum.length+1, firstNum.length+2);
    if (operatorSelected === 0) {
        document.getElementById("expression").innerHTML = firstNum;
    } else if (operatorSelected === 1) {
        if (temOp === "+") {
            document.getElementById("expression").innerHTML = Math.round((Number(firstNum) + Number(secondNum) + Number.EPSILON) * 1000000) / 1000000;
        } else if (temOp === "-") {
            document.getElementById("expression").innerHTML = Math.round((Number(firstNum) - Number(secondNum) + Number.EPSILON) * 1000000) / 1000000;
        } else if (temOp === "×") {
            document.getElementById("expression").innerHTML = Math.round((Number(firstNum) * Number(secondNum) + Number.EPSILON) * 1000000) / 1000000;
        } else if (temOp === "÷") {
            document.getElementById("expression").innerHTML = Math.round((Number(firstNum) / Number(secondNum) + Number.EPSILON) * 1000000) / 1000000;
        }
        
    } else {
        document.getElementById("expression").innerHTML = "Error";
    }
}

function operatorSelectedFunc() {
    if (operatorSelected === 0) {
        operatorSelected += 1;
    } else {
        temporalOperate();
        firstNum = String(document.getElementById("result").innerHTML);
        firstNum = String(document.getElementById("expression").innerHTML);
        secondNum = "0"
    }
}

function plus() {
    // showingExpNum += "+";
    operator = "+";
    operatorSelectedFunc();
    updateStatus();
}

function minus() {
    // showingExpNum += "+";
    operator = "-";
    operatorSelectedFunc();
    updateStatus();
}

function multiply() {
    // showingExpNum += "+";
    operator = "×";
    operatorSelectedFunc();
    updateStatus();
}

function divide() {
    // showingExpNum += "+";
    operator = "÷";
    operatorSelectedFunc();
    updateStatus();
}


