# Chapter 06 - Arrays And Array Methods

هذا الملف يجمع تكليفات المصفوفات وطرق التعامل معها مثل القص، الحذف، الدمج، الترتيب، والبحث.

---

## التكليف 01 - استخراج جزء من Array بطريقتين

### المطلوب

- عدم استخدام الأرقام يدويًا.
- استخدام قيم المتغيرات للوصول إلى الناتج.
- حل المطلوب بطريقتين مختلفتين.
- يمكن كتابة كود خارج `console.log` إذا احتجت لذلك.

```js
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log("Your Code Here"); // ["Ahmed", "Elham", "Osama"]

// Method 2
console.log("Your Code Here"); // ["Ahmed", "Elham", "Osama"]
```

---

## التكليف 02 - حذف أول وآخر عنصر

### المطلوب

- عدم استخدام الأرقام يدويًا.
- عدم استخدام `slice`.
- جعل المصفوفة تحتوي على `["Eman", "Osama"]`.

```js
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends); // ["Eman", "Osama"]
```

---

## التكليف 03 - دمج وترتيب في سطر واحد

### المطلوب

- عدم استخدام الأرقام يدويًا.
- كتابة سطر كود واحد فقط للوصول إلى الناتج.

```js
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
```

---

## التكليف 04 - استخراج كلمة ZERO

### المطلوب

- عدم استخدام الأرقام يدويًا، ويمكن استخدام الرقم `0` فقط.
- كتابة سطر كود واحد للوصول إلى القيمة `ZERO`.

```js
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log("Your Code Here"); // ZERO
```

---

## التكليف 05 - البحث داخل Array بثلاث طرق

### المطلوب

- التأكد أن قيمة المتغير `needle` موجودة داخل `haystack`.
- كتابة الحل بثلاث طرق مختلفة.
- طباعة كلمة `Found` إذا كانت القيمة موجودة.

```js
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
```

---

## التكليف 06 - استخراج fxy

### المطلوب

- استخدام ما تعلمته للوصول إلى الناتج `fxy`.
- عدم كتابة أي أرقام في أي مكان داخل الحل.

```js
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(allArrs); // fxy
```

---

## ملخص تحديات الفصل

| التكليف | الفكرة الأساسية | المهارات المطلوبة | الناتج المطلوب |
| :---: | --- | --- | --- |
| 01 | استخراج عناصر من Array | `slice`, `length`, طرق بديلة | أول ثلاثة أسماء |
| 02 | حذف عناصر من البداية والنهاية | `shift`, `pop`, `splice` | `["Eman", "Osama"]` |
| 03 | دمج وترتيب | `concat`, `sort`, `reverse` | ترتيب تنازلي للحروف |
| 04 | الوصول لعناصر متداخلة | Indexing, String Methods | `ZERO` |
| 05 | البحث داخل Array | `includes`, `indexOf`, شروط | `Found` بثلاث طرق |
| 06 | دمج واستخراج أحرف | `pop`, `push`, `join`, `toLowerCase` | `fxy` |
