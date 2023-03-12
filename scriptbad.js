// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterLength = 8;
var choiceArr = [];

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

var UPPERCASE_CHAR_CODES = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var LOWERCASE_CHAR_CODES = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var NUMBER_CHAR_CODES = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var SPECIALCHARACTERS_CHAR_CODES = ["!", "#", "$", "%", "&", "'", "(", ")", "*","+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[","]", "^", "_", "`", "{", "|", "}",];
space =[];

for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}


function arrayFromLowToHigh (low,high) {
  const array = []
  for (let i = low; i <= high; i++) {
      array.push(i)        
  }
  return array
}
function writePassword() {
  var correctPrompts = getPrompts
  if (correctPrompts){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

}
function generatePassword (){
  var password = "";
  for (var i = 0; i < characterLength; i++) {
   var randomindex = math.floor(math.random() * choicearr.length)
   password = password + choicearr[randomindex];    
  }
  return password;
}

function getPrompts (){
  choicearr = [];
characterLength = parseInt(prompt("How long would you like your code?\r Please choose a number between 8 and 126")); 

if (!enter)
{ alert("This needs a value");} 

else if (isNaN(characterLength) || characterLength <8 || characterLength >128)
{
  alert("must be a number, and between 8-128 digits")
}

else 
{
  confirmLowercase = if (confirm("Do you want lowercase?")) {
    choiceArr = choiceArr.concat(lowerCaseArr); }
    ;
  confirmNumber = confirm("Do you want numbers?");
  confirmUppercase = confirm(" Do you want Uppercase?");
  confirmCharacter = confirm("Do you want Special Characters?");
};

if(!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase){
  choices = alert("you must choose at least one option");
}
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase){
  choices = SPECIALCHARACTERS_CHAR_CODES.concat(NUMBER_CHAR_CODES,LOWERCASE_CHAR_CODES,UPPERCASE_CHAR_CODES );
} else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = SPECIALCHARACTERS_CHAR_CODES.concat(NUMBER_CHAR_CODES, UPPERCASE_CHAR_CODES);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = SPECIALCHARACTERS_CHAR_CODES.concat(NUMBER_CHAR_CODES, LOWERCASE_CHAR_CODES);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  choices = SPECIALCHARACTERS_CHAR_CODES.concat(LOWERCASE_CHAR_CODES, UPPERCASE_CHAR_CODES);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = NUMBER_CHAR_CODES.concat(LOWERCASE_CHAR_CODES, UPPERCASE_CHAR_CODES);
}

else if (confirmCharacter && confirmNumber) {
  choices = SPECIALCHARACTERS_CHAR_CODES.concat(NUMBER_CHAR_CODES);

} else if (confirmCharacter && confirmLowercase) {
  choices = SPECIALCHARACTERS_CHAR_CODES.concat(LOWERCASE_CHAR_CODES);

} else if (confirmCharacter && confirmUppercase) {
  choices = SPECIALCHARACTERS_CHAR_CODES.concat(UPPERCASE_CHAR_CODES);
}
else if (confirmLowercase && confirmNumber) {
  choices = LOWERCASE_CHAR_CODES.concat(NUMBER_CHAR_CODES);

} else if (confirmLowercase && confirmUppercase) {
  choices = LOWERCASE_CHAR_CODES.concat(UPPERCASE_CHAR_CODES);

} else if (confirmNumber && confirmUppercase) {
  choices = NUMBER_CHAR_CODES.concat(UPPERCASE_CHAR_CODES);
}

else if (confirmCharacter) {
  choices = SPECIALCHARACTERS_CHAR_CODES;
}
else if (confirmNumber) {
  choices = NUMBER_CHAR_CODES;
}
else if (confirmLowercase) {
  choices = LOWERCASE_CHAR_CODES;
}

else if (confirmUppercase) {
  choices = UPPERCASE_CHAR_CODES;
};

var password = [];

for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}

var ps = password.join("");
    UserInput(ps);
    return ps;
}; 

function UserInput(ps){
  document.getElementById("password").length = ps;
}


generateBtn.addEventListener("click", function (){
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});