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

// Өөрийн дуртай 5 жимсний жагсаалт үүсгээд, хамгийн эхний болон хамгийн сүүлийн жимсийг хэвлэ.
// const arr = ["mango", "banana", "grape", "orange", "watermelon"];
// hun = arr.splice(1, arr.length - 1);
// console.log(arr);

// const hun = () => {
//   const num = ["mango", "banana", "grape", "orange", "watermelon"];
//   result = num.splice(1, num.length - 2);
//   return num;
// };
// console.log(hun());

// ['apple', 'banana'] массивын төгсгөлд 'mango' нэм.
// const hun=()=>{
//     const num= ['apple', 'banana']
//     result = num.push("mango")
//     return num
// }
// console.log(hun())

// [1, 2, 3, 4] массиваас сүүлийн элементийг pop() ашиглан устга.
// const hun=()=>{
//     const num =  [1, 2, 3, 4]
//     result = num.pop()
//     return num
// }
// console.log(hun())

// [10, 20, 30] массивын эхэнд 5 нэм.
// const hun=()=>{
//     const num=[10, 20, 30]
//     result = num.splice(0,0,5)
//     return num
// }
// console.log(hun())

// [100, 200, 300] массиваас эхний элементийг shift() ашиглан устга.
// const hun = () => {
//   const num = [100, 200, 300];
//   result = num.shift();
//   return num;
// };
// console.log(hun());

// [1, 2, 3] ба [4, 5, 6] массивуудыг нэгтгэж шинэ массив үүсгэ.
// const hun=()=>{
//     const num =[1, 2, 3]
//     const sum =[4, 5, 6]
//     result =num.push(...sum)
//     return num
// }
// console.log(hun())

// ['apple', 'banana', 'orange'] массив дотор 'banana' байгаа эсэхийг шалга.
// const hun = ()=>{
//     const num = ['apple', 'banana', 'orange']
//     const spy = "apple"
//     result = num.includes(spy)
//     return result
// }
// console.log(hun())

// ['cat', 'dog', 'bird'] массив дотор 'dog' хэддэх индекст байгааг ол.
// const hun = () => {
//     const num =  ['cat', 'dog', 'bird']
//     const spy = "bird"
//     result= num.indexOf(spy)
//     return result
// };
// console.log(hun())

// ['I', 'love', 'JavaScript'] массивыг join() ашиглан нэг мөр болгон холбож хэвлэ.
// const hun = () => {
//   const num = ["I", "love", "JavaScript"];
//   result = num.join(" ");
//   return result;
// };
// console.log(hun());

// [10, 20, 30, 40, 50] массиваас эхний 3 элементийг slice() ашиглан аваад шинэ массив үүсгэ.
// const hun=()=>{
//     const num = [10, 20, 30, 40, 50]
//     result = num.slice(0,3)
//     return result
// }
// console.log(hun())

// [1, 2, 3, 4] массиваас хоёр дахь элементийг splice() ашиглан устга.
// const hun = () => {
//   const num = [1, 2, 3, 4];
//   result = num.splice(1, 1);
//   return num;
// };
// console.log(hun());

// [1, 2, 3, 4, 5] массивыг reverse() ашиглан урвуугаар эргүүл.
// const hun = ()=>{
//     const num =[1, 2, 3, 4, 5]
//     result = num.reverse()
//     return result
// }
// console.log(hun())

// ['banana', 'apple', 'cherry'] массивыг sort() ашиглан үсгийн дарааллаар эрэмбэл.
// const hun =()=>{
//     const num = ['banana', 'apple', 'cherry']
//     result= num.sort()
// return result
// }
// console.log(hun())

// Өгөгдсөн хувьсагч массив мөн эсэхийг Array.isArray() ашиглан шалга.
// const hun = ( )=>{
//     const num = ["wewew","wewewe", "ewewew"]
//     result = Array.isArray(num)
//     return result
// }
// console.log(hun())

// ['red', 'blue', 'green'] массивын нийт уртыг хэвлэ.
// const hun = () => {
//   const num = ["red", "blue", "green"];
//   result = num.length;
//   return result;
// };
// console.log(hun());

// [10, 20, 30] массивын дундах элемент (20)-ийг 25 болгож солино уу.
// const hun = ()=>{
//     const num = [10, 20, 30]
//     result = num.splice(1, 1, 25)
//     return num
// }
// console.log(hun())

// ['HTML', 'CSS'] ба ['JavaScript', 'React'] массивуудыг нэгтгээд нийт хэдэн элементтэй болохыг хэвлэ.
// const hun = () => {
//   const num = ["HTML", "CSS"];
//   const sum = ["JavaScript", "React"];
//   result = num.concat(sum).length;
//   return result;
// };
// console.log(hun());

// [1, 2, 3, 4, 5] массиваас сүүлийн 2 элементийг splice() ашиглан устга.
// const hun = ()=>{
//     const num =  [1, 2, 3, 4, 5]
//     result = num.splice(-2)
//     return num
// }
// console.log(hun())

// [5, 10, 15, 20] массиваас гурав дахь элементийг splice() ашиглан хас.
// const hun = () => {
//   const num = [5, 10, 15, 20];
//   result = num.splice(2, 1);
//   return num;
// };
// console.log(hun());

// [100, 200, 300] массиваас 200 байгаа эсэхийг шалгаад, байвал “байна”, байхгүй бол “байхгүй” гэж хэвлэ.
// const hun = () => {
//   const num = [100, 200, 300];
//   if (num.includes(200)){
//       sum="baina"
//   }else {
//     sum="baihgui"
//   }
//   return sum
// };
// console.log(hun())