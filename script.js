/*
This will be the start of my program:
1. user clicks number(s)
2. number moves to display
3. user clicks operator
4. operator appends to display after number
5. user clicks number(s)
6. user clicks equal button
7. display clears and shows calculation
8. user can click clear 
*/

let display = document.getElementById("display");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

one.addEventListener("click", function() {
    console.log("button 1 clicked")
    display.textContent += "1";
})

// // function to insert clicked number to display
// function insertNum(number) {
//     document.getElementById('display').textContent = number;
// }

