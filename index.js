// const aaa = "aaa";
// const bbb = "123";

// const tsag = 8;
// console.log(tsag * 60);

// const utga = 7 % 2 === 0;
// console.log(utga === true && "even");
// console.log(utga === false && "odd");

// let neg = 9,
//   hoyr = 3,
//   gurav = 1;
// console.log(neg < hoyr && hoyr < gurav);

// let a = 10,
//   b = 70,
//   c = 300;
// console.log(a > b === true && a && a > c === true && a);
// console.log(a > b === false && b && b > c === true && b);
// console.log(c > a == true && c && c > b === true && c);

// let a = 10,
//   b = 7,
//   c = 3;
// console.log(a > b && b > c === true && a, b, c);
// console.log(b > c && c > a === true && b, c, a);
// console.log(c > a && a > b === true && c, a, b);
// console.log(a > b && b < c && a > c === true && a, c, b);
// console.log(b > c && c < a && b > a === true && b, a, c);
// console.log(c > a && a < b && c > b === true && c, b, a);

// let a = 6,
//   b = 6,
//   c = 9;
// console.log(a + b > c && a + c > b && b + c > a === true && a + b + c);

// let a = 1,
//   b = 3,
//   c = 7.9,
//   d = 5,
//   e = 8.7;
// console.log(
//   parseInt(e) + parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d)
// );

// let a = 10,
//   b = 5;
// c = "P=";
// d = "S=";
// console.log(c + (2 * a + 2 * b));
// console.log(d + a * b);

// bodlogo4
// let a = 198;
// b = "min";
// c = "sec";
// console.log(parseInt(a / 60) + b, (a % 60) + c);

// bodlogo 5
// let a = 7269;
// b = "min";
// c = "sec";
// d = "hour";
// console.log(
//   parseInt(a / 3600) + d,
//   parseInt((a % 3600) / 60) + b,
//   ((a % 3600) % 60) + c
// );

// bodlog6
// let a = 87,
//   b = 88;
// c = "sec";
// console.log(a * 60 + b + c);

// bodlogo7
// let hour = 83,
//   min = 84,
//   sec = 85;
// a = "sec";
// console.log(hour * 3600 + min * 60 + sec + a);

// 10.28nii bodloguud

// bodlogo1
// const a = 78;
// console.log(parseInt(a / 24) + " day", (a % 24) + " hour");

// bodlogo2
// const a = 3;
// const b = 10;
// console.log(a * 24 + b);

// bodlog3
// let a = 122;
// console.log(parseInt(a / 12) + " year", (a % 12) + " month");

// bodlogo4
// let a = 90;
// b = 98;
// console.log(a * 12 + b + " month");

// bodlogo5
// let a = 10,
//   b = 1,
//   c = 3,
//   d = 2;
// min = a;
// if (min > b) {
//   min = b;
// }
// if (min > c) {
//   min = c;
// }
// if (min > d) {
//   min = d;
// }
// console.log(min);

// bodlogo6
// let a = 2,
//   b = 8,
//   c = 4,
//   d = 3;
// min = 1;
// if (a < 5) {
//   min = min * a;
// }
// if (b < 5) {
//   min = min * b;
// }
// if (c < 5) {
//   min = min * c;
// }
// if (d < 5) {
//   min = min * d;
// }
// console.log(min);

// bodlogo7
// let a = 11,
//   b = 6,
//   c = 4,
//   d = 3,
//   e = 8,
//   f = 6;
// mon = 1;
// if (a > 5) {
//   mon = mon * a;
// }
// if (b > 5) {
//   mon = mon * b;
// }
// if (c > 5) {
//   mon = mon * c;
// }
// if (d > 5) {
//   mon = mon * d;
// }
// if (e > 5) {
//   mon = mon * e;
// }
// if (f > 5) {
//   mon = mon * f;
// }
// console.log(mon);

// bodlogo1.2 тоог оруулж ихийг нь хэвлэх
// let a = 11,
//   b = 16,
//   mon = 1;
// if (a < b) {
//   mon = mon * a;
// } else {
//   mon = mon * b;
// }
// console.log(mon);

