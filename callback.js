// const greet = (name, callback) => {
//   console.log(`Hello, ${name}!`);
//   callback();
// };
// const printHello = () => {
//   console.log("Hello11");
// };
// greet("James", printHello);

// add(a, b, callback) — 2 тоог нийлүүлээд үр дүнг callback-р буцаа.
// const add = (a, b, callback) => {
//   const hun = `${a}${b}`;
//   callback(hun);
// };
// const print = (text) => {
//   console.log(text);
// };
// add(2, 3, print);

// calculateSquare(num, callback) — тооны квадратыг тооцоод callback-д дамжуул.
// const calculate = (num, callback) => {
//   const hun = num ** 2;
//   callback(hun);
// };
// const print = (text) => {
//   console.log(text);
// };
// calculate(9, print);

// sayGoodbye(callback) — “Goodbye!” гэж хэвлээд дараа нь callback-г ажиллуул.
// const sayGoodbye=(callback)=>{
//     console.log("Goodbye!")
//     const hun="Goodbye!"
//     callback(hun)
// }
// const print =(text)=>{
//     console.log(text)
// }
// sayGoodbye(print)

// displaySum(a, b, callback) — нийлбэрийг тооцоод callback ашиглан хэвлэ.
// const displaySum=(a,b,callback)=>{
//     const hun =`${a}+${b}=${a+b}`
//     callback(hun)
// }
// const print =(text)=>{
//     console.log(text)
// }
// displaySum(8,6,print)

// checkEven(num, callback) — тоо тэгш эсэхийг шалгаад үр дүнг callback-д өг.
// const checkEven=(num,callback)=>{
//     if (num%2===0){
//         hun=`${num} tegsh too`
//     }else{
//         hun=`${num} sondgoi too`
//     }
//     callback(hun)
// }
// const print=(text)=>{
//     console.log(text)
// }
// checkEven(898,print)

// showAlert(callback) — confirm("Continue?") true бол callback-г ажиллуул.
// const showAlert = (callback) => {
//   const hun = confirm("Continue ymu yahin hurdal!");
//   if (hun === true) {
//     callback();
//   }                                                                                draaaaaa ashiglah tul
// };
// const print = () => {
//   console.log("Ta iPhone 18 hojloo. Bayr hurgey!!!");
// };
// showAlert(print);

// repeatThreeTimes(callback) — callback-г 3 удаа ажиллуул.
// const repeatThreeTimes = (callback) => {
//   for (let i = 1; i < 4; i++) {
//     callback();
//   }
// };
// const print = () => {
//   console.log("ahahah");
// };
// repeatThreeTimes(print);

// printArray(arr, callback) — массивын элемент бүрт callback-г ажиллуул.
// const printArray = (arr, callback) => {
//   for (let i = 0; i < arr.length; i++) {
//     const hun = arr[i];
//     callback(hun);
//   }
// };
// const print = (text) => {
//   console.log(text);
// };
// printArray(["df", "dfdfd", "dfere"], print);

// getLength(str, callback) — string-ийн уртыг callback-р буцаа.
// const getLength = (str, callback) => {
//   const hun = str.length;
//   callback(hun);
// };
// const print = (text) => {
//   console.log(text);
// };
// getLength("hdddsds", print);

// toUpperCase(str, callback) — үгийг том үсэг болгон callback-д өг.
// const toUpperCase=(str, callback)=>{
//     const hun = str.toUpperCase()
//     callback(hun)
// }
// const print =(text)=>{
//     console.log(text)
// }
// toUpperCase("djhdj",print)

// randomNumber(callback) — 1–10 хооронд санамсаргүй тоо гаргаад callback-д өг.
// const randomNUmber = (callback) => {
//   const hun = Math.floor(Math.random() * 10);
//   callback(hun);
// };
// const print = (text) => {
//   console.log(text);
// };
// randomNUmber(print);

// checkPositive(num, callback) — тоо эерэг эсэхийг шалгаад callback-д функцээр хэвлэ.
// const checkPositive = (num, callback) => {
//   if (num > 0) {
//     hun = num + " positive";
//   } else {
//     hun = num + " negative";
//   }
//   callback(hun);
// };
// const print = (text) => {
//   console.log(text);
// };
// checkPositive(-3, print);

// checkStringLength(str, callback) — урт нь 5-аас урт эсэхийг callback-д функцээр хэвлэ.


// checkStartsWith(str, char, callback) — string тухайн үсгээр эхэлж байгаа эсэхийг callback-д функцээр хэвлэ.
// checkLogin(username, password, callback) — зөв хэрэглэгчийг шалгаад callback-д функцээр true false хэвлэ.
// isAdult(age, callback) — нас 18-аас дээш бол true-г callback-д өг.
// checkNumberType(num, callback) — тоо сондгой эсвэл тэгш гэдгийг callback-д өг.
// printEach(arr, callback) — массивын элемент бүрт callback-г ажиллуул.
// repeatNTimes(n, callback) — callback-г n удаа ажиллуул.
// countToFive(callback) — 1-ээс 5 хүртэл тоо хэвлээд дараа нь callback-г дуудаж “Done” гэж хэл.
// sumArray(arr, callback) — нийлбэрийг тооцоод callback-д дамжуул.
// see less
