// Assignment code here

const passwordCriteriaPrompt = () => {
 
  //PASSWORD LENGTH CRITERIA PROMPT
  let passwordLength = Number(window.prompt("Enter the length for your password. The length must be between 8 and 128 characters."));

  //Validate that pasword length chosen is not a string and is a number between 8 and 128 char
  while (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(window.prompt("Enter the length for your password. The length must be between 8 and 128 characters."));
  }

  //PASSWORD CHARACTER CRITERIA PROMPTS
  let upperCaseChar = window.confirm("Do you want to include upper case letters in yoru password?");
  let lowerCaseChar = window.confirm("Do you want to include lower case letters in your password?");
  let numChar = window.confirm("Do you want to include numbers in your password?");
  let specialChar = window.confirm("Do you want to include special characters in your password?");

  //Validate that at least 1 option is selected for password criteria
  while (!upperCaseChar && !lowerCaseChar && !numChar && !specialChar) {
    window.alert("Must select Okay for at least 1 of the password criteria: Upper Case, Lower Case, Numbers, Special Characters")
    upperCaseChar = window.confirm("Do you want to include upper case letters in yoru password?");
    lowerCaseChar = window.confirm("Do you want to include lower case letters in your password?");
    numChar = window.confirm("Do you want to include numbers in your password?");
    specialChar = window.confirm("Do you want to include special characters in your password?");
  }

  const passwordCriteria = {
    len: passwordLength,
    upper: upperCaseChar,
    lower: lowerCaseChar,
    num: numChar,
    special: specialChar
  }

  return passwordCriteria;
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
