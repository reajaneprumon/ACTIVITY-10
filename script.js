let display = document.getElementById("display");

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

previousValue = parseFloat(display.value);
operator = op;
newNumber = true;

}

function calculate(){

let current = parseFloat(display.value);
let result = 0;

if(operator === "+"){
result = previousValue + current;
}

else if(operator === "-"){
result = previousValue - current;
}

else if(operator === "*"){
result = previousValue * current;
}

else if(operator === "/"){
result = previousValue / current;
}

display.value = result;

previousValue = null;
operator = null;
newNumber = true;

}

function clearDisplay(){
display.value = 0;
previousValue = null;
operator = null;
newNumber = true;
}

function developer(){

document.getElementById("popupText").innerHTML =
"<b>Developer</b><br><br>Rea Jane Prumon<br>MSIT Student";

document.getElementById("popup").style.display = "flex";

}

function appInfo(){

document.getElementById("popupText").innerHTML =
"<b>Application</b><br><br>Standard Calculator similar to Windows Calculator.<br>Built using HTML, CSS and JavaScript. ";

document.getElementById("popup").style.display = "flex";

}

function closePopup(){
document.getElementById("popup").style.display = "none";
}