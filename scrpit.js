// Defining the bobject(s)
let generateBtn = document.getElementById("generate");

// Adding event to the button element
generateBtn.addEventListener('click', buttonClicked);

// Defining the characters
var specialChar = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericChar = [0,1,2,3,4,5,6,7,8,9];

// Defining the function
function buttonClicked() {
    
    // Asking for character length
    var length = prompt("How many characters do you want your password to be?")

    if (length < 8) {
        alert("Your password length must be between 8 and 128 characters.");
        return;
    }

    else if (length > 128) {
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
        length : length,
        specialCharacters: confirmSpecialChar,
        lowerCaseCharacters: confirmLowerCase,
        uppercaseCharacters: confirmUpperCase,
        numericCharacters: confirmNumeric
    }

    return charOptions;

}

function generatePassword() {

    // Setting types of characters in password
    var options = buttonClicked();
    console.log(options)

    var passwordOutlook = [];
    console.log(passwordOutlook)

    if (options.specialCharacters) {
        for (i = 0; i < specialChar.length; ++i) {
            passwordOutlook.push(specialChar[i]);
        }
    }

    else if (options.lowerCaseCharacters) {
        for (i = 0; i < lowerCase.length; ++i) {
            passwordOutlook.push(lowerCase[i]);
        }
    }

    else if (options.uppercaseCharacters) {
        for (i = 0; i < upperCase.length; ++i) {
            passwordOutlook.push(upperCase[i]);
        }
    }
    
    else if (options.numericCharacters) {
        for (i - 0; i < numericChar.length; ++i) {
            passwordOutlook.push(numericChar[i]);
        }
    }


    // Picking random characters within the index of random number
    var returnValue = [];

    for (var i = 0; i < options.length; ++i) {
        var randomSelector = Math.floor(Math.random()*Math.floor(passwordOutlook.length));
        returnValue.push(passwordOutlook[randomSelector])
    }

    console.log(returnValue)

    var passwordFinal = returnValue.join('');
    console.log(passwordFinal)

    document.getElementById("password").textContent = passwordFinal;

    alert("Here is your password:" + passwordFinal);
}

    // Copying password into textarea
    var password = "";

    function copyToLabel() {

        document.getElementById("password").select();

        document.execCommand("Copy");

        alert("Your password has been copied to the textarea.")
    }


    generateBtn.addEventListener("click", generatePassword);

