# Chapter 02 - Variables, DOM Intro, And Template Literals

هذا الملف يجمع تكليفات الفصل الثاني الخاصة بالمتغيرات، الدمج بين النصوص، القوالب النصية، والتعامل البسيط مع عنصر من صفحة HTML.

---

## التكليف 01 - إنشاء متغيرات ودمج القيم

### المطلوب

- إنشاء متغيرين باسمين مناسبين للمعنى `Number One` و `Number Two`.
- قيمة المتغير الأول هي `10` ونوعه `Number`.
- قيمة المتغير الثاني هي `20` ونوعه `Number`.
- طباعة الناتج `1020` بطريقة الدمج العادية `Concatenate`.
- طباعة نوع الناتج السابق.
- طباعة الناتج `1020` باستخدام `Template Literals`.
- طباعة نوع الناتج السابق.
- طباعة الرقم `20` ثم الرقم `10` في سطرين باستخدام `Concatenate` بدون تكرار `console.log`.
- طباعة الرقم `20` ثم الرقم `10` في سطرين باستخدام `Template Literals` بدون تكرار `console.log`.

### قالب البداية

```js
// Add Variables Here

// Output
console.log("Add Code Here"); // Normal Concatenate => 1020
console.log("Add Code Here"); // Normal Concatenate => String
console.log("Add Code Here"); // Template Literals Way => 1020
console.log("Add Code Here"); // Template Literals Way => String

console.log("Add Code Here");
/*
  Normal Concatenate
  20
  10
*/

console.log("Add Code Here");
/*
  Template Literals Way
  20
  10
*/
```

---

## التكليف 02 - الوصول إلى عنصر من صفحة HTML

### المطلوب

- عدم تعديل ملف JavaScript نهائيًا.
- عدم كتابة أي كود JavaScript إضافي للوصول للمطلوب.
- جعل الكود التالي يعمل ويطبع النتيجة المطلوبة.

### كود JavaScript

```js
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
```

---

## التكليف 03 - طباعة نص معقد بدون Template Literals

### المطلوب

طباعة النص التالي بدون استخدام `Template Literals`.

### الناتج المطلوب

```text
`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``
```

---

## التكليف 04 - تحدي الدمج باستخدام المتغيرات

### المطلوب

- استخدام المتغيرين فقط للوصول للناتج الموجود.
- عدم تكرار أي متغير أكثر من مرة.
- عدم كتابة أي أرقام يدويًا داخل الحل.

### قالب البداية

```js
let a = 21;
let b = 20;

console.log("Write Your Code Here"); // _21_2021_2021_2021_20_
```

---

## ملخص تحديات الفصل

| التكليف | الفكرة الأساسية | المهارات المطلوبة | الناتج المطلوب |
| :---: | --- | --- | --- |
| 01 | إنشاء متغيرات ودمج أرقام كنصوص | `let`, `typeof`, `Concatenate`, `Template Literals` | `1020`, `string`, وسطور متعددة |
| 02 | تجهيز HTML لكي يتعرف JavaScript على عنصر | DOM Element ID | طباعة `object` ونوعه |
| 03 | التعامل مع علامات الاقتباس والـ escaping | String escaping | نص متعدد الأسطر بشكل مطابق |
| 04 | تحدي دمج القيم بقيود | Variables, Concatenation | `_21_2021_2021_2021_20_` |
