# Chapter 11 - Objects

هذا الملف يجمع تكليفات الكائنات `Objects`، طرق إنشائها، الدمج بينها، والتعامل مع الكائنات المتداخلة.

---

## التكليف 01 - إنشاء Object

### المطلوب

إنشاء كائن باسم `member` يحتوي على البيانات والـ method المطلوبة حتى تعمل أوامر الطباعة التالية.

```js
// Create Your Object Here

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
```

---

## التكليف 02 - إنشاء Object بأربع طرق

### المطلوب

إنشاء أربعة Objects بطرق مختلفة، وكل Object يحتوي على خاصية `property`.

```js
// Method One
// Create Your Object Here
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
console.log(objMethodFour.property); // "Method Four"
```

---

## التكليف 03 - الدمج باستخدام Object.assign

### المطلوب

استخدام `Object.assign()` لإنشاء Object جديد يحتوي على كل القيم السابقة في سطر واحد.

```js
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line

console.log(finalObject);
```

### الناتج المطلوب

```js
{
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
}
```

---

## التكليف 04 - تحدي Nested Objects

### المطلوب

- التعامل مع Object رئيسي يحتوي على ثلاثة Objects متداخلة.
- اثنان من الكائنات يحتويان على إصدارات، وواحد لا يحتوي عليها.
- استخدام `for loop` فقط لتكرار العناصر.
- ملء الفراغات للوصول إلى الناتج المطلوب.

```js
// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarok",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "Origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length?
let objectLength = "???????";

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ???????`);
  console.log(`The Publisher Is ???????`);
  console.log(`The Price Is ???????`);

  // Check If Nested Object Has Property (bestThree)
  if (???????) {
    console.log("- Game Has Releases");
    console.log(`First => ???????`);
    console.log(`Second => ???????`);
    console.log(`Third => ???????`);
  }

  console.log("#".repeat(20));
}
```

### الناتج المطلوب

```text
"The Game Name Is Trinity Universe"
"The Publisher Is NIS America"
"The Price Is 40"
"####################"
"The Game Name Is Titan Quest"
"The Publisher Is THQ"
"The Price Is 50"
"- Game Has Releases"
"First => Immortal Throne"
"Second => Ragnarok"
"Third => Atlantis"
"####################"
"The Game Name Is YS"
"The Publisher Is Falcom"
"The Price Is 40"
"- Game Has Releases"
"First => Oath in Felghana"
"Second => Ark Of Napishtim"
"Third => Origin"
"####################"
```

---

## ملخص تحديات الفصل

| التكليف | الفكرة الأساسية | المهارات المطلوبة | الناتج المطلوب |
| :---: | --- | --- | --- |
| 01 | بناء Object بخصائص وMethod | Object Literal, `this` | بيانات العضو كاملة |
| 02 | إنشاء Objects بطرق متعددة | Literal, Constructor, `Object.create` | أربع طرق إنشاء |
| 03 | دمج Objects | `Object.assign` | Object يحتوي ست خصائص |
| 04 | التعامل مع Objects متداخلة | `Object.keys`, Loops, Property Checks | تقرير ألعاب منظم |
