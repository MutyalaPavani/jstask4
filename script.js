//================================================
// part 1: Functions and Parameters (5 Questions)
//================================================
//1.Create a function welcome() that prints "Welcome to JavaScript".
function welcome(){
    console.log("Welcome to JavaScript");
}
welcome()// output=Welcome to JavaScript

//2.Create a function studentDetails(name, age, cgpa) that prints all three values. Call it with two different students.
function studentDetails(name, age, cgpa){
    console.log("Name:",name);
    console.log("Age:",age);
    console.log("Cgpa:",cgpa);
}
studentDetails("Pavani",22,8.9) //output=Name: Pavani Age: 22 Cgpa: 8.9
studentDetails("Chandu",24,9.8) //output=Name: Chandu Age:24 Cgpa: 9.8

//3.Create a function calculateFee(fee) that returns the student fee. Store the returned value in a variable and print it.
function calculationFee(fee){
    return fee
}
let studentFee = calculationFee(200000)
console.log(studentFee);//output=200000

//4.Create a function discount(percent) that calculates a discount on a fee of ₹200,000 and prints the final fee.
function fee(stuFee){
    return stuFee
}
let presentFee = fee(200000)
console.log(presentFee);//output=200000
function discount(percent){
    console.log(percent,"%");//output=5%
    let percentAmount = (200000/100*percent);
    console.log("Total fee pay by student",presentFee-percentAmount);//output=Total fee pay by student 190000
}
discount(5)
//5.Create a function studentForm(name, age, disability = "no"). Call it three times, including once without passing the disability argument.
function studentForm(name, age, disability = "no"){
    console.log("Name:",name);
    console.log("Age:",age);
    console.log("Disability:",disability);
}
studentForm("Pavani",22,"No")//output=Name: Pavani Age: 22 Disability: No
studentForm("Chanu",24,"Yes")//Name: Chanu Age: 24 Disability: Yes
studentForm("Ravi",32)//output= Name: Ravi Age: 32 Disability: no

//================================================
// Part 2: Function Types and Scope (5 Questions)
//================================================
//6.Create a named function that accepts a message and prints it.
function one(p){
    console.log(p);
}
one("The message is accepted");//Output=The message is accepted

//7.Create an anonymous function and store it in a variable. Pass a name to it and print the name.
let two = function(p){
    console.log(p);
}
two("Stackly")//output=Stackly

//8.Create an arrow function that accepts a number and prints it.
let three = (p) => {
    console.log(p);
}
three("The number is aceepted")//output=The number is aceepted
//9.Create a function containing var, let, and const inside an if block. Check which variables can be accessed inside and outside the block.
function checkType(){
    if(1){
        var a1 = "global scope"
        let a2 = "block scope"
        const a3 = "block scope"
        console.log(a1);//output=global scope
        console.log(a2);//output=block scope
        console.log(a3);//output=block scope
    }
    console.log(a1);//output=global scope
    // console.log(a2);
    // console.log(a3);
    // let and const variables cannot be accessed  outside
}
checkType()

//10.Predict the output of this code:
console.log(value);
var value = 10;//output=undefined

//=====================================================
//Part 3: Callback and Higher-Order Functions (6 Questions)
//=====================================================
//11.Create two functions, first() and second(). Pass second as a callback to first() and execute it inside first().
function first(){
    console.log("first is higher order");
}
function second(){
    console.log("second is the callback function");
}
first(second())
//output= second is the callback function
// first is higher order

//12.Create an add(callback, a, b) function that prints the sum of two numbers and then calls the callback with two numbers.
function add(callback, a, b){
    console.log(a + b);
    callback(a,b)
}
function display(a,b){
    console.log(a,b);
}
add(display,10,20)
//output=30
//10 20

//13.Create a sub(num1, num2) arrow function and pass it as a callback to the add() function.
let add2 = function(callback, a, b) {
    console.log(a+b);
    callback(10,7)
}
let sub = (no3,no4) => {
    console.log(no3-no4);
}
add2(sub,9,9)
//output=18
//3

//14.Create a multiply(callback, a, b) function that prints the multiplication result and then executes the callback.
let multiply = function(callback, a, b){
    console.log(a * b);
    callback(3,4)
}
let add3 = function(num3,num4){
    console.log(num3+num4);
}
multiply(add3,5,6)
//output=30
//7

//15.Create a divide(num1, num2) function and pass it as a callback to another function.
let add4 = function(callback,a,b){
    console.log(a+b);
    callback(25,5)
}
let divide = function(num1,num2){
    console.log(num1/num2);
}
add4(divide,5,4)
//output=9
//5

