// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

function generatePassword() {



// Prompt user to enter password length
// prompt ("Password length needs to be between 8-128 characters")

// Create a variable that stores user password length
var passwordLength = "";


// Validate the password length
while (isNaN(parseInt(passwordLength)) || parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
  passwordLength = prompt("Password length needs to be between 8-128 characters")

}

// Write a confirm for each set of characters
var lowercaseLet = confirm("Do you want lowercase letters for your password?")
var uppercaseLet = confirm("Do you want uppercase letters for your password?")
var passwordNum = confirm("Do you want numbers for your password?")
var specialSym = confirm("Do you want special characters for your password?")

// If the user didn't answer any of the quesetions - ask again!
while (!lowercaseLet && !uppercaseLet && !passwordNum && !specialSym) {
  lowercaseLet = confirm("Do you want lowercase letters for your password?")
  uppercaseLet = confirm("Do you want uppercase letters for your password?")
  passwordNum = confirm("Do you want numbers for your password?")
  specialSym = confirm("Do you want special characters for your password?")

}

// Create variable for character sets
var char = "";

var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//If true use data to add these characters to "char" sets
if (lowercaseLet) {
  char += lowerChar
}

if (uppercaseLet) {
  char += upperChar
}

if (passwordNum) {
  char += numChar
}

if (specialSym) {
  char += specialChar
}

var randomPass = "";

for (var i = 0; i < passwordLength; i++) {
  var randomNumber = Math.floor (Math.random() * char.length)
  randomPass += char[randomNumber]
} return(randomPass)

}
