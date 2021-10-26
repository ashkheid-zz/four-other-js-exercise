let faNum = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
let userInput =
  "Ashkan is ۲۷ years and ۱۰ months old. He born at Oct ۲۵th ۱۹۹۳. He'll turn to ۲۸ about ۱ month and ۵ days from now.";

function faNumToEn(str) {
  for (let i = 0; i < faNum.length; ++i) {
    str = str.replaceAll(faNum[i], i);
  }
  return str;
}

console.log("User Input: " + userInput);
console.log("Result: " + faNumToEn(userInput));
