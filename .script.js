// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

function askQuestion() {
    // This function needs to collect user responses for password criteria and return it to the generate password function
    var passwordLength = prompt("how many characters do you want in your password?")
    var includeNumbers = confirm("do you want to add numbers?")
    var includeLowercase = confirm("do you want to capital letters?")
    var includeUppercase = confirm("do you want to add numbers?")
    var includeSpecial = confirm("do you want to add numbers?")

    var answers = {
        length: passwordLength,
        numbers: includeNumbers,
        uppercase: includeUppercase,
        lowercase: includeLowercase,
        special: includeSpecial,
    }
    console.log(answers)
    return answers;
}

function generatePassword() {
    var passwordOptions = askQuestion();
    console.log(passwordOptions)
        // This function needs to take in user's input and build the password and return to the right password function
    return "This is a test"
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);