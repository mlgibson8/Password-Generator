var characterLength = 8;
var choiceArr = [];
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

var specialChararr = ["!", "#", "$", "%", "&", "'", "(", ")", "*","+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[","]", "^", "_", "`", "{", "|", "}",];
var lowerCaseArr =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
 var correctPrompts = getPrompts();
 var passwordText = document.querySelector("#password");
if (correctPrompts){ 
  var freshpassword = generatePassword();
  passwordText.value = freshpassword;
 }
}

function generatePassword() {
var password = "";
for(var i = 0; i < characterLength; i++)
{  var randomindex = Math.floor(Math.random() * choiceArr.length);
  password = password + choiceArr[randomindex]; }

  return password;
}


function getPrompts (){
choiceArr = [];

    characterLength = prompt("how long of a password do you want \r please keep it between 8 and 128 characters");
    if(isNaN(characterLength) || characterLength <8 || characterLength > 128)
    {
        alert("invalid length or character, \r follow directions please")
        return false;
    }
    
     if (confirmLowercase = confirm("Do you want lowercase?")) 
    {  choiceArr = choiceArr.concat(lowerCaseArr); }
    if (confirmUppercase = confirm("Do you want uppercase?")) 
    {  choiceArr = choiceArr.concat(upperCaseArr); }
    if (confirmNumber = confirm("Do you want numbers?")) 
    {  choiceArr = choiceArr.concat(numberArr); }
    if (confirmCharacter = confirm("Do you want Special Characters?")) 
    { choiceArr = choiceArr.concat(specialChararr); }      
       
    else if( !confirmLowercase && !confirmUppercase && !confirmNumber && !confirmCharacter)
    { alert("you must choose at least one option \r do better");}
     return true; 

 }