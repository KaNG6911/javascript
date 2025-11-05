// ["🥩", "🌾", "🥔", "🥕", "🥬"] array iin length iig ol.
// let meats = ["🥩", "🌾", "🥔", "🥕", "🥬"];
// console.log(meats.length);

// 10 urttai number array uusge.
// let numbers = [34, 34, 56, 45, 67, 78, 89, 34, 23, 12];
// let strings = ["jhdjhsd", "sdfasd", "dshgf", "fewe", "dsfgudw"];
// console.log(numbers);
// console.log(strings);

// Массивын эхний ба сүүлийн элементийг харуул. [1,2,3,4,5,6,7]
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers[0], numbers[numbers.length - 1]);

// Тодорхой элемент массив дотор байгаа эсэхийг шалга. (string array, ['ford', "toyota", "mercedes", " chevrolet ", "tesla", "byd"])
// let spy = "ford";
// let cars = ["ford", "toyota", "mercedes", "chevrolet", "tesla", "byd"];
// for (let i = 0; i < cars.length; i++) {
//   if (spy === cars[i]) {
//     hun = "yes";
//     break;
//   } else {
//     hun = "No";
//   }
// }
// console.log(hun);

// Массив дахь хамгийн их тоог ол. (number array , [1,2,3,4,5,6,7])
// let numbers = [11, 2, 3, 4, 5, 9, 2];
// let max = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// console.log(max);

// max = Math.max(...numbers);
// console.log(max);

// let numberarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// sum = 0;
// for (i = 0; i < numberarray.length; i++) {
//   sum += numberarray[i];
// }
// console.log(sum);

// Массив дахь хамгийн бага тоог ол. (number array, [1,2,3,4,5,6,7])
// let nums = [4, 1, 2, 5, 6, 78, 9, 98];
// let min = nums[0];
// for (let i = 1; i < nums.length; i++) {
//   if (nums[i] < min) {
//     min = nums[i];
//   }
// }
// console.log(min);

// min = Math.min(...nums);
// console.log(min);

// Зөвхөн тэгш тоонуудыг шүүн гарга. (number array, [1,2,3,4,5,6,7])
// let nums = [1, 2, 3, 4, 2, 6, 7, 89, 10];
// for (i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 === 0) {
//     sum = nums[i];
//     console.log(sum);
//   }
// }

// Тодорхой тоо массив дотор хэдэн удаа орсныг тоол. (number array, [ 2,3 , 1,6,7,10,11,2] , 2 )
// let nums = [1, 2, 3, 4, 5, 6, 7, 6, 4, 3, 3, 5];
// spy = 6;
// sum = 0;
// for (i = 0; i < nums.length; i++) {
//   if (spy === nums[i]) {
//     sum++;
//   }
// }
// console.log(sum);

// Бүх тоонуудыг 2 дахин үржүүлсэн шинэ массив үүсгэ. (number array, [1,2,3,4,5,6,7])
// let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// newmas = [];
// j = 0;
// for (let i = 0; i < nums.length; i++) {
//   newmas[j] = nums[i] * 2;
//   j++;
// }
// console.log(newmas);

// Бүх үгсийг том үсгээр (uppercase) болго. ([a, b, c, d, e ,f])
// let words = ["w", "e", "r", "r", "r", "t", "y"];
// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i].toUpperCase();
// }
// console.log(words);

// Бүх үгсийг жижиг үсгээр (lowercase) болго. ([A,B,C,D,E,T,Y,I,O,F])
// let sums = ["W", "E", "O"];
// for (let i = 0; i < sums.length; i++) {
//   sums[i] = sums[i].toLowerCase();
// }
// console.log(sums);

// “a” үсэг агуулсан үгсийн тоо ["apple", "pear", "grape", "kiwi"]
// let nums = ["apple", "pear", "grape", "kiwi"];
// sum = 0;
// for (i = 0; i < nums.length; i++) {
//   if (nums[i].includes("a")) {
//     sum++;
//   }
// }
// console.log(sum);

// Эхний үгтэй ижил урттай бүх үгийг буцаа. ["hi", "to", "see", "me", "go"] -> ["hi", "to", "me", "go"]
// let nums = ["hi", "to", "see", "me", "go"];
// sum = nums[0];
// hun = [];
// j = 0;
// for (i = 0; i < nums.length; i++) {
//   if (sum.length === nums[i].length) {
//     hun[j] = nums[i];
//     j++;
//     // hun.push(nums[i]);
//   }
// }
// console.log(hun);

// Массив дахь хамгийн урт үгийг ол. ["apple", "banana", "kiwi"]
// const arr = ["apple", "banana", "kiwi", "mango"];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (max.length < arr[i].length) {
//     max = arr[i];
//   } else {
//     max = max;
//   }
// }
// console.log(max);

// Массив дотор байгаа "" буюу хоосон string-ийг хас. ["hi", "", "world", "", "js"]
const arr = ["hi", "", "world", "", "js"];
let j = 0;
hun = [];
for (i = 0; i < arr.length; i++) {
  if (arr[i].length > 0) {
    hun[j] = arr[i];
    j++;
  }
}
console.log[hun];
