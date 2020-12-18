// Defining the button element (object) in JS
let generateBtn = document.getElementById("generate");

// Adding event to the button element
generateBtn.addEventListener('click', buttonClicked);

// Defining the characters
var specialChar = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericChar = [0,1,2,3,4,5,6,7,8,9];

// Defining the function
function buttonClicked(ev) {
    console.log(ev.type, ev.target, ev.currentTarget);
    
    // Asking for character length
    var number = prompt("How many characters do you want your password to be?")

    if (number < 8) {
        alert("Your password length must be between 8 and 128 characters.");
        return;
    }

    else if (number > 128) {
        alert("Your password length must be between 8 and 128 characters.");
        return;
    }
    
    // Asking for character types 
    var confirmSpecialChar = confirm("Would you like your password to have special characters?");
    var confirmLowerCase = confirm("Would you like your password to have lower case characters?");
    var confirmUpperCase = confirm("Would you like your password to have upper case characters?");
    var confirmNumeric = confirm("Would you like your password to have numeric characters?");

    if (!confirmSpecialChar && !confirmLowerCase && !confirmUpperCase && !confirmNumeric) {
        alert("Your password must include at least one special, one numeric, one upper case and one lower case character.");
        return;
    }

    var charOptions = {
        number : number,
        specialCharacters: confirmSpecialChar,
        lowerCaseCharacters: confirmLowerCase,
        uppercaseCharacters: confirmUpperCase,
        numericCharacters: confirmNumeric
    }

    return charOptions;

}



