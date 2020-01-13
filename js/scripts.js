//functions
var gallonsToLiters = function(num1) {
    return num1 * 3.785;

}
var cupsToMl = function(num1){
    return num1 * 236.588;
}

var ozToG = function(num1){
    return num1 * 28.35;
}
var tblsToMl = function(num1){
    return num1 * 14.787;
}


//variables
//gallons
var num1 = parseFloat(prompt("Enter gallons"));
alert(gallonsToLiters(num1));
//cups
var num2 = parseFloat(prompt("Enter cups"));
alert(cupsToMl(num2));
//Oz
var num3 = parseFloat(prompt("Enter Ounces"));
alert(ozToG(num3));
var num4 = parseFloat(prompt("Enter tablespoons"));
alert(`${tblsToMl(num4)} milliliters`);











