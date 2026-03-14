let display = document.getElementById("display");
let formula = document.getElementById("formula");

let previousValue = null;
let operator = null;
let newNumber = true;

function press(num){

if(newNumber){
display.value = num;
newNumber = false;
}else{
display.value += num;
}

}

function setOperator(op){

if(previousValue === null){
previousValue = parseFloat(display.value);
}else{
previousValue = operate(previousValue, parseFloat(display.value), operator);
display.value = previousValue;
}

operator = op;
formula.textContent = previousValue + " " + getSymbol(op);
newNumber = true;

}

function calculate(){

let current = parseFloat(display.value);

let result = operate(previousValue, current, operator);

formula.textContent = previousValue + " " + getSymbol(operator) + " " + current + " =";

display.value = result;

previousValue = result;
operator = null;
newNumber = true;

}

function operate(a,b,op){

switch(op){
case "+": return a+b;
case "-": return a-b;
case "*": return a*b;
case "/": return a/b;
}

}

function getSymbol(op){

if(op==="*") return "×";
if(op==="/") return "÷";
if(op==="−") return "-";
return op;

}

function clearDisplay(){

display.value="0";
formula.textContent="";
previousValue=null;
operator=null;
newNumber=true;

}

function developer(){

document.getElementById("popupText").innerHTML =
"<b>Developer</b><br><br>Rea Jane Prumon<br>MSIT Student";

document.getElementById("popup").style.display="flex";

}

function appInfo(){

document.getElementById("popupText").innerHTML =
"<b>Application</b><br><br>Standard Calculator similar to Windows OS calculator.<br>Built using HTML, CSS and JavaScript.";

document.getElementById("popup").style.display="flex";

}

function closePopup(){

document.getElementById("popup").style.display="none";

}