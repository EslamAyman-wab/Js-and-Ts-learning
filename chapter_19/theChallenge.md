# Chapter 19 - Classes, Inheritance, Private Fields, And Descriptors

هذا الملف يجمع تكليفات الفصل التاسع عشر الخاصة بالـ Classes، الوراثة، الخصائص الخاصة، تعديل الـ Prototype، والتحكم في خصائص الـ Object.

---

## التكليف 01 - تحويل Constructor Function إلى Class

### المطلوب

- تحويل `Constructor Function` إلى `Class Syntax`.
- إضافة Method باسم `run`.
- إضافة Method باسم `stop`.
- إنشاء ثلاث سيارات من الـ Class بأي بيانات.
- طباعة بيانات أول سيارة بالشكل المطلوب.
- طباعة نتيجة Method `run`.

```js
function Car(name, model, price) {
  this.n = name;
  this.m = model;
  this.p = price;
}

// Needed Output
"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"
```

---

## التكليف 02 - وراثة Class

### المطلوب

- لديك Class باسم `Phone`.
- إنشاء Class باسم `Tablet` يرث من `Phone`.
- Class `Tablet` يحتوي على خاصية إضافية `size`.
- إضافة Method باسم `fullDetails`.
- إذا لم يتم تمرير `size` يجب إظهار `Unknown`.

```js
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown
```

---

## التكليف 03 - تحدي Private Field و Getter

### المطلوب

- تعديل Class `User` لتنفيذ المطلوب.
- منع الوصول المباشر إلى خاصية `Card`.
- تحويل كل أرقام البطاقة إلى `String`.
- تنسيق رقم البطاقة بوضع علامة `-` بعد كل أربع أرقام.
- عدم تعديل أسطر إنشاء المستخدمين ولا أسطر الطباعة.
- استخدام Getter لجلب `showData` كخاصية.
- يمكن استخدام `RegExp` لتنسيق رقم البطاقة.

```js
// Edit The Class
class User {
  constructor(username, card) {
    this.u = username;
    this.c = card;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
```

---

## التكليف 04 - إضافة Method إلى String Prototype

### المطلوب

إضافة Method باسم `addLove` تجعل النص التالي يعمل ويطبع النتيجة المطلوبة.

```js
// Write Your Code Here

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School
```

---

## التكليف 05 - التحكم في خصائص Object

### المطلوب

- عدم السماح بتغيير قيمة `score`.
- عدم إظهار `id` داخل الـ Loop، لكنه يظهر عند طباعة الـ Object.
- عدم إظهار `country` داخل الـ Loop ولا عند طباعة الـ Object.
- عدم تعديل محتوى الـ Object الأصلي ولا الـ Loop ولا سطر الطباعة.

```js
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);
```

### الناتج المطلوب

```text
"username => Elzero"
"score => 1000"
{ username: "Elzero", score: 1000, id: 100 }
```

---

## ملخص تحديات الفصل

| التكليف | الموضوع | المهارات المطلوبة | الناتج المطلوب |
| :---: | --- | --- | --- |
| 01 | Classes | Constructor, Methods, Instances | بيانات سيارة وتشغيلها |
| 02 | Inheritance | `extends`, `super`, Default Value | تفاصيل Tablet |
| 03 | Private Fields | `#private`, Getter, RegExp | رقم بطاقة منسق ومحمي |
| 04 | Prototype | `String.prototype` | Method جديدة للنصوص |
| 05 | Property Descriptors | `Object.defineProperty`, Enumerability | التحكم في الظهور والتعديل |
