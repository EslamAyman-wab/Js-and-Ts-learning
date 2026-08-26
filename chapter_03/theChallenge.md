# Chapter 03 - Operators And Type Coercion

هذا الملف يجمع تكليفات الفصل الثالث الخاصة بالعمليات الحسابية، التحويل بين الأنواع، واستخدام قيم المتغيرات بقيود محددة.

---

## التكليف 01 - تحدي العمليات الحسابية

### المطلوب

- استبدال علامات الاستفهام بعمليات حسابية مناسبة.
- عدم التعديل على الأرقام الموجودة.
- الوصول إلى الناتج `0`.

```js
// Replace ? With Arithmetic Operators
console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0
```

---

## التكليف 02 - إخراج الرقم 6 بست طرق

### المطلوب

- استخدام قيمة المتغير فقط للوصول إلى الرقم `6`.
- كتابة ست طرق مختلفة تمامًا.
- عدم كتابة أي أرقام يدويًا.
- يمكن استخدام قيم Boolean.

```js
let num = 3;

// Solution One
console.log("Write Your Code Here"); // 6

// Solution Two
console.log("Write Your Code Here"); // 6

// Solution Three
console.log("Write Your Code Here"); // 6

// Solution Four
console.log("Write Your Code Here"); // 6

// Solution Five
console.log("Write Your Code Here"); // 6

// Solution Six
console.log("Write Your Code Here"); // 6
```

---

## التكليف 03 - إخراج الرقم 20 بعدة طرق

### المطلوب

- استخدام قيمة المتغير فقط للوصول إلى الرقم `20`.
- كتابة أربع طرق مختلفة.
- عدم كتابة أي أرقام يدويًا.
- يجب أن يكون الناتج من نوع `Number` وليس `String`.

```js
let num = "10";

// Solution One
console.log("Write Your Code Here"); // 20

// Solution Two
console.log("Write Your Code Here"); // 20

// Solution Three
console.log("Write Your Code Here"); // 20

// Solution Four
console.log("Write Your Code Here"); // 20
```

---

## التكليف 04 - تعديل قيمة المتغير بقيود

### المطلوب

- استخدام المتغير `points` للوصول للمخرجات المطلوبة.
- عدم تغيير القيمة الأصلية مباشرة.
- عدم كتابة أي أرقام يدويًا.

```js
let points = 10;

// Write Your Code Here

console.log(points); // 13

// Write Your Code Here

console.log(points); // 8
```

---

## ملخص تحديات الفصل

| التكليف | الفكرة الأساسية | المهارات المطلوبة | الناتج المطلوب |
| :---: | --- | --- | --- |
| 01 | بناء معادلة من عمليات حسابية | Arithmetic Operators | `0` |
| 02 | استخدام التحويل الضمني وBoolean | Type Coercion, Boolean Values | `6` بست طرق |
| 03 | تحويل النص إلى رقم | Unary Plus, Arithmetic Operators | `20` كـ `Number` |
| 04 | زيادة وإنقاص قيمة متغير | Assignment Operators | `13` ثم `8` |
