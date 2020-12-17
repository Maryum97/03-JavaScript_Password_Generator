// Defining the button element (object) in JS
let generateBtn = document.getElementById("generate");

// Adding event to the button element
generateBtn.addEventListener('click', buttonClicked);

// Defining the popup messages;
// var prompt1 = prompt("How many characters do you want your password to be?");
// var confirm1 = confirm("Would you like your password to have lower case characters?");
// var confirm2 = confirm("Would you like your password to have upper case characters?");
// var confirm3 = confirm("Would you like your password to have numeric characters?");
// var confirm4 = confirm("Would you like your password to have special characters?");

// Defining the Characters
var length = (len)?(len):(10);
var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
var numeric = '0123456789';
var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
var password = " ";
var character = " ";
var crunch = true;

// Defining the function
function buttonClicked(ev) {
    console.log(ev.type, ev.target, ev.currentTarget);
    prompt("How many characters do you want your password to be?");

    if 
}    
