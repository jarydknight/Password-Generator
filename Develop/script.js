// Assignment code here

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

  //String of characters that will be randomly selected from for the password
  let charSelectionPool = "";

  // Criteria object that tells which characters to select from
  const criteria = passwordCriteriaPrompt();

  // Add chars to random pool of chars that pw can be selected from and add random char to start of pw to ensure that char type is used at least once in password
  switch (true) {
    case (criteria.upper):
      charSelectionPool = charSelectionPool.concat(upperAlphabet);
      pw = pw.concat(randomCharSelector(upperAlphabet));
    
    case (criteria.lower):
      charSelectionPool = charSelectionPool.concat(lowerAlphabet);
      pw = pw.concat(randomCharSelector(lowerAlphabet));

    case (criteria.num):
      charSelectionPool = charSelectionPool.concat(numbers);
      pw = pw.concat(randomCharSelector(numbers));

    case (criteria.special):
      charSelectionPool = charSelectionPool.concat(specialCharacters);
      pw = pw.concat(randomCharSelector(specialCharacters));
  }

  // get the number of criteria that have been selected
  let numOfCriteria = 0;
  const arr = Object.entries(criteria);

  //i starts at 1 because the first entry is the length of the pw which is not counted as criteria for this
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][1]) {
      numOfCriteria ++;
    }
  }

  // Add characters from pool of approved characters to password
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
