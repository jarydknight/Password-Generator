// Assignment code here

const passwordCriteriaPrompt = () => {
  const passwordLength = window.prompt("Enter the length for your password. The length must be between 8 and 128 characters.");
  const upperCaseChar = window.confirm("Do you want to include upper case letters in yoru password?");
  const lowerCaseChar = window.confirm("Do you want to include lower case letters in your password?")
  const numChar = window.confirm("Do you want to include numbers in your password?");
  const specialChar = window.confirm("Do you want to include special characters in your password?");
}

const generatePassword = () => {
  passwordCriteriaPrompt();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
