# Chapter 08 - Functions

هذا الملف يجمع تكليفات الفصل الثامن الخاصة بالدوال، المعاملات، القيم الافتراضية، وإرجاع أو طباعة النتائج.

---

## التكليف 01 - رسالة ترحيب حسب النوع

### المطلوب

- إنشاء دالة ترحب بأي شخص.
- الدالة تقبل اسم الشخص ونوعه.
- إذا كان النوع `Male` اطبع `Mr`.
- إذا كان النوع `Female` اطبع `Miss`.
- إذا لم يتم تمرير النوع، اطبع رسالة الترحيب بدون لقب.

```js
function sayHello(theName, theGender) {
  // Your Code Here
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
```

---

## التكليف 02 - دالة عمليات حسابية

### المطلوب

- إنشاء دالة تنفذ عمليات حسابية.
- الدالة تقبل رقمين ونوع العملية.
- العمليات المتاحة هي `add`, `subtract`, `multiply`.
- إذا لم تُكتب العملية، يكون الافتراضي هو الجمع.
- إذا تم تمرير رقم واحد فقط، اطبع رسالة أن الرقم الثاني غير موجود.

```js
function calculate(firstNum, secondNum, operation) {
  // Your Code Here
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
```

---

## التكليف 03 - حساب العمر بوحدات الوقت

### المطلوب

- إنشاء دالة تستقبل العمر بالسنوات.
- طباعة العمر بالشهور، الأسابيع، الأيام، الساعات، الدقائق، والثواني.
- طباعة كل وحدة في سطر منفصل.
- إذا كان العمر ليس أكبر من `10` وأقل من `100` اطبع رسالة خارج النطاق.

```js
function ageInTime(theAge) {
  // Your Code Here
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
```

---

## التكليف 04 - تحدي ترتيب البيانات حسب النوع

### المطلوب

- إنشاء دالة تطبع اسم المستخدم، عمره، وحالة إتاحته للعمل.
- الدالة تقبل ثلاثة معاملات أسماؤها `a`, `b`, `c`.
- البيانات قد تأتي بأي ترتيب.
- نوع الاسم هو `String`.
- نوع العمر هو `Number`.
- نوع الحالة هو `Boolean`.
- إذا كانت الحالة `true` اطبع أنه متاح للعمل، وإذا كانت `false` اطبع أنه غير متاح.

```js
function checkStatus(a, b, c) {
  // Your Code Here
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
```

---

## التكليف 05 - إنشاء Select Box

### المطلوب

- إنشاء دالة تقوم بإنشاء `select` داخل صفحة HTML.
- الدالة تقبل عام البداية وعام النهاية.
- إنشاء `option` لكل عام من البداية إلى النهاية.

```js
function createSelectBox(startYear, endYear) {
  // Your Code Here
}

createSelectBox(2000, 2021);
```

### الناتج المطلوب

```html
<select>
  <option value="2000">2000</option>
  <option value="2001">2001</option>
  <option value="2002">2002</option>
  <option value="2003">2003</option>
  <option value="2004">2004</option>
  <option value="2005">2005</option>
  <option value="2006">2006</option>
  <option value="2007">2007</option>
  <option value="2008">2008</option>
  <option value="2009">2009</option>
  <option value="2010">2010</option>
  <option value="2011">2011</option>
  <option value="2012">2012</option>
  <option value="2013">2013</option>
  <option value="2014">2014</option>
  <option value="2015">2015</option>
  <option value="2016">2016</option>
  <option value="2017">2017</option>
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
</select>
```

---

## التكليف 06 - ضرب الأرقام فقط

### المطلوب

- إنشاء دالة تضرب كل الأعداد الممررة لها.
- عدد المعاملات غير معروف.
- تجاهل أي `String`.
- إذا كان الرقم `Float` حوله إلى `Integer` قبل الضرب.

```js
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
```

---

## ملخص تحديات الفصل

| التكليف | الفكرة الأساسية | المهارات المطلوبة | الناتج المطلوب |
| :---: | --- | --- | --- |
| 01 | رسالة ترحيب مشروطة | Functions, Conditions | `Hello Mr/Miss/name` |
| 02 | آلة حسابية بسيطة | Parameters, Switch/If | جمع، طرح، ضرب |
| 03 | تحويل العمر لوحدات زمنية | Arithmetic, Conditions | وحدات الوقت أو خارج النطاق |
| 04 | تحديد البيانات حسب النوع | `typeof`, Dynamic Parameters | رسالة بيانات المستخدم |
| 05 | إنشاء عناصر HTML | DOM, Loops | `select` يحتوي سنوات |
| 06 | ضرب أرقام متعددة | Rest Parameters, `parseInt` | حاصل ضرب الأرقام فقط |