// bodlogo2.Тоог тэгш/сондгой шалгах
// const a = 28;
// if (a % 2 === 0) {
//   hun = a + " tegsh too";
// } else {
//   hun = a + " sondgoi too";
// }
// console.log(hun);

// bodlogo3. 3 ширхэг тоон дундах хамгийн их/хамгийн бага
// let a = 4,
//   b = 2,
//   c = 11;
// if (a < b) {
//   (min = a), (max = b);
// } else {
//   (min = b), (max = a);
// }
// if (min > c) {
//   min = c;
// } else {
//   min = min;
// }
// if (max < c) {
//   max = c;
// } else {
//   max = max;
// }

// console.log(min, max);

// bodlog4. Стрингийн уртыг хэвлэх
// let a = "fhehhdf";
// console.log(a.length);

// bodlogo5. Стринг эхний болон сүүлчийн тэмдгийг нийлүүлэх
// let a = "dhkfdsjkfhsdfdsjhp";
// console.log(a[0] + a[a.length - 1]);

// bodlogo6. Стрингийг том үсэг болгож хувиргах
// let text = "jsfddfdfdkjfshd";
// console.log(text.toUpperCase());

// bodlogo7. Стринг дотор тодорхой тэмдэгт байгаа эсэхийг шалгах. Жишээ: "banana", "n" → true

// bodlogo8. Тоог 3-аар болон 5-аар хуваагддаг эсэхийг шалгах. 3-т хуваагдал Fizz, 5-т хуваагдал Buzz, хоюуланд нь хуваагддаг бол FizzBuzz гэх хэвлэ
// let a = 30;
// if (a % 3 === 0) {
//   hun = a + " Fizz";
// }
// if (a % 5 === 0) {
//   hun = a + " Buzz";
// }
// if ((a % 3) % 5 === 0) {
//   hun = a + " FizzBuzz";
// }
// console.log(hun);

// bodlogo9. Хоёр string-ийг нэгтгэх a = Hello b = World
// let a = "hello",
//   b = " world";
// console.log(a + b);

// bodlogo10. 2 тооны дундаж
// let a = 19,
//   b = 12;
// console.log((a + b) / 2);

// bodlogo11. Тоо эерэг эсвэл сөрөг эсэхийг шалгах - "эерэг", "сөрөг" эсвэл "тэг"
// let a = 0;
// if (a >= 0) {
//   hun = " eyreg";
// } else {
//   hun = " sorog";
// }
// if (a === 0) {
//   hun = "teg";
// }
// console.log(hun);

// bodlogo12. Тоог 10-аас их эсэхийг шалгах
// let a = 11;
// if (a > 10) {
//   hun = "ih";
// }
// console.log(hun);

// bodlogo13. Хоёр тоо тэнцүү эсэхийг шалгах - "тэнцүү" эсвэл "ялгаатай"
// let a = 10,
//   b = 10;
// if (a === b) {
//   hun = "tentsuu";
// } else {
//   hun = "ylgaatai";
// }
// console.log(hun);

// bodlogo14. Тоог 100-аас их, 0-аас бага эсэхийг шалгах
// let a = 10;
// if ((0 < a, a < 100)) {
//   hun = "bnaa";
// } else {
//   hun = "bhguie";
// }
// console.log(hun);

// bodlogo15. Тоог 10%, 20% эсвэл 30% өсгөх
// let a = 90;
// console.log(a + a / 10, a + (a / 10) * 2, a + (a / 10) * 3);

// bodlogo16. Тоог 100-аас хэтэрвэл 100 болгож хэвлэх
// let a = 101;
// if (a > 100) {
//   hun = 100;
// } else {
//   hun = a;
// }
// console.log(hun);

// bodlogo17. Хоёр тэмдэгт ижил эсэхийг шалгах === ашиглах
// let a = "-",
//   b = "-";
// if (a === b) {
//   hun = "ijil";
// }
// console.log(hun);

