// 1. Тооноос бүрдэх массивыг квадрат болгон буцаах (map)
// Оролт: [1, 2, 3] → [1, 4, 9]
// const hun = (num, callback) => {
//   let numo = num.map((n) => n ** 2);
//   callback(numo);
// };
// const print = (text) => {
//   console.log(text);
// };
// hun([1, 2, 3], print);

// 2. Сөрөг тоонуудыг шүүх (filter)
// Оролт: [1, -3, 4, -2] → [1, 4]
// const hun = (nums, callback) => {
//   const kun = nums.filter((num) => num > 0);
//   callback(kun);
// };
// const print = (text) => {
//   console.log(text);
// };
// hun([1, -3, 4, -2], print);

// 3. Массивын нийлбэрийг олох (reduce)
// Оролт: [5, 10, 3] → 18
// const hun = (nums, callback) => {
//   const kun = nums.reduce((total, num) => total + num);
//   callback(kun);
// };
// const print = (text) => {
//   console.log(text);
// };
// hun([2, 8, 10], print);

// 4. Объектуудын массивыг нэрcийн жагсаалт болгож хувиргах
// map ашиглана.
// Жишээ:
// [{name: "Bold"}, {name: "Suren"}] → ["Bold", "Suren"]
// const hun = (names, callback) => {
//   const kun = names.map((key) => key.name);
//   callback(kun);
// };
// const print = (text) => {
//   console.log(text);
// };
// hun([{ name: "Boldoo" }, { name: "Suren" }], print);

// 5. Массив доторх үгсийн уртын нийлбэрийг ол (reduce)
// Оролт: ["hi", "hello", "mongolia"]
// Гаралт: 2 + 5 + 8 = 15
// const hun = (words, callback) => {
//   const kun = words.reduce((total, word) => total + word.length,0);
//   callback(kun);
// };
// const print = (text) => {
//   console.log(text);
// };
// hun(["hii", "hello", "mongolia"], print);

// People array-аас 18 ба түүнээс дээш настай хүмүүсийн нэрийг шүүж гарга.
// const hun = () => {
//   const people = [
//     { name: "John", age: 17 },
//     { name: "Jane", age: 20 },
//     { name: "Jack", age: 18 },
//   ];
//   const adults = people
//     .filter((person) => person.age >= 18)
//     .map((person) => person.name);
//   console.log(adults);
// };
// hun();

// Зөвхөн эерэг тоонуудаар массив үүсгэ.
// const hun=()=>{
// const nums = [-5, 3, -1, 7, 0];
// const positive=nums
//      .filter((num)=>num>0)
//      console.log(positive)
// }
// hun()

// 3 аас дээш тооны урттай элементүүдээр массив үүсгэ.
//  const hun=()=>{
// const words = ["hi", "hello", "yo", "world"];
// const plus= words
//      .filter((word)=> word.length>3)
//      console.log(plus)
//  }
//  hun()

// Доорх array аас сондгой тоонуудыг 2 дахин ихэсгэсэн массив үүсгэ.
// const hun = () => {
//   const numbers = [1, 2, 3, 4, 5];
//   const sondgoi = numbers
//     .filter((number) => number % 2 === 1)
//     .map((urdun) => urdun * 2);
//   console.log(sondgoi);
// };
// hun();

// Pass хийсэн сурагдын firstname ийг нь upperCase болгосон array үүсгэ
// const hun = () => {
//   const students = [
//     { firstName: "John", lastName: "Doe", passed: true },
//     { firstName: "Jane", lastName: "Smith", passed: false },
//     { firstName: "Alice", lastName: "Jones", passed: true },
//   ];
//   const output = students
//     .filter((students) => students.passed === true)
//     .map((students) => students.firstName.toUpperCase());
//   console.log(output);
// };
// hun();

// хамгийн өндөр оноотой 3 дүнгээр нь массив үүсгэ.
 
const students = [
  { name: "A", score: 88 },
  { name: "B", score: 95 },
  { name: "C", score: 72 },
  { name: "D", score: 99 },
  { name: "E", score: 91 },
];
