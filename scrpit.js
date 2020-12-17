// Defining the button element (object) in JS
let generateBtn = document.getElementById("generate");

// Adding event to the button element
generateBtn.addEventListener('click', buttonClicked);

//Asking for Character types:
// var confirmLowerCase = confirm("Would you like your password to have lower case characters?");
// var confirmUpperCase = confirm("Would you like your password to have upper case characters?");
// var confirmNumeric = confirm("Would you like your password to have numeric characters?");
// var confirmSpecial = confirm("Would you like your password to have special characters?");

// Defining the function
function buttonClicked(ev) {
    console.log(ev.type, ev.target, ev.currentTarget);
    
    // Asking for character length
    var number = prompt("How many characters do you want your password to be?")

    if (number < 8) {
        alert("Your password length must be between 8 and 128 characters.");
    }

    else if (number > 128) {
        alert("Your password length must be between 8 and 128 characters.");
    }
    
    // Asking for lower case
    else {
        confirm("Would you like your password to have lower case characters?")


    }
}    
