function ageInTime(theAge) {
    if (theAge >10 && theAge < 100) {
        console.log(`
        ${theAge * 12} Months
        ${theAge *52} Weeks
        ${theAge * 365} Days
        ${theAge * 8760} Hours
        ${theAge *525600} minutes
        ${theAge * 31536000} seconds
        `)
    } else {
        console.log(`Age Out of Range `)
    }
    // Your Code Here
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months