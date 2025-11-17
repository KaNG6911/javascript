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
const hun = (words, callback) => {
  const kun = words.reduce((total, word) => total + word.length,0);
  callback(kun);
};
const print = (text) => {
  console.log(text);
};
hun(["hii", "hello", "mongolia"], print);
