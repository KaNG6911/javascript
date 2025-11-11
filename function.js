// const triangleFunction = (a, b, c) => {
//   return a + b + c;
// };
// console.log(triangleFunction(4, 2, 3));

// const hun = (a,b,c,d,e,f)=>{
//     return parseInt(a+b+c+d+e+f)
// }
// console.log(hun(1,2,3,4,5,7.8))

// const hun = (urt, orgon) => {
//   const S = urt * orgon;
//   const P = 2 * (urt + orgon);
//   return { S, P };
// };
// console.log(hun(5, 9));

// const hun = (secu) => {
//   const MIN = parseInt(secu / 60);
//   const SEC = secu % 60;
//   return {MIN, SEC};
// };
// const result = hun(908);
// console.log(result.MIN + " min "+ result.SEC + " sec");

// const hun = (spy) => {
//   const tsag = parseInt(spy / 3600);
//   const min = parseInt((spy % 3600) / 60);
//   const sec = (spy % 3600) % 60;
//   return { tsag, min, sec };
// };
// const result = hun(1297);
// console.log(result.tsag + " hour", result.min + " min", result.sec + " sec");

// const hun = (min, sec) => {
//   return min * 60 + sec;
// };
// console.log(hun(875, 88));

// const hun = (hour, min, sec) => {
//   return hour * 3600 + min * 60 + sec;
// };
// console.log(hun(83, 84, 85));

// const hun= (hour )=>{
//     const day=parseInt(hour /24)
//     const Hour = hour %24
//     return {day , Hour}

// }
// const result = hun(38)
// console.log(result.day+" day ", result.Hour+" hour")

// const hun= (day , hour)=>{
//     return day*24+hour
// }
// console.log(hun(4,40))

// const hun = (month) => {
//   const year = parseInt(month / 12);
//   const Month = month % 12;
//   return { year, Month };
// };
// const result = hun(106);
// console.log(result.year + " years", result.Month + " months");

// const hun=(year , month)=>{
//     return year*12+month
// }
// console.log(hun(90,98)+" months")

// const hun = (a, b, c, d) => {
//   let min = a;
//   if (min > b) {
//     min = b;
//   }
//   if (min > c) {
//     min = c;
//   }
//   if (min > d) {
//     min = d;
//   }
//   return min;
// };
// console.log(hun(100, 9, 4, 50));

// const hun = (a, b, c, d) => {
//   let sum = 1;
//   if (a < 5) {
//     sum *= a;
//   }
//   if (b < 5) {
//     sum *= b;
//   }
//   if (c < 5) {
//     sum *= c;
//   }
//   if (d < 5) {
//     sum *= d;
//   }
//   return sum;
// };
// console.log(hun(2, 3, 6, 4));

// const hun = (a, b, c, d, f, g) => {
//   let sum = 1;
//   if (a > 5) {
//     sum *= a;
//   }
//   if (b > 5) {
//     sum *= b;
//   }
//   if (c > 5) {
//     sum *= c;
//   }
//   if (d > 5) {
//     sum *= d;
//   }
//   if (f > 5) {
//     sum *= f;
//   }
//   if (g > 5) {
//     sum *= g;
//   }
//   return sum;
// };
// console.log(hun(11, 3, 6, 4, 6, 3));

// 2 тоог оруулж ихийг нь хэвлэх

// const text = "JavaScript"; svvliin characteriin indexiig ol.
// const find = (text) => {
//   let len = text.length - 1;
//   const result = text.indexOf(text[len]);

//   return result;
// };
// const hariu = find("JavaScript");
// console.log(hariu);

// const letter = "A"; ascii table deerh codiig ol.
// const hun = (letter) => {
//   result = letter.charCodeAt();

//   return result;
// };
// const sum = hun("A");
// console.log(sum);

// const str = "JavaScript"; Script gedeg vgiig salgaj aw
// const hun = (str) => {
//   result = str.split("Java")[1];

//   return result;
// };
// const sum = hun("JavaScript");
// console.log(sum);

// const sentence = "I like cats"; cats gdeg ugiig dogs oor solino uu.
// const hun = (sentence) => {
//   result = sentence.replace("cats", "dogs");
//   return result;
// };
// const sum = hun("I like cats");
// console.log(sum);

// const msg = "wow wow wow"; wow gdeg ugiig haha bolgoj solino uu.
// const hun = (msg) => {
//   result = msg.replaceAll("wow", "haha");

//   return result;
// };
// const sum = hun("wow wow wow");
// console.log(sum);

// const sentence = "apple,banana,orange"; , aar ni salgana uu.
// const hun = (sentence) => {
//   result = sentence.split(",");

//   return result;
// };
// const sum = hun("apple,banana,orange");
// console.log(sum);

// const email = "sumiya@gmail.com"; email esehiig shalga.
// const hun = (emial) => {
//   result = emial.includes("@gmail.com");
//   return result;
// };
// const sum = hun("sumiya@gmail.com");
// console.log(sum);

// const laugh = "haha"; 5 udaa dawtaj shine string uusge.
// const hun = (laugh) => {
//   result = laugh.repeat(5);
//   return result;
// };
// const sum = hun(" haha");
// console.log(sum);

// const msg = "apple ++++ banana  ++++apple"; msg ees  "apple banana apple" gsen string vvsge.
// const hun = (msg) => {
//   result = msg.split(" ++++").join("");
//   return result;
// };
// const sum = hun("apple ++++ banana  ++++apple");
// console.log(sum);

// const text = "javascript"; ehnii usgiin UpperCase bolgo.
// const hun = (text) => {
//   result = text[0].toUpperCase() + text.substr(1);
//   return result;
// };
// const sum = hun("javascript");
// console.log(sum);

// "Javascript is fun" дотор "fun" үгийн байршлын index-г ол.
// const hun = (text) => {
//   const spy = "fun";
//   result = text.indexOf(spy);
//   return result;
// };
// const sum = hun("Javascript is fun");
// console.log(sum);

// "a,b,c,d" → бүх , ийг  - тэмдэгтээр солино
// const hun = (text) => {
//   result = text.replaceAll(",", "-");
//   return result;
// };
// const sum = hun("a, b, c, d");
// console.log(sum);

// JavaScript хэдэн гийгүүлэгч хэдэн эгшиг байгааг тоол.
// const hun = (text) => {
//   const egshig = "a,e,i,o,u";
//   let count = 0;
//   let pun = 0;
//   const arr = [];
//   for (let i = 0; i < text.length; i++) {
//     if (egshig.includes(text[i])) {
//       count++;
//     } else {
//       pun++;
//     }
//   }
//   arr.push(count, pun);
//   return arr;
// };
// const sum = hun("Javascript");
// console.log(sum[0] + " egshig", sum[1] + " giiguulegch");

// Өгүүлбэр доторх хамгийн урт үгийг ол. Example "I love JavaScript programming" → "programming"
// const hun = (text) => {
//   puus = text.split(" ");
//   let hariu = [];
//   let max = puus[0];
//   for (let i = 0; i < puus.length; i++) {
//     if (max.length < puus[i].length) {
//       max = puus[i];
//     }
//   }
//   hariu.push(max);
//   return hariu;
// };
// const sum = hun("I love JavaScript programming");
// console.log(sum);

// "1234567890" сүүлийн 4 оос бусад тоог нь * оор орлуул
// const hun = (number) => {
//   neg = number.slice(0, -4);
//   hoyr = number.slice(-4);

//   pun = neg.replaceAll(/./g, "*");

//   pun = "*".repeat(neg.length);

//   result = pun + hoyr;
//   return result;
// };
// const sum = hun("1234567890");
// console.log(sum);
