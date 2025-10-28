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
//   parseInt(Date.now() / 1000 / 60 / 60 / 24 / 30 / 12) + " years",
//   parseInt(
//     (Date.now() % (1000 * 60 * 60 * 24 * 30 * 12)) / 1000 / 60 / 60 / 24 / 30
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
let a = "2421";
if (a[a.length - 1] == 1) {
  hun = "monday";
} else a[a.length - 1] == 6;
if ((a[a.length - 1] == 2, a[a.length - 1] == 7)) {
  hun = "tuesday";
}
if ((a[a.length - 3] == 1, a[a.length - 1] == 8)) {
  hun = "wednesday";
}
if ((a[a.length - 1] == 4, a[a.length - 1] == 9)) {
  hun = "thursday";
}
if ((a[a.length - 1] == 5, a[a.length - 1] == 0)) {
  hun = "friday";
}
console.log(hun);
