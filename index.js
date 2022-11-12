const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCases = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}],|:;<>.?/]";

// generated strings of passwords
let passwordOne;
let passwordTwo;

const slider = document.getElementById("my-range");
let outputSpan = document.getElementById("output-span");
const generateBtn = document.getElementById("generate-btn");
const passwordOneEl = document.getElementById("password-one");
const passwordTwoEl = document.getElementById("password-two");

// set value of slider to span element
slider.oninput = function () {
  outputSpan.innerHTML = slider.value;
};

// function which generates passwords at a clicking time
function generate() {
  let dictionary = "";
  passwordOne = "";
  passwordTwo = "";

  const upBox = document.getElementById("uppercasesCb").checked;
  const lowBox = document.getElementById("lowercasesCb").checked;
  const numBox = document.getElementById("numbersCb").checked;
  const symBox = document.getElementById("symbolsCb").checked;

  if (upBox || lowBox || numBox || symBox) {
    document.getElementById("minimum-one").innerHTML = "";

    if (upBox) {
      dictionary += upperCases;
    }
    if (lowBox) {
      dictionary += lowerCases;
    }
    if (numBox) {
      dictionary += numbers;
    }
    if (symBox) {
      dictionary += symbols;
    }

    for (let i = 1; i <= slider.value; i++) {
      let index = Math.floor(Math.random() * dictionary.length);
      passwordOne += dictionary[index];
    }
    for (let i = 1; i <= slider.value; i++) {
      let index = Math.floor(Math.random() * dictionary.length);
      passwordTwo += dictionary[index];
    }
  } else {
    passwordOneEl.textContent = "";
    passwordTwoEl.textContent = "";
    document.getElementById("minimum-one").innerHTML =
      "Tick at least one option!";
  }
  passwordOneEl.textContent = passwordOne;
  passwordTwoEl.textContent = passwordTwo;
}

generateBtn.addEventListener("click", function () {
  generate();
});

passwordOneEl.addEventListener("click", copyDivToClipboard1);
passwordTwoEl.addEventListener("click", copyDivToClipboard2);

function copyDivToClipboard1() {
  var range = document.createRange();
  range.selectNode(document.getElementById("password-one"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect
}

function copyDivToClipboard2() {
  var range = document.createRange();
  range.selectNode(document.getElementById("password-two"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect
}