// bodlogo18. Хоёр оронтой тооны цифрүүдийг сольж урвуулах
// const a = 29;
// console.log((a % 10) * 10 + parseInt(a / 10));

// bodlogo19. Тоо сөрөг бол эерэг болгож, эерэг бол хэвээр үлдээх
// const a = -90;
// if (a < 0) {
//   hun = a - a - a;
// } else {
//   hun = a;
// }
// console.log(hun);

// bodlogo20. 1970.01.01 -ээс яг одоог хүртэл хэдэн он, сар, өдөр, цаг, минут, секунд, дооль, милисекунд өнгөрсөнг ол
// console.log(
//   parseInt(Date.now() / 1000 / 60 / 60 / 24 / 365) + " years",
//   parseInt(
//     (Date.now() % (1000 * 60 * 60 * 24 * 365)) / 1000 / 60 / 60 / 24 / 30
//   ) + " months",
//   parseInt((Date.now() % (1000 * 60 * 60 * 24 * 30)) / 1000 / 60 / 60 / 24) +
//     " days",
//   parseInt((Date.now() % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60) + "hours",
//   parseInt((Date.now() % (1000 * 60 * 60)) / 1000 / 60) + "mins",
//   parseInt((Date.now() % (1000 * 60)) / 1000) + "secs",
//   parseInt(Date.now() % 100) + "doils",
//   parseInt(Date.now() % 10) + "msecs"
// );

// bodlogo21. Дугаарын хязгаарлалтаар машин чинь хэд хэд дэх өдөр явахгүйг хэвлэнэ
// let num = 2420;
// const last = num % 10;
// console.log(last);
// if (last === 1 || last === 6) {
//   console.log("Davaa yavahgui");
// } else if (last === 2 || last === 7) {
//   console.log("Myagmar yavahgui");
// } else if (last === 3 || last === 8) {
//   console.log("Lhagva yavahgui");
// } else if (last === 4 || last === 9) {
//   console.log("purev yavahgui");
// } else if (last === 5 || last === 0) {
//   console.log("Baasan yavahgui");
// }

// 10.29nii bodloguud

// bodlogo 3.1 Өгөгдсөн 3 тооны ихийг ол (if ашиглана.)
// let a = 30,
//   b = 90,
//   c = 70;
// if (a > b) {
//   max = a;
// } else {
//   max = b;
// }
// if (max > c) {
//   max = max;
// } else {
//   max = c;
// }
// console.log(max);

// bodlogo.2.Өгөгдсөн 3 тооны багыг ол. (if ашиглана.)
// let a = 9,
//   b = 30,
//   c = 80;
// if (a < b) {
//   min = a;
// } else {
//   min = b;
// }
// if (min < c) {
//   min = min;
// } else {
//   min = c;
// }
// console.log(min);

// bodlogo.3.Дурын дүн өгөгдөхөд үнэлгээг нь хэвлэж харуул. (Example: 100 оноо -> A үнэлгээ гэх мэт)
// const num = 69;
// if (89 < num && num < 101) {
//   hun = "A";
// } else if (79 < num && num < 90) {
//   hun = "B";
// } else if (69 < num && num < 80) {
//   hun = "C";
// } else if (59 < num && num < 70) {
//   hun = "D";
// } else if (0 <= num && num < 60) {
//   hun = "F";
// }
// console.log(hun);

// bodlogo.4. Өгөгдсөн 2 оронтой тооны цифрүүдийн үржвэрийг ол. (Example: 23, Result: 6)
// const num = 67;
// console.log(parseInt(num / 10) * (num % 10));

// bodlogo.5. Өгөгдсөн 3 оронтой тооны цифрүүдийн нийлбэрийг ол. (Example: 125, Result: 8)
// const num = 129;
// const last = num % 100;
// console.log(parseInt(num / 100) + parseInt(last / 10) + (last % 10));

// bodlogo.6. Өгөгдсөн жил, сарыг сард шилжүүл. (Example: 2 7. Result:31)
// let a = 2,
//   b = 7;
// console.log(a * 12 + b + " months");

