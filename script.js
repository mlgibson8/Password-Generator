// Assignment Code
var generateBtn = document.querySelector("#generate");

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

var UPPERCASE_CHAR_CODES = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var LOWERCASE_CHAR_CODES = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var NUMBER_CHAR_CODES = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var SPECIALCHARACTERS_CHAR_CODES = ["!", "#", "$", "%", "&", "'", "(", ")", "*","+", ",", "-", ".", "/", " <", "=", ">", "?", "@", "[","]", "^", "_", "`", "{", "|", "}",];


function arrayFromLowToHigh (low,high) {
  const array = []
  for (let i = low; i <= high; i++) {
      array.push(i)        
  }
  return array
}

function generatePassword (){
enter = prompt("How long would you like your code? ");
if (!enter) {
  alert("This needs a value");
} else if (enter < 8 || enter > 128){
  enter = prompt("Pick between 8 and 128");
} else  {
  confirmLowercase = confirm("Do you want lowercase?");
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
  choices = NUMBER_CHAR_CODESr.concat(UPPERCASE_CHAR_CODES);
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
  choices = space.concat(UPPERCASE_CHAR_CODES);
};

var password = [];

for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}

var ps = password.join("");
    UserInput(ps);
    return ps;
}  

function UserInput(ps){
  document.getElementById("password").textContent = ps;
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
return password
}




generateBtn.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

