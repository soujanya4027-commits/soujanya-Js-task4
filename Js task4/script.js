// Utility function to log outputs to the webpage console box
function logOutput(text) {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent += text + "\n";
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

function clearOutput() {
    document.getElementById("output").textContent = "";
}

// ==========================================
// PART 1: Functions and Parameters
// ==========================================

// Q1: welcome()
function welcome() {
    clearOutput();
    let msg = "Welcome to JavaScript";
    logOutput("Q1 Output: " + msg);
}

// Q2: studentDetails(name, age, cgpa)
function studentDetails(name, age, cgpa) {
    let details = `Student Name: ${name}, Age: ${age}, CGPA: ${cgpa}`;
    logOutput(details);
    return details;
}
function runQ2() {
    clearOutput();
    logOutput("Q2 Output:");
    let name1 = prompt("Enter Student 1 Name:", "Soujanya");
    let age1 = prompt("Enter Student 1 Age:", "25");
    let cgpa1 = prompt("Enter Student 1 CGPA:", "8.5");
    studentDetails(name1, age1, cgpa1);

    let name2 = prompt("Enter Student 2 Name:", "Sneha");
    let age2 = prompt("Enter Student 2 Age:", "22");
    let cgpa2 = prompt("Enter Student 2 CGPA:", "9.1");
    studentDetails(name2, age2, cgpa2);
}

// Q3: calculateFee(fee)
function calculateFee(fee) {
    return Number(fee);
}
function runQ3() {
    clearOutput();
    let inputFee = prompt("Enter student fee amount:", "50000");
    let storedFee = calculateFee(inputFee);
    logOutput(`Q3 Output: Stored Fee = ₹${storedFee}`);
}

// Q4: discount(percent)
function discount(percent) {
    let baseFee = 200000;
    let discountAmount = (baseFee * percent) / 100;
    let finalFee = baseFee - discountAmount;
    logOutput(`Base Fee: ₹${baseFee}, Discount: ${percent}%, Final Fee: ₹${finalFee}`);
    return finalFee;
}
function runQ4() {
    clearOutput();
    let p = prompt("Enter discount percentage for ₹200,000:", "15");
    logOutput("Q4 Output:");
    discount(Number(p));
}

// Q5: studentForm(name, age, disability = "no")
function studentForm(name, age, disability = "no") {
    let info = `Form Submitted -> Name: ${name}, Age: ${age}, Disability: ${disability}`;
    logOutput(info);
}
function runQ5() {
    clearOutput();
    logOutput("Q5 Output (Calling 3 times):");
    studentForm("Akshay", 19, "yes");
    studentForm("Abhi", 21); // Uses default parameter "no"
    studentForm("Swati", 20, "no");
}


// ==========================================
// PART 2: Function Types and Scope
// ==========================================

// Q1: Named function
function printMessage(msg) {
    logOutput(`Named Function Output: ${msg}`);
}
function runP2Q1() {
    clearOutput();
    let m = prompt("Enter a message to print:", "Hello from Named Function!");
    printMessage(m);
}

// Q2: Anonymous function stored in variable
const greetUser = function(name) {
    logOutput(`Anonymous Function Output: Hello, ${name}!`);
};
function runP2Q2() {
    clearOutput();
    let n = prompt("Enter a name:", "Virat");
    greetUser(n);
}

// Q3: Arrow function accepting a number
const printNumber = (num) => {
    logOutput(`Arrow Function Output: The number is ${num}`);
};
function runP2Q3() {
    clearOutput();
    let num = prompt("Enter a number:", "42");
    printNumber(num);
}

// Q4: Scope with var, let, const inside if block
function checkScope() {
    clearOutput();
    logOutput("Q4 Scope Test:");
    if (true) {
        var vVar = "I am var (Function/Global Scoped)";
        let vLet = "I am let (Block Scoped)";
        const vConst = "I am const (Block Scoped)";
        logOutput("Inside block -> " + vVar);
        logOutput("Inside block -> " + vLet);
        logOutput("Inside block -> " + vConst);
    }
    logOutput("Outside block -> var is accessible: " + vVar);
    try {
        logOutput("Outside block -> let is accessible: " + vLet);
    } catch (e) {
        logOutput("Outside block -> let throws Error: " + e.message);
    }
}

// Q5: Hoisting prediction
function runP2Q5() {
    clearOutput();
    logOutput("Q5 Prediction Output:");
    logOutput("Code snippet:\nconsole.log(value);\nvar value = 10;");
    logOutput("Explanation & Result: Due to hoisting with 'var', 'value' is hoisted with an initial value of 'undefined'.");
    // Demonstration
    // console.log(valueVal); -> undefined
    var valueVal = 10;
    logOutput("Actual runtime result of console.log(value) before declaration: undefined");
    logOutput("Value after assignment: " + valueVal);
}


// ==========================================
// PART 3: Callback and Higher-Order Functions
// ==========================================

function first(callback) {
    logOutput("Inside first() function.");
    callback();
}
function second() {
    logOutput("Inside second() callback function executed!");
}
function runP3Q1() {
    clearOutput();
    logOutput("Q3.1 Output:");
    first(second);
}

function add(callback, a, b) {
    let sum = a + b;
    logOutput(`Sum of ${a} and ${b} = ${sum}`);
    callback(a, b);
}
const sub = (num1, num2) => {
    logOutput(`Callback subtraction result: ${num1} - ${num2} = ${num1 - num2}`);
};
function runP3Q2Q3() {
    clearOutput();
    let a = Number(prompt("Enter first number (a):", "10"));
    let b = Number(prompt("Enter second number (b):", "5"));
    logOutput("Q3.2 & Q3.3 Output:");
    add(sub, a, b);
}

function multiply(callback, a, b) {
    let product = a * b;
    logOutput(`Multiplication result: ${a} * ${b} = ${product}`);
    callback(a, b);
}
const divide = (num1, num2) => {
    let res = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    logOutput(`Callback division result: ${num1} / ${num2} = ${res}`);
};
function runP3Q4Q5() {
    clearOutput();
    let a = Number(prompt("Enter first number (a):", "20"));
    let b = Number(prompt("Enter second number (b):", "4"));
    logOutput("Q3.4 & Q3.5 Output:");
    multiply(divide, a, b);
}

function studentNameProcessor(callback) {
    let studentName = prompt("Enter student name:", "Bhavana");
    callback(studentName);
}
function runP3Q6() {
    clearOutput();
    logOutput("Q3.6 Higher-Order Function Output:");
    studentNameProcessor((name) => {
        logOutput(`Processed Student Name via Callback: ${name}`);
    });
}


// ==========================================
// PART 4: Generator Functions
// ==========================================

function* cashbackGenerator() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
function runP4Q1Q2() {
    clearOutput();
    logOutput("Q4.1 & Q4.2 Output (.next() calls):");
    const gen = cashbackGenerator();
    logOutput(JSON.stringify(gen.next()));
    logOutput(JSON.stringify(gen.next()));
    logOutput(JSON.stringify(gen.next()));
}

function* discountGen() {
    yield "Flat ₹100 off";
    yield "20% festive discount";
    yield "Free Shipping coupon";
    yield "Buy 1 Get 1 Free";
    yield "Special Member Discount";
}
function runP4Q3() {
    clearOutput();
    logOutput("Q4.3 Output (for-of loop with discounts):");
    for (let msg of discountGen()) {
        logOutput(msg);
    }
}

function* studentGen() {
    yield "Rahul";
    yield "Priya";
    yield "Amit";
}
function runP4Q4() {
    clearOutput();
    logOutput("Q4.4 Output (for-of loop with student names):");
    for (let name of studentGen()) {
        logOutput(`Student: ${name}`);
    }
}

function* testGen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
function runP4Q5() {
    clearOutput();
    logOutput("Q4.5 Output (checking done property):");
    const g = testGen();
    logOutput(JSON.stringify(g.next()));
    logOutput(JSON.stringify(g.next()));
    logOutput(JSON.stringify(g.next()));
    logOutput(JSON.stringify(g.next()));
    logOutput(JSON.stringify(g.next())); // done: true
}


// ==========================================
// PART 5: Currying and Uncurrying
// ==========================================

function normalAdd(a, b, c) {
    let sum = a + b + c;
    logOutput(`Normal add sum: ${a} + ${b} + ${c} = ${sum}`);
    return sum;
}
function runP5Q1() {
    clearOutput();
    normalAdd(5, 10, 15);
}

// Curried function using nested functions
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
function runP5Q2Q3() {
    clearOutput();
    let result = curriedAdd(5)(10)(15);
    logOutput(`Q5.3 Output: curriedAdd(5)(10)(15) = ${result}`);
}

// Curried function for price, discount, quantity
const calculateDiscountPrice = (price) => (discountPercent) => (quantity) => {
    let singleDiscountedPrice = price - (price * discountPercent) / 100;
    return singleDiscountedPrice * quantity;
};
function runP5Q4() {
    clearOutput();
    let price = Number(prompt("Enter product price:", "1000"));
    let disc = Number(prompt("Enter discount %:", "10"));
    let qty = Number(prompt("Enter quantity:", "3"));
    let finalTotal = calculateDiscountPrice(price)(disc)(qty);
    logOutput(`Q5.4 Output: Total Discounted Price = ₹${finalTotal}`);
}

function runP5Q5() {
    clearOutput();
    logOutput("Q5.5 Comparison (Normal vs Curried):");
    // Normal
    let normalRes = normalAdd(2, 4, 6);
    // Curried equivalent
    const cAdd = a => b => c => a + b + c;
    let curriedRes = cAdd(2)(4)(6);
    logOutput(`Normal Result: ${normalRes}`);
    logOutput(`Curried Result: ${curriedRes}`);
    logOutput(`Both results match: ${normalRes === curriedRes}`);
}


// ==========================================
// PART 6: IIFE, Return, and Mixed Practice
// ==========================================

function runP6Q1() {
    clearOutput();
    let pName = prompt("Enter product name:", "Smartphone");
    let pDisc = prompt("Enter discount percentage:", "25");
    logOutput("Q6.1 Output (IIFE execution):");
    (function(name, discount) {
        logOutput(`SPECIAL SALE: Get ${name} today at a massive ${discount}% off!`);
    })(pName, pDisc);
}

function getNumber() {
    return 77;
}
function runP6Q2() {
    clearOutput();
    let numVal = getNumber();
    logOutput(`Q6.2 Output: Returned number stored in variable = ${numVal}`);
}

function processMarks(marks) {
    return Number(marks);
}
function runP6Q3() {
    clearOutput();
    let m = prompt("Enter student marks:", "88.5");
    let storedMarks = processMarks(m);
    logOutput(`Q6.3 Output: Marks stored in variable = ${storedMarks}`);
}

// Student fee calculator with default parameter, callback, and return value
function calculateFinalStudentFee(baseFee = 50000, discountCallback) {
    let discountAmt = discountCallback(baseFee);
    let finalFee = baseFee - discountAmt;
    return finalFee;
}
function runP6Q4() {
    clearOutput();
    logOutput("Q6.4 Output (Advanced Fee Calculator):");
    let final = calculateFinalStudentFee(50000, function(fee) {
        let disc = fee * 0.1; // 10% discount callback
        logOutput(`Discount calculated via callback: ₹${disc}`);
        return disc;
    });
    logOutput(`Final Payable Fee: ₹${final}`);
}


// ==========================================
// UI Generator for Dashboard
// ==========================================
const questionsData = [
    { part: "Part 1: Functions and Parameters", items: [
        { title: "Q1: welcome() function", action: welcome },
        { title: "Q2: studentDetails(name, age, cgpa)", action: runQ2 },
        { title: "Q3: calculateFee(fee)", action: runQ3 },
        { title: "Q4: discount(percent)", action: runQ4 },
        { title: "Q5: studentForm with default parameter", action: runQ5 }
    ]},
    { part: "Part 2: Function Types and Scope", items: [
        { title: "Q1: Named Function", action: runP2Q1 },
        { title: "Q2: Anonymous Function", action: runP2Q2 },
        { title: "Q3: Arrow Function", action: runP2Q3 },
        { title: "Q4: Scope (var, let, const in block)", action: checkScope },
        { title: "Q5: Hoisting Prediction", action: runP2Q5 }
    ]},
    { part: "Part 3: Callback and Higher-Order Functions", items: [
        { title: "Q1: first() and second() callback", action: runP3Q1 },
        { title: "Q2 & Q3: add() with arrow function sub() callback", action: runP3Q2Q3 },
        { title: "Q4 & Q5: multiply() with divide() callback", action: runP3Q4Q5 },
        { title: "Q6: Higher-order function with student name", action: runP3Q6 }
    ]},
    { part: "Part 4: Generator Functions", items: [
        { title: "Q1 & Q2: Cashback Generator (.next() calls)", action: runP4Q1Q2 },
        { title: "Q3: Discount Messages Generator (for-of loop)", action: runP4Q3 },
        { title: "Q4: Student Names Generator (for-of loop)", action: runP4Q4 },
        { title: "Q5: Generator 'done' property check", action: runP4Q5 }
    ]},
    { part: "Part 5: Currying and Uncurrying", items: [
        { title: "Q1: Normal add(a, b, c)", action: runP5Q1 },
        { title: "Q2 & Q3: Curried function call functionName(5)(10)(15)", action: runP5Q2Q3 },
        { title: "Q4: Price, discount, quantity curried calculator", action: runP5Q4 },
        { title: "Q5: Compare Normal vs Curried function", action: runP5Q5 }
    ]},
    { part: "Part 6: IIFE, Return, and Mixed Practice", items: [
        { title: "Q1: Sale message IIFE", action: runP6Q1 },
        { title: "Q2: Function returning a number", action: runP6Q2 },
        { title: "Q3: Function accepting marks & returning", action: runP6Q3 },
        { title: "Q4: Fee calculator with default param & callback", action: runP6Q4 }
    ]}
];

function buildUI() {
    const app = document.getElementById("app");
    questionsData.forEach(section => {
        let secDiv = document.createElement("div");
        secDiv.className = "part-container";
        
        let h2 = document.createElement("h2");
        h2.textContent = section.part;
        secDiv.appendChild(h2);

        section.items.forEach(q => {
            let qBox = document.createElement("div");
            qBox.className = "question-box";
            
            let btn = document.createElement("button");
            btn.textContent = q.title;
            btn.onclick = q.action;
            
            qBox.appendChild(btn);
            secDiv.appendChild(qBox);
        });

        app.appendChild(secDiv);
    });
}

// Initialize the dashboard UI on load
window.onload = buildUI;