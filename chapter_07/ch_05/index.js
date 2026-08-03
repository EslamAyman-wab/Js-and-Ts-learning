let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let count = friends.length - friends.length;
for (let i = friends.length - friends.length; i < friends.length; i++) {
  if (
    friends[i][friends.length - friends.length].toUpperCase() ==
    letter.toUpperCase()
  ) {
    continue;
  }
  count++;
  console.log(`"${count} => ${friends[i]} `);
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
