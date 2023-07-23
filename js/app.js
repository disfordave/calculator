let num = "0";
let anotherNum = "0";
let operator = "none";
let showingNum = "0";
let expression = "0";


function Clear() {
    num = "0";
    anotherNum = "0";
    operator = "none";
    showingNum = "0";
    expression = "0";
    document.getElementById("result").innerHTML = "0";
    document.getElementById("expression").innerHTML = expression;
}

function Plus() {
    operator = "plus";
    console.log("plus");
    expression = expression + " + ";
    document.getElementById("expression").innerHTML = expression;
}

function Minus() {
    operator = "minus";
    console.log("minus");
    expression = expression + " - ";
    document.getElementById("expression").innerHTML = expression;
}

function Multiply() {
    operator = "multiply";
    console.log("multiply");
    expression = expression + " × ";
    document.getElementById("expression").innerHTML = expression;
}

function Divide() {
    operator = "divide";
    console.log("divide");
    expression = expression + " ÷ ";
    document.getElementById("expression").innerHTML = expression;
}

function Seven() {
    if (num === "0") {
        num = "";
        num = num + "7";
        document.getElementById("result").innerHTML = num;
    } else if (anotherNum === "0" && operator !== "none") {
        num = "";
        num = num + "7";
        document.getElementById("result").innerHTML = anotherNum;
    } else {
        num = num + "7";
    }
    expression = num;
    document.getElementById("result").innerHTML = num;
    
}

function Operate(num, operator, anotherNum) {
    let storeNum;
    console.log(`${num} ${operator} ${anotherNum}`);
    if (operator == "plus") {
        storeNum = Number(num) + Number(anotherNum);
        num = storeNum;
        console.log(`storeNum is ${storeNum}, and num is ${num}`);
        document.getElementById("result").innerHTML = num;
    } else if (operator == "minus") {
        num = Number(num) - Number(anotherNum);
        console.log(`num is ${num}`);
        document.getElementById("result").innerHTML = num;
    } else if (operator == "multiply") {
        num = Number(num) * Number(anotherNum);
        console.log(`num is ${num}`);
        document.getElementById("result").innerHTML = num;
    } else if (operator == "divide") { 
        if (anotherNum === 0 || anotherNum === "0") {
            console.log("Divided by 0");
        }
        num = Number(num) / Number(anotherNum);
        console.log(`num is ${num}`);
        document.getElementById("result").innerHTML = num;
    }
    
}