
1. write an event listener on the basic-calc button
2. inside the function on that event listener collect the values from the user and store them in variables
3. do the relevant calculations on those variables
4. show the answer div
5. update the text of the answer div accordingly



var num1 = parseFloat(document.getElementById("basic-num-1").value);
console.log(num1)
var num2 = parseFloat(document.getElementById("basic-num-2").value);
console.log(num2)
var op = document.getElementById("basic-operation").value);
console.log(op)

button1.addEventListener("click", function(){
  console.log("click button event triggered");
});

