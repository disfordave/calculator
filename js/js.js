let numOne = "";
let numTwo = "";
let operator = "none";
let showingNum = "0";
let expression = "0";

HowsGoing();

function HowsGoing() {
    console.log(`showingNum is <${showingNum}>, expression is <${expression}>, 
    numOne is <${numOne}>, operator is <${operator}>, and numTwo is <${numTwo}>`);
}



function Clear() {
    numOne = "";
    numTwo = "";
    showingNum = "0";
    expression = "0";
    operator = "none";
    UpdateResult();
    UpdateExpression();
    HowsGoing();
}

function CheckIfZeroIsHere() {
    if (showingNum === "0") {
        showingNum = "";
        console.log("zero was here");
    } else {
        console.log("zero was not here");
        if (operator === "none") {
            return showingNum;
        } else {
            showingNum = "";
        }
        // return showingNum;
        
    }
}

function DecideWhichNum() {
    if (numOne === "" || operator === "none") {
        numOne = showingNum;
        console.log("Currently on numOne");
    } else {
        numTwo = showingNum;
        console.log("Currently on numTwo");
    }
}

function One() {
    CheckIfZeroIsHere();
    
    showingNum = showingNum + "1";
    TooLong();
    DecideWhichNum();
    UpdateResult();
    UpdateExpression();
    
    HowsGoing();
}

function Plus() {
    operator = "+";
    UpdateExpression();
    HowsGoing();
    
}

function UpdateResult() {
    showingNum = Number(numOne) + Number(numTwo);
    document.getElementById("result").innerHTML = showingNum;

    
}

function UpdateExpression() {
    if (operator === "none") {
        expression = showingNum;
    } else {
        expression = `${numOne} ${operator} ${numTwo}`;
    }
    // expression = `${numOne} ${operator} ${numTwo}`;
    document.getElementById("expression").innerHTML = expression;
    
}
