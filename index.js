const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let generatePassword = document.getElementById("generate-btn")
let firstDiv = document.getElementById("passwordOne")
let secondDiv = document.getElementById("passwordTwo")
let firstArr = []
let secondArr = []

function randomChar(){
    let char = Math.floor(Math.random() * characters.length)
    return characters[char]
}



generatePassword.addEventListener("click", setAllPasswords);


function setOnePassword(){
     firstDiv.textContent = null;
    for(let i=0; i<15; i++){
        firstDiv.textContent += randomChar()
    }
};

function setTwoPassword(){
        secondDiv.textContent = null;
    for(let i=0; i<15; i++){
        secondDiv.textContent += randomChar()
    }
};
function setAllPasswords(){
    setOnePassword();
    setTwoPassword();
}