//16.Create a higher-order function that accepts a callback and calls it with a student's name
let student = function(callback){
    callback("pavani")
}
function displayName(name){
    console.log(name);
}
student(displayName)
//output=pavani

//17.Create a generator function that yields these values one by one: "10% cashback", "30% cashback", and "Better luck next time".
function*generate(){
    yield "10% cashback"
    yield "30% cashback"
    yield "Better luck next time"
} 
let gen = generate()
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
//output=//output=10% cashback
//30% cashback
//Better luck next time

//18.Call .next() three times on a generator object and observe the returned values.
function*generate1(){
    yield "10% cashback"
    yield "30% cashback"
    yield "Better luck next time"
} 
let gen1 = generate1()
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
//output={value: '10% cashback', done: false}
//{value: '30% cashback', done: false}
//{value: 'Better luck next time', done: false}

//19.Create a generator function that yields five different discount messages. Print each yielded value using a for-of loop.
function*generate2(){
    yield "10% cashback"
    yield "30% cashback"
    yield "Better luck next time"
    yield "20% cashback"
    yield "50% cashback"
} 
let gen2 = generate2()
for(let b of gen2){
    console.log(b);
}
//output=10% cashback
// 30% cashback
// Better luck next time
// 20% cashback
// 50% cashback

//20.Create a generator function that yields three student names. Use a for-of loop to display them.
function*generate3(){
    yield "Pavani"
    yield "Chandu"
    yield "Savithri"

} 
let gen3 = generate3()
for(let c of gen3){
    console.log(c);
}
//output=Pavani
        //  Chandu 
        //  Savithri
//21.Create a generator function with four yield statements. Check the done property after the yielded values have been consumed.
function*generate4(){
    yield "10% cashback"
    yield "30% cashback"
    yield "Better luck next time"
} 
let gen4 = generate4()
console.log(gen4.next());
console.log(gen4.next());
console.log(gen4.next());
console.log(gen4.next());
//output={value: '10% cashback', done: false} 
// {value: '30% cashback', done: false}
// {value: 'Better luck next time', done: false} 
// {value: undefined, done: true}

//====================================================
//Part 5: Currying and Uncurrying (5 Questions)
//====================================================
//22.Create a normal function add(a, b, c) that prints the sum of three numbers.
function add5(a, b, c){
    console.log(a+b+c);
}
add5(2,4,6)//output=12

//23.Convert the add(a, b, c) function into a curried function using nested functions.
function five1(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
        }
    }
}
five1(1)(2)(3)//output=6

//24.Call a curried function with values 5, 10, and 15 using this format: functionName(5)(10)(15).
function functionName(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
        }
    }
}
functionName(5)(10)(15)//output=30

//25.Create a curried function that accepts product price, discount percentage, and quantity, then calculates the total discounted price.
function discount(price) {
    return function(percentage) {
        return function(quantity) {
            return price * (1 - percentage / 100) * quantity;
        }
    }
}
console.log(discount(100)(10)(5));//output=450

//26.Write a normal three-parameter function and its curried equivalent. Call both with the same values and compare their results.
function add(a, b, c) {
    return a + b + c;
}
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
console.log(add(5, 10, 15));
console.log(curriedAdd(5)(10)(15));
//output=30
//       30
//================================================
//Part 6: IIFE, Return, and Mixed Practice (4 Questions)
//================================================
//27.Create an IIFE that accepts a product name and discount percentage, then displays a sale message using a template string.
(function (productName, discountPercentage) {
    console.log(`Sale Alert! ${productName} is available at ${discountPercentage}% off!`);
}) ("Laptop", 20);
//output=Sale Alert! Laptop is available at 20% off!

//28.Create a function that returns a number. Store the returned value in a variable and print it.
function getNumber() {
    return 100;
}
let result = getNumber();
console.log(result);
//output=100

//29.Create a function that accepts a student's marks and returns the marks. Use the returned value in another variable.
function getMarks(marks) {
    return marks;
}
let studentMarks = getMarks(85);
console.log(studentMarks);
//output=85

//30.Create a student fee calculator using a function with a default parameter, a callback function to calculate the discount, and a return value for the final fee.
function calculateFee(fee = 100000, callback) {
    let discount = callback(fee);
    let finalFee = fee - discount;
    return finalFee;
}
function calculateDiscount(fee) {
    return fee * 0.10; // 10% discount
}
let totalFee = calculateFee(100000, calculateDiscount);
console.log(`Final Student Fee: ₹${totalFee}`);
//output=Final Student Fee: ₹90000