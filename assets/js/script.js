// Assignment code here

//Function that prompts user for criteria inputs and returns an object with those inputs
const passwordCriteriaPrompt = () => {
 
  //PASSWORD LENGTH CRITERIA PROMPT
  let passwordLength = Number(window.prompt("Enter the length for your password. The length must be between 8 and 128 characters."));

  //Validate that pasword length chosen is not a string and is a number between 8 and 128 char
  while (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(window.prompt("Enter the length for your password. The length must be between 8 and 128 characters."));
  }

  //PASSWORD CHARACTER CRITERIA PROMPTS
  let upperCaseChar = window.confirm("Do you want to include upper case letters in your password?");
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

  //create an object of password criteria to return
  const passwordCriteria = {
    len: passwordLength,
    upper: upperCaseChar,
    lower: lowerCaseChar,
    num: numChar,
    special: specialChar,
  }

  return passwordCriteria;
}

// Function to select random character
const randomCharSelector = (str) => {
  return str[Math.floor(Math.random() * str.length)];
}

// Function to generate password
const generatePassword = () => {
  // STRINGS OF CHARACTERS THAT MAY BE USED BASED ON CRITERIA
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerAlphabet = upperAlphabet.toLowerCase();
  const numbers = "1234567890";
  const specialCharacters = "!#$%&()*+,-/:;<=>?@[]^_";
  let pw = "";
  let numOfCriteria = 0;

  //String of characters that will be randomly selected from for the password
  let charSelectionPool = "";

  // Criteria object that tells which characters to select from
  const criteria = passwordCriteriaPrompt();

  // Add chars to random pool of chars that pw can be selected from and add random char to start of pw to ensure that char type is used at least once in password
  if (criteria.upper) {
    charSelectionPool = charSelectionPool.concat(upperAlphabet);
      pw = pw.concat(randomCharSelector(upperAlphabet));
      numOfCriteria ++;
  }

  if (criteria.lower) {
    charSelectionPool = charSelectionPool.concat(lowerAlphabet);
      pw = pw.concat(randomCharSelector(lowerAlphabet));
      numOfCriteria ++;
  }

  if (criteria.num) {
    charSelectionPool = charSelectionPool.concat(numbers);
    pw = pw.concat(randomCharSelector(numbers));
    numOfCriteria ++;
  }

  if (criteria.special) {
    charSelectionPool = charSelectionPool.concat(specialCharacters);
    pw = pw.concat(randomCharSelector(specialCharacters));
    numOfCriteria ++;
  }

  // Add characters from pool of approved characters to password. Start at numOfCriteria instead of 0 because 1 char has been added to the string for each criteria selected
  for (let i = numOfCriteria; i < criteria.len; i ++) {
    pw = pw.concat(randomCharSelector(charSelectionPool));
  }

  return pw;

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
