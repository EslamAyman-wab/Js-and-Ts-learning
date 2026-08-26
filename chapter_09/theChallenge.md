# Chapter 09 - Arrow Functions, Scope, And Closures

هذا الملف يجمع تكليفات الدوال المتداخلة، Arrow Functions، Currying، والتعامل مع معاملات مختلفة.

---

## التكليف 01 - دوال متداخلة لتجهيز التفاصيل

### المطلوب

- إنشاء دالة باسم `getDetails` تقبل `zName`, `zAge`, `zCountry`.
- داخلها أربع دوال فرعية: `namePattern`, `ageWithMessage`, `countryTwoLetters`, `fullDetails`.
- `namePattern` تحول الاسم الثاني إلى أول حرف فقط.
- `ageWithMessage` تستخرج العمر من بداية النص.
- `countryTwoLetters` ترجع أول حرفين من اسم البلد بحروف كبيرة.
- `fullDetails` تجمع النتائج في رسالة واحدة.

```js
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Write Your Code Here
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }

  function ageWithMessage(zAge) {
    // Write Your Code Here
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }

  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }

  function fullDetails() {
    // Write Your Code Here
  }

  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
```

---

## التكليف 02 - التحويل إلى Arrow Function

### المطلوب

تحويل الدوال التالية إلى `Arrow Function Syntax`.

```js
function itsMe() {
  return `Iam A Normal Function`;
}

console.log(itsMe()); // Iam A Normal Function

function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
```

---

## التكليف 03 - تحدي Currying

### المطلوب

- تحويل الدالة التالية إلى `Arrow Function Syntax`.
- قراءة فكرة `Currying Function` وفهمها.

```js
function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Available`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Available
```

---

## التكليف 04 - دالة specialMix

### المطلوب

- إنشاء دالة باسم `specialMix` تقبل عددًا غير معروف من المعاملات.
- المعاملات قد تكون أرقامًا، نصوصًا، أو نصوصًا تبدأ بأرقام.
- إذا كانت القيم أرقامًا، اجمعها.
- إذا كانت النصوص تبدأ بأرقام، استخرج الأرقام واجمعها.
- تجاهل أي نص لا يحتوي على رقم في بدايته.
- إذا كانت كل القيم نصوصًا بدون أرقام، اطبع `All Is Strings`.

```js
function specialMix(...data) {
  // Your Code Here
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
```

---

## ملخص تحديات الفصل

| التكليف | الفكرة الأساسية | المهارات المطلوبة | الناتج المطلوب |
| :---: | --- | --- | --- |
| 01 | تقسيم المنطق إلى دوال صغيرة | Nested Functions, Scope | رسالة تفاصيل كاملة |
| 02 | تحويل صياغة الدوال | Arrow Functions | نفس ناتج الدوال الأصلية |
| 03 | دوال ترجع دوال | Currying, Arrow Functions | راتب أو عدم الإتاحة |
| 04 | مزج أرقام ونصوص | Rest Parameters, `parseInt`, Conditions | مجموع الأرقام أو رسالة نصية |
