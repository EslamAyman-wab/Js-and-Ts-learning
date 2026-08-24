let codeSmallA = "a".charCodeAt(0);
let codeCapitalA = "A".charCodeAt(0);
let difference = codeSmallA - codeCapitalA; // = 97 - 65 = 32

let start = 0;
let swappedName = "elZerO";

let result = "";

for (let i = start; i < swappedName.length; i++) {
  let currentCharCode = swappedName.charCodeAt(i);
  if (currentCharCode >= codeSmallA) {
    // الحرف صغير → سأحوله إلى كبير
    let newCharCode = currentCharCode - difference;
    let newChar = String.fromCharCode(newCharCode);
    result += newChar;
  } else {
    // الحرف كبير → سأحوله إلى صغير
    let newCharCode = currentCharCode + difference;
    let newChar = String.fromCharCode(newCharCode);
    result += newChar;
  }
}

console.log(result);

// Output
("ELzERo");
