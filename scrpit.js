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
    
    // Asking for special characters
    else {
        confirm("Would you like your password to have special characters?")

    }   

    // Generating password
        var charSet = "";

        var charType1 = confirm("Would you like your password to have lower case characters?")

        if(charType1 == true) {
          charSet = "abcdefghijklmnopqrstuvwxyz";
        } 
        
        else {
          var charType2 = confirm("Would you like your password to have upperr case characters?")
        } 
        
        // else if( charType.toLowerCase === "numeric" ) {
        //   charSet = "0123456789";
        // } 
        
        // else if( charType.toLowerCase === "special" ) {
        //   charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        // } 

        // //return value
        // var retVal = "";
        // //for (var i = 0, n = charSet.length; i < length; i++) {
        //   for (var i = 0, n = length; i < length; i++) {
        //   //picks a character within charSet at index of random number
        //   retVal += charSet.charAt(Math.floor(Math.random() * n));
        // }
        // console.log(retVal);
        // return retVal;
      }