// bodlogo.7. Өгөгдсөн 4 тооны 50-аас их тоонуудын нийлбэрийг ол. (Example: 55 15 66 89. Result:210)
// let a = 55,
//   b = 15,
//   c = 66,
//   d = 89,
//   hun = 0;
// if (a > 50) {
//   hun = hun + a;
// }
// if (b > 50) {
//   hun = hun + b;
// }
// if (c > 50) {
//   hun = hun + c;
// }
// if (d > 50) {
//   hun = hun + d;
// }
// console.log(hun);

// bodlogo.8. Өгөгдсөн 3 тоон дахь тэгш тоонуудын нийлбэрийг ол. (Example: 2, 6, 7. Result: 8 )
// let a = 8,
//   b = 6,
//   c = 3,
//   hun = 0;
// if (a % 2 == 0) {
//   hun = hun + a;
// }
// if (b % 2 == 0) {
//   hun = hun + b;
// }
// if (c % 2 == 0) {
//   hun = hun + c;
// }
// console.log(hun);

// bodlogo.9. Өгөгдсөн 3 тоон дахь сондгой тоонуудын үржвэрийг ол. (Example: 1, 3, 6. Result:3)
// let a = 3,
//   b = 3,
//   c = 6,
//   hun = 1;
// if (a % 2 == 1) {
//   hun = hun * a;
// }
// if (b % 2 == 1) {
//   hun = hun * b;
// }
// if (c % 2 == 1) {
//   hun = hun * c;
// }
// console.log(hun);

// BODLOGO 2UUD

// bodlogo1.Өндөр жил шалгах - (Example: 2000, Result: Өндөр жил. Example-1: 2001, Result: Өндөр жил биш.) Шалгах нөхцөл: 4-т хуваагддаг, 400 -т хуваагддаг, 100 хуваагдахгүй.
// const num = 2116;
// if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
//   hun = "ondor jil";
// } else {
//   hun = "ondor jil bish";
// }
// console.log(hun);

// bodlogo. 2. Өгөгдсөн 3 тоогоор талаа хийсэн гурвалжинг байгуулж болох бол YES үгүй бол NO гэж хэвлэ. (Example: 3 4 5, Result: YES)
// let a = 8,
//   b = 4,
//   c = 11;
// if (a + b > c && a + c > b && b + c > a) {
//   hun = "YES";
// } else {
//   hun = "NO";
// }
// console.log(hun);

// bodlogo.3. Долоо хоногийн дугаар өгөгдөхөд харгалзах гарагийг англиар хэвлэ. Эхний үсгийг л томоор бичнэ. (Example: 5: Result: Friday)
// const num = 1;
// if (num === 1) {
//   hun = "Monday";
// } else if (num === 2) {
//   hun = "Tuesday";
// } else if (num === 3) {
//   hun = "Wednesday";
// } else if (num === 4) {
//   hun = "Thursday";
// } else if (num === 5) {
//   hun = "Friday";
// } else if (num === 6) {
//   hun = "Saturday";
// } else if (num === 7) {
//   hun = "Sunday";
// }
// console.log(hun);

// FOR LOOOP HICEEL 10.30

// for (let i = 1; i <= 10; i++) {
//   console.log("Pinecone" + i);
// }

// for (let i = 1; i < 2; i++) {
//   console.log("pinecone" + i);
// }

// let text = "";
// const n = 20;
// for (i = 1; i <= 20; i++) {
//   console.log("Pinecone " + i);
// }

// let text = "";
// for (i = -1; i + 2 <= 20; i + 2) {
//   console.log((i = i + 2));
// }

// let text = "";
// for (i = 0; i + 2 <= 40; i + 2) {
//   console.log((i = i + 2));
// }

// let sum = 0;
// for (i = 0; i <= 20; i += 2) {
//   sum += i;
// }
// console.log(sum);

// let sum = 0;
// for (let i = 1; i <= 40; i++) {
//   if (i % 2 === 1) {
//     sum += i;
//   }
// }
// console.log(sum);

