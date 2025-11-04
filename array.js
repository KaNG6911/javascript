// // ["🥩", "🌾", "🥔", "🥕", "🥬"] array iin length iig ol.
// let meats = ["🥩", "🌾", "🥔", "🥕", "🥬"];
// console.log(meats.length);

// 10 urttai number array uusge.
// let numbers = [34, 34, 56, 45, 67, 78, 89, 34, 23, 12];
// let strings = ["jhdjhsd", "sdfasd", "dshgf", "fewe", "dsfgudw"];

// Массивын эхний ба сүүлийн элементийг харуул. [1,2,3,4,5,6,7]
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers[0], numbers[numbers.length - 1]);

// Тодорхой элемент массив дотор байгаа эсэхийг шалга. (string array, ['ford', "toyota", "mercedes", " chevrolet ", "tesla", "byd"])
// let spy = "ford";
// let cars = ["ford", "toyota", "mercedes", "chevrolet", "tesla", "byd"];
// for (let i = 0; i < cars.length; i++) {
//   if (spy === cars[i]) {
//     console.log("yes", spy);
//     break;
//   } else {
//     console.log("no");
//   }
// }

// Массив дахь хамгийн их тоог ол. (number array , [1,2,3,4,5,6,7])
let numbers = [7, 2, 3, 4, 5, 9, 7];
for (i = 0; i < numbers.length; i++) {
  max = numbers[0];
  if (max > numbers[i]) {
    max = numbers[0];
  } else {
    max = numbers[i];
  }
  console.log(max);
}

// let numberarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// sum = 0;
// for (i = 0; i < numberarray.length; i++) {
//   sum += numberarray[i];
// }
// console.log(sum);
