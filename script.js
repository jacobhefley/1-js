var add = function(num1, num2) {
	return num1 + num2;
}
var sub = function(num1, num2) {
	return num1 - num2;
}
var mult = function(num1, num2) {
	return num1 * num2;
}
var div = function(num1, num2) {
	return num1 / num2;
}
var perc = function(num1, num2) {
	return (num1 / 100)*num2;
}
var pow = function(num1, num2) {
	x = num1;
	for (i = 0; i < num2; i++){

  	num1 = num1 * x;
  }
  return num1;
}

var q=1;
while (q == 1){
var operate = prompt("what operator do you want to run? (add, sub, mult, div, perc, pow): ");
if(operate != "q"){
var num1 = parseInt(prompt("enter number 1: "));
var num2 = parseInt(prompt("enter number 2: "));
}

if(operate === "add"){
	alert(add(num1,num2));
}
if(operate == "sub"){
	alert(sub(num1,num2));
}
if(operate == "mult"){
	alert(mult(num1,num2));
}
if(operate == "div"){
	alert(div(num1,num2));
}
if(operate == "pow"){
	alert(pow(num1,num2));
}
if(operate == "perc"){
	alert(perc(num1,num2));
}
if(operate == "q"){
	q=0;
}
}
