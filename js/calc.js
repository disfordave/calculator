let firstNum = "0";
let secondNum = "0";
let operator = "";
let showingNum = "";
let showingExpNum = "";
let operatorSelected = 0;

document.getElementById("clear-all").addEventListener("click", function() {
    firstNum = "0";
    secondNum = "0";
    operator = "";
    showingNum = "";
    showingExpNum = "";
    operatorSelected = 0;
    updateStatus();
});

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

document.getElementById("equal").addEventListener("click", function() {
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
});

function omitZero() {
    if (firstNum === "0") {
        firstNum = "";
    } else if (secondNum === "0") {
        secondNum = "";
    } else {
        return;
    }
}

document.getElementById("backspace").addEventListener("click", function()  {
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
    updateStatus(); 
});

document.getElementById("decimal-icon").addEventListener("click", decimalPoint);

function decimalPoint() {
    let number = ".";
    if (secondNum === "") {
        secondNum += "0";
    }

    if (operatorSelected === 0 && firstNum.includes(".")) {
        return firstNum;
        
    } else if (operatorSelected === 1 && secondNum.includes(".")) {
        return secondNum;
    } else {
        document.getElementById("result").innerHTML = "Error";
        console.log("error");
    }
    numberAdd(number);
}

let numIcon = document.getElementsByClassName("num-icon");

for (let i = 0; i <= 9; i++) {
    numIcon[i].addEventListener("click", function() {
        numIcon[i].addEventListener("click", numSelect(numIcon[i].innerHTML));    
    });
}
    
function numSelect(no) {
    let number = no;
    omitZero();
    numberAdd(number);
}

document.getElementById("plus-minus").addEventListener("click", function() {
    console.log("you clicked plusminusbutton");
    if (operatorSelected === 0) {
        if (!firstNum.includes("-")) {
            omitZero();
            firstNum = "-" + firstNum;
        } else {
            firstNum = firstNum.slice(1, firstNum.length);
            if (firstNum.length < 1) {
                firstNum = "0"
            }
        }
    } else if (operatorSelected === 1) {
        if (!secondNum.includes("-")) {
            omitZero();
            secondNum = "-" + secondNum;
        } else {
            secondNum = secondNum.slice(1, secondNum.length);
            if (secondNum.length < 1) {
                secondNum = "0"
            }
        }
    } else {
        document.getElementById("expression").innerHTML = "Error";
    }
    updateStatus();
});

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

document.getElementById("plus").addEventListener("click", function() {
    operator = "+";
    operatorSelectedFunc();
    updateStatus();
});

document.getElementById("minus").addEventListener("click", function() {
    operator = "-";
    operatorSelectedFunc();
    updateStatus();
});

document.getElementById("multiply").addEventListener("click", function() {
    operator = "×";
    operatorSelectedFunc();
    updateStatus();
});

document.getElementById("divide").addEventListener("click", function()  {
    operator = "÷";
    operatorSelectedFunc();
    updateStatus();
});


