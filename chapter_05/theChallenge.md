# Chapter 05 - Comparison, Conditions, And Switch

هذا الملف يجمع تكليفات المقارنات، الشروط، والتحكم في مسار البرنامج باستخدام `if` و `switch`.

---

## الجزء الأول - Comparison Operators

### التكليف 01 - استبدال علامات الاستفهام

#### المطلوب

استبدال علامات الاستفهام بالـ Operators المناسبة حتى تكون كل نتيجة `true`.

```js
console.log(100 ? "100"); // true
console.log(100 ? 1000); // true
console.log(110 ? 100 ? 10 ? 20); // true
console.log(-10 ? "-10"); // true
console.log(? -50 ? ? +"-40"); // true
console.log(? 10 ? ? -"-40"); // true
console.log(? "10" ? ? 10); // true
console.log(? 20 ? false); // true
```

---

### التكليف 02 - ست مقارنات مختلفة

#### المطلوب

- استخدام المتغيرين للوصول إلى `true`.
- عدم كتابة أي أرقام يدويًا.
- استخدام كل متغير مرة واحدة فقط في كل حل.
- عدم تكرار نفس الـ Operator.
- أقل عدد مطلوب هو ستة حلول.

```js
let num1 = 10;
let num2 = 20;

console.log("Your Code Here"); // true
console.log("Your Code Here"); // true
console.log("Your Code Here"); // true
console.log("Your Code Here"); // true
console.log("Your Code Here"); // true
console.log("Your Code Here"); // true
```

---

### التكليف 03 - مقارنات منطقية

#### المطلوب

استبدال علامات الاستفهام بالـ Operators المناسبة حتى تكون كل نتيجة `true`، بدون كتابة أي أرقام إضافية.

```js
let a = 20;
let b = 30;
let c = 10;

console.log(a ? b && a ? c || a ? b); // true
console.log(a ? b ? a ? c); // true
console.log(?(a ? b) && !(a ? b) && ?(a ? c) && ?(a ? c)); // true
```

---

## الجزء الثاني - If Conditions

### التكليف 01 - تنسيق الرقم

#### المطلوب

- إذا كان الرقم أصغر من `10` اطبعه وقبله صفران.
- إذا كان الرقم أكبر من `10` وأصغر من `100` اطبعه وقبله صفر واحد.
- إذا كان الرقم أكبر من أو يساوي `100` اطبعه كما هو.

```js
// Test Case 1
let num = 9; // "009"

// Test Case 2
let num = 20; // "020"

// Test Case 3
let num = 110; // "110"
```

---

### التكليف 02 - فحص القيمة والنوع

#### المطلوب

- فحص هل قيمة المتغير الأول تساوي قيمة المتغير الثاني.
- فحص هل القيمة متساوية لكن النوع مختلف.
- فحص هل المتغير الأول لا يساوي المتغير الثالث في القيمة أو النوع.
- فحص هل المتغير الثاني والثالث من نفس النوع لكن بقيم مختلفة.
- يجب أن يعتمد الحل على فحص القيمة والنوع حتى لو تغيّرت البيانات.

```js
let num1 = 9;
let str = "9";
let str2 = "20";

// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"
```

---

### التكليف 03 - شرط واحد لكل رسالة

#### المطلوب

- تنفيذ كل المطلوب باستخدام `If Condition` واحدة لكل حالة.
- التأكد أن `num3` أكبر من `num1` ومختلف عن `num1` في النوع.
- التأكد أن `num3` أكبر من `num1` ويساوي `num2` في القيمة ويختلف عنه في النوع.
- التأكد أن `num3` لا يساوي `num1` من ناحية القيمة والنوع، ولا يساوي `num2` من ناحية النوع.

```js
let num1 = 10;
let num2 = 30;
let num3 = "30";

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
```

---

### التكليف 04 - جعل كل الشروط True

#### المطلوب

تغيير قيم المتغيرات فقط حتى تكون كل نتائج الشروط `True`، بدون تعديل أي شرط.

```js
// Edit What You Want Here

let num1 = 10;
let num2 = 10;
let num3 = "10";
let num4 = 20;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1
if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2
if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3
if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4
if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5
if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6
if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7
if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
```

---

## الجزء الثالث - Switch

### التكليف 01 - مواعيد الأسبوع

#### المطلوب

- تنظيف اسم اليوم من المسافات.
- جعل أول حرف كبير حتى لو كُتب اليوم بحروف صغيرة.
- الجمعة والسبت والأحد: لا توجد مواعيد متاحة.
- الإثنين والخميس: من `10:00 AM` إلى `5:00 PM`.
- الثلاثاء: من `10:00 AM` إلى `6:00 PM`.
- الأربعاء: من `10:00 AM` إلى `7:00 PM`.
- أي قيمة أخرى تطبع رسالة أن اليوم غير صحيح.

```js
let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

let day = "Friday";
let day = "Saturday";
let day = "Sunday";
// Output => "No Appointments Available"

let day = "Monday";
let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

let day = "World";
// Output => "It's Not A Valid Day"
```

---

## ملخص تحديات الفصل

| القسم | عدد التكليفات | المهارات الأساسية | الناتج العام |
| --- | :---: | --- | --- |
| Comparison Operators | 3 | المقارنات، التحويل الضمني، العمليات المنطقية | كل النتائج `true` |
| If Conditions | 4 | بناء الشروط وفحص النوع والقيمة | رسائل وأرقام مطابقة للمطلوب |
| Switch | 1 | تنظيف النصوص واختيار الحالة المناسبة | مواعيد حسب اليوم |

إجمالي التكليفات في الملف: **8 تكليفات**.
