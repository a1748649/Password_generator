// Assignment Code
var generateBtn = document.querySelector("#generate");


//FLAGS: flags turn to one if password must include character
var flag_a = 0;
var flag_A = 0;
var flag_1 = 0;
var flag_excla = 0;
var flag_minus = 0;



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//SCRIPT


//function when button is clicked
function generatePassword()
{

  console.log("entering stage 1");
  var passlength = prompt("Please enter a password length between 8-128 characters");

  console.log(passlength);
  if(passlength > 7   &&  passlength < 129 )
  {
    console.log("Passed stage 1");
    var charTypes = prompt("Please enter char types you want to includeby typing (a, A, 1, !, - Type one by one and then press enter" );

    if (charTypes.length>5) {
      console.log("Error string 2 too long");
    }
    for (let i = 0; i < 5; i++) {
      if (charTypes.includes("-")){
        flag_minus=1;
       
      }

      if (charTypes.includes("!")){
        flag_excla=1;
    
      }
      if (charTypes.includes("1")){
        flag_1 = 1;

      }
      if(charTypes.includes("A")){
        flag_A = 1;

      }
      if(charTypes.includes("a")){
        flag_a = 1;

      }
    }
    if (flag_minus === 1) {
      alert("password must contain special characters ({:><?:)");
      
    }
    if (flag_excla === 1) {
      alert("password must contain shifted numbers (!@#$%)");
    }
    if (flag_1 === 1) {
      alert("password must contain numbers");
    }
    if (flag_A === 1) {
      alert("password must contain capitals");
    }
    if (flag_a === 1) {
      alert("password must contain lowercase letters");
      
    }

    //all
    let all = ["a", "b", "c", 1, 2, 3, "A" , "B" , "C", "!", "@" , "#"];

    //letters
    let options = ["a", "b", "c"];

    //numbers
    let numbers = [1, 2, 3];


    //capiltols
    let capiltols = ["A" , "B" , "C"];

    //shiftnums

    let shifNums = ["!", "@" , "#"];



    var rand = 0;
    var password = [];


    
    for (let i = 0; i < passlength; i++) {

      rand = Math.floor(Math.random() * (12 - 1) + 1);

      console.log(all[rand]);
      password[i] = all[rand];


    }

    var pass = password.join("");

    alert("Password is : " + pass);
 

  }
}
