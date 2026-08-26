# Chapter 18 - Regular Expressions

هذا الملف يجمع تكليفات التعبيرات النمطية `RegExp` للتعامل مع IP، الأسماء، أرقام الهاتف، التواريخ، والروابط.

---

## التكليف 01 - مطابقة IPv6

### المطلوب

إنشاء `RegExp Pattern` لعمل Match لعنوان الـ IP التالي.

```js
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
```

---

## التكليف 02 - مطابقة أسماء خاصة

### المطلوب

إنشاء `RegExp Pattern` يطابق الأسماء التي تبدأ بـ `Os` وتنتهي بـ `O`.

```js
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// Output
// ["Os10O", "OsO", "Os100O"]
```

---

## التكليف 03 - مطابقة رقم هاتف

### المطلوب

إنشاء `RegExp Pattern` يطابق رقم الهاتف بالشكل التالي.

```js
let phone = "+(995)-123 (4567)";
```

---

## التكليف 04 - غير موجود في الملف الأصلي

### ملاحظة

ترقيم التكليفات ينتقل من `03` إلى `05` في الملف الأصلي. لذلك هذا القسم محفوظ كملاحظة حتى يكون ترتيب الملف واضحًا عند القراءة.

---

## التكليف 05 - مطابقة أكثر من صيغة تاريخ

### المطلوب

إنشاء Pattern واحد فقط يطابق كل التواريخ التالية.

```js
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = //; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
```

---

## التكليف 06 - تحدي مطابقة الروابط

### المطلوب

إنشاء Pattern واحد يطابق كل الروابط التالية، سواء كانت تحتوي على بروتوكول، `www`، Port، Path، أو Query String.

```js
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let re = //; // Write Your Pattern Here

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
```

---

## ملخص تحديات الفصل

| التكليف | نوع المطابقة | المهارات المطلوبة | الهدف |
| :---: | --- | --- | --- |
| 01 | IPv6 | Character Classes, Quantifiers | مطابقة IP كامل |
| 02 | أسماء | Anchors جزئية وQuantifiers | استخراج `Os10O`, `OsO`, `Os100O` |
| 03 | رقم هاتف | Escaping, Digits | مطابقة تنسيق ثابت |
| 04 | ملاحظة ترقيم | تنظيم الملف | توضيح غياب التكليف |
| 05 | تواريخ | Alternation أو Character Classes | مطابقة أربع صيغ |
| 06 | روابط | Optional Groups, Path, Query | مطابقة روابط متعددة الأشكال |