// let sum = 0;
// for (let i = 1; i <= 40; i += 2) {
//   sum += i;
// }
// console.log(sum);

// let sum = 0;
// const n = 23;
// for (let i = 0; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

// const n = 10;
// let sum = 0;
// for (i = 0; i < n; i++) {
//   sum += 100;
// }
// console.log(sum);

// let sum = 1;
// let n = 125;
// for (i = 1; i <= n; i++) {
//   sum *= i;
// }
// console.log(sum);

// const n = 125;
// let sum = 1;
// for (let i = 1; i <= n; i += 2) {
//   sum *= i;
// }
// console.log(sum);

// const n = 13;
// let sum = 1;
// for (let i = 1; i <= n; i++) {
//   sum *= i;
// }
// console.log(sum);

// const n = 10;
// for (i = 10; i > 0; i--) {
//   console.log(i);
// }

// let n = 8;
// let sum = 1;
// for (let i = 1; i <= 10; i++) {
//   sum = n * i;
//   console.log(`${n}*${i}=${sum}`);
// }

// const n = 9;
// let sum = 1;
// for (let i = 1; i <= n; i++) {
//   sum *= 2;
// }
// console.log(sum);

// const a = 199;
// const b = a % 100;
// console.log(parseInt(a / 100) + parseInt(b / 10) + (b % 10));

// let a = "39483";
// console.log(a.length);

// const a = 80;
// console.log(a ** 2);

// const n = 4;
// let sum = 0;
// for (i = 1; i <= n; i++) {
//   sum += i ** 3;
// }
// console.log(sum);

// for (i = 1; i <= 30; i++) {
//   if (i % 3 === 0 && i % 2 === 0) {
//     console.log(i);
//   }
// }

// Хэрвээ тоо 3-т хуваагдвал “Fizz”, 5-т хуваагдвал “Buzz” гэж хэвлэх
// const n = 20;
// if (n % 3 === 0) {
//   hun = "Fizz";
// } else if (n % 5 === 0) {
//   hun = "Buzz";
// }
// console.log(hun);

// for (i = 1; i <= 100; i++) {
//   if (i % 7 !== 0) {
//     console.log(i);
//   }
// }

// 1–50 хүртэлх тоонууд дундаас сондгой бөгөөд 5-ын үржвэр тоонуудыг олох
// for (i = 1; i <= 50; i++) {
//   if (i % 2 === 1 && i % 5 === 0) {
//     console.log(i);
//   }
// }

// 1–100 хүртэлх тоонуудын дундаас 50–60 хооронд байгаа тоонуудын нийлбэрийг гарга.
// let sum = 0;
// for (i = 51; i < 60; i++) {
//   sum += i;
// }
// console.log(sum);

// 1–100 хүртэлх тоо бүрийг шалгаад 2-т болон 5-т зэрэг хуваагддаг бол тоог хэвлэ.
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

// 1–50 хүртэлх бүх сондгой тооны кубын нийлбэрийг ол.
// let sum = 0;
// for (i = 1; i <= 50; i += 2) {
//   sum += i ** 3;
// }
// console.log(sum);

// 1–20 хүртэлх тоонууд дундаас анхны тоонуудыг (prime numbers) ол.
// let prime = true;
// num = 13;
// for (i = 2; i <= Math.sqrt(num); i++)
//   if (num % i === 0) {
//     prime = false;
//     break;
//   }
// console.log(prime);

// 10.31NII BODLOGUUD

// bodlogo1. 1-ээс 10 хүртэлх тооны квадратуудыг хэвлэ
// for (let i = 1; i <= 10; i++) {
//   console.log(i ** 2);
// }

// bodlogo2. Өөрийн нэрийг бичиж эсрэгээр нь хэвлэ. Жишээ нь: Сүх -> Хүс
// let name = "altan-erdene";
// coin = "";
// for (i = name.length - 1; i >= 0; i--) {
//   coin += name[i] + "";
// }
// console.log(coin);
