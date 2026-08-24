function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        let fullName  = zName;
        let [firstName , lastName] = fullName .split(" ")
        lastName = lastName[0].toUpperCase();
        return `${firstName} ${lastName}.`;
        // Osama Mohamed => Osama M.
        // Ahmed Ali => Ahmed A.
    }
    function ageWithMessage(zAge) {
        let num = zAge;
        let [number] = num.split(" ");
        return `Your Age Is ${number}`
        // Write Your Code Here
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) {
        return `You Live In ${zCountry.slice(0,2).toUpperCase()}`

        // Egypt => You Live In EG
        // Syria => You Live In SY
    }
    function fullDetails() {
        return`Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`
        // Write Your Code Here
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed Ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY



