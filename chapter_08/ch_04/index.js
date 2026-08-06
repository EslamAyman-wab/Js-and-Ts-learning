function checkStatus(a, b, c) {

    if (typeof a == "string" && typeof b == "number" && typeof c == "boolean"){
        console.log(`Hello ${a}, Your Age is ${b}, You Are ${c? "Available": "Not Available"} for Hire`);
    }
    else if (typeof a == "number" && typeof b == "string" && typeof c == "boolean"){
        console.log(`Hello ${b}, Your Age is ${a}, You Are ${c? "Available": "Not Available"} for Hire`);
    }
    else if (typeof a == "boolean" && typeof b == "number" && typeof c == "string"){
        console.log(`Hello ${c}, Your Age is ${b}, You Are ${a? "Available": "Not Available"} for Hire`);
    }
    else if (typeof a == "boolean" && typeof b == "string" && typeof c == "number"){
        console.log(`Hello ${b}, Your Age is ${c}, You Are ${a? "Available": "Not Available"} for Hire`);
    }
}


// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38);// "Hello Osama, Your Age Is 38, You Are Not Available For Hire"