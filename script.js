// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*_-+={}()/";
var length;
var uppercaseCheck;
var lowercaseCheck;
var numberCheck;
var specialCheck;

// Write password to the #password input
function enterPassword() {
  var finalPassword = "";
  finalPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;
}

generateBtn.addEventListener("click", enterPassword);

// Sets password length and initializes prompts
function determineLength() {
  length = prompt("How long should your password be? (Enter a number between 8 - 128)");

    if(isNaN(length)){
      alert("Please enter a number.");
      return generatePassword()
    }
    if(length< 8 || length> 128){
      alert("ERROR: Please enter a number between 8 - 128.");
      return generatePassword()
    }
    return length;
  }

// Add uppercase characters to password
function determineUppercase(){
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("ERROR: Enter yes or no.");
      determineUppercase();
    }
    return uppercaseCheck;
}

// Add numbers to password
function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("ERROR: Enter yes or no.");
      determineNumbers();
    }
    return numberCheck;
}

// Add symbols to password
function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("ERROR: Enter yes or no.");
      determineSpecial();
    }
    return specialCheck;
}

// Function powering the 'Generate Password' button, takes inputs from prompts and uses them to create randomized password
function generatePassword(){
  determineLength();
  console.log(length);
  determineUppercase();
  // console.log(uppercaseCheck);
  determineNumbers();
  // console.log(numberCheck);
  determineSpecial();
  // console.log(specialCheck);

var characters = lower;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += upper + numbers + special;

}else if (uppercaseCheck && numberCheck){
  characters += upper + numbers;

}else if (numberCheck && specialCheck){
  characters += numbers + special;

}else if (uppercaseCheck && specialCheck){
  characters += upper + special;

}else if (uppercaseCheck){
  characters += upper;

}else if(numberCheck){
  characters += numbers;

}else if (specialCheck){
  characters += special;

}else{
  characters === lower;
  alert("WARNING: Your password contains only lowercase characters and may not be secure.");
    }

  for(var i = 0; i < length; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}
