let firstNumber = "";
let secondNumber = "";

let totalResult = "";
let resultSpace = "";

let operatorSelected = 0;
let operator = "";

function ResultUpdate() {
    if (firstNumber === "" && secondNumber === "") {
        resultSpace = "0"
    } else if (secondNumber === "") {
        resultSpace = firstNumber;
    } else {
        resultSpace = secondNumber;
    }
    document.getElementById("result").innerHTML = resultSpace;
}

ResultUpdate();

function HowsGoing() {
    console.log(`firstNumber is ${firstNumber}, secondNumber is ${secondNumber}, resultSpace is ${resultSpace}, and 
    the totalResult is ${totalResult}. the operatorSelected is currently ${operatorSelected} and the operator is ${operator}`);
}

HowsGoing();

function Clear() {
    firstNumber = "";
    secondNumber = "";
    resultSpace = "0";
    operatorSelected = 0;
    operator = "";
    document.getElementById("result").innerHTML = resultSpace;
    ResultUpdate();
    HowsGoing();
}

function Seven() {
    if (operatorSelected === 0) {
        firstNumber = firstNumber + "7";
    } else {
        secondNumber = secondNumber + "7";
    }
    ResultUpdate();
    HowsGoing();
}

function One() {
    if (operatorSelected === 0) {
        firstNumber = firstNumber + "1";
    } else {
        secondNumber = secondNumber + "1";
    }
    ResultUpdate();
    HowsGoing();
}

function Plus() {
    if (firstNumber === "") {
        operatorSelected = 0;
        operator = "";
    } else {
        operator = "plus";
        operatorSelected = operatorSelected + 1;
    }
    document.getElementById("result").innerHTML = resultSpace;
    ResultUpdate();
    HowsGoing();
}

function Minus() {
    if (firstNumber === "") {
        operatorSelected = 0;
        operator = "";
    } else {
        operator = "minus";
        operatorSelected = operatorSelected + 1;
    }
    
    document.getElementById("result").innerHTML = resultSpace;
    ResultUpdate();
    HowsGoing();
}

function Multiply() {
    if (firstNumber === "") {
        operatorSelected = 0;
        operator = "";
    } else {    
        operator = "multiply";
        operatorSelected = operatorSelected + 1;

    }
    
    document.getElementById("result").innerHTML = resultSpace;
    ResultUpdate();
    HowsGoing();
}

function Divide() {
    if (firstNumber === "") {
        operatorSelected = 0;
        operator = "";
    } else {
        operator = "divide";
        operatorSelected = operatorSelected + 1;
    }
    
    document.getElementById("result").innerHTML = resultSpace;
    ResultUpdate();
    HowsGoing();
}

function Zero() {
    if (resultSpace == 0) {
        return resultSpace;
    }
    if (operatorSelected === 0) {
        firstNumber = firstNumber + "0";
    } else {
        secondNumber = secondNumber + "0";
    }
    ResultUpdate();
    HowsGoing();
}



function Equal() {

    if (operator === "plus") {
        totalResult = Number(firstNumber) + Number(secondNumber);
    } else if (operator === "minus") {
        totalResult = Number(firstNumber) - Number(secondNumber);
    } else if (operator === "multiply") {
        totalResult = Number(firstNumber) * Number(secondNumber);
    } else if (operator === "divide") {
        totalResult = Number(firstNumber) / Number(secondNumber);
    } else {
        return totalResult;
    }
    document.getElementById("result").innerHTML = totalResult;
    HowsGoing();
    
}

function EqualFinalized() {
    return resultSpace;
}
