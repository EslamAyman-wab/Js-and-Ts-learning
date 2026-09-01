التكليف 01

    قم بطباعة الثواني والدقائق والساعات والأيام والشهور والسنين من تاريخ ميلادك بإستخدام الوقت
    شاهد النتيجة بالأسفل لتعرف الفكرة المطلوبة
    المطلوب طباعة القيم من تاريخ ميلادك أنت وليس النتيجة بالأسفل

// Needed Output

"1247939400 Seconds"
"20798990 Minutes"
"346650 Hours"
"14444 Days"
"481 Months"
"40 Years"

التكليف 02

    قم بطباعة الوقت بعد مرور 10 سنوات من بداية الوقت
    قم بإضافة ثانية واحدة فقط للوقت
    بغض النظر عن ال Time Zone الخاص بك نريد أن يكون الوقت 00:00:01
    شاهد النتيجة بالأسفل لتعرف الفكرة المطلوبة

// Needed Output

"Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

التكليف 03

    في السطر الأول قم بطباعة التاريخ والوقت كاملا الخاص بآخر يوم في الشهر السابق
    في السطر الثاني قم بطباعة إسم الشهر السابق وآخر يوم منه كما في الأسفل
    يجب طباعة الرسالة بنفس الشكل

// Needed Output

"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"

التكليف 04

    قم بطباعة تاريخ ووقت ميلادك ب 3 طرق مختلفة
    طريقة كتابة التاريخ داخل String تعتبر كلها طريقة واحدة وهي String Date
    تأكد أن ال 3 طرق يقوموا بطباعة التاريخ والوقت بنفس القيم كما في الأسفل

// Needed Output

"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

التكليف 05

    قم بحساب الوقت اللازم لطباعة من رقم واحد وحتى 99999 في ال Console
    يجب إستخدام ال Performance.now()
    شاهد الرسالة المطلوب طباعتها بالأسفل
    يجب إزالة الكسور من الرقم وعدم تقريبها

// Needed Output

"Loop Took 1921 Milliseconds."

التكليف 06

    قم بإنشاء Generator Function تولد أرقام
    تأكد أنها تطبع الأرقام بنفس ال Pattern كما في الأسفل
    يجب ان تكون الأرقام إلى ما لا نهاية

// Write Your Generator Function Here

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

التكليف 07

    لديك إثنين من ال Generators Function
    المطلوب عمل Generator Function تقوم بعمل Delegate لباقي ال Generator Functions
    يجب أن تستخدم ما تعلمته لتجعل ال Function الأخيرة تستثني القيم المكررة
    شاهد ال Code لترى النتيجة لتفهم المطلوب

function* genNumbers() {
yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}

التكليف 08

    لديك السطر الموجود بالأسفل في الملف الرئيسي Main.js عبارة عن Function تقبل ثلاث قيم وتقوم بجمعهم
    قم بإنشاء الملف mod-one.js والذي يحتوي على هذه ال Function التي تأخذ 3 Parameters
    ال Function يجب أن تكون بلا إسم وقم بعمل اللازم في الملف لتستطيع إستخدامها في ملف ال main.js
    قم بإنشاء ملف mod-two.js
    إنسخ داخله الثلاث متغيرات الموجودين في الأسفل ولا تقم بالتعديل عليهم أبدا
    قم بكتابة ما تريد في الملف mod-two.js حتى يعمل ال Code في ملف main.js بشكل سليم

// main.js File
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

// mod-two.js File
let a = 10; // Do Not Edit Names
let b = 20; // Do Not Edit Names
let c = 30; // Do Not Edit Names