let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Test-01 Found");
}
if (haystack.indexOf(needle) !== -1) {
  console.log("Test-02 Found");
}

if (haystack.lastIndexOf(needle) !== -1) {
  console.log("Test-03 Found");
}
