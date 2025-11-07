// Бүх оюутны насны нийлбэрийг ол. students = [{name: "Бат", age: 20}, {name: "Сара", age: 22}]
// const data = [
//   { name: "bat", age: 22 },
//   { name: "sara", age: 20 },
// ];
// let sum = 0;
// for (let i = 0; i < data.length; i++) {
//   sum += data[i].age;
// }
// console.log(sum);

// 600-с их үнэтэй бүтээгдэхүүнийг хэвлэ. products = [{title: "Уут", price: 500}, {title: "Сав", price: 800}]
// const products = [
//   { title: "Уут", price: 500 },
//   { title: "Сав", price: 800 },
// ];
// for (let i = 0; i < products.length; i++) {
//   if (products[i].price > 600) {
//     hun = products[i];
// console.log(hun);
//   }
// }

// Бүх ажилтны нэрийг хэвлэ. employees = [{name: "Амгалан", department: "IT"}, {name: "Номин", department: "HR"}]
// const employees = [
//   { name: "Амгалан", department: "IT" },
//   { name: "Номин", department: "HR" },
// ];
// for (let i = 0; i < employees.length; i++) {
//   hun = employees[i].name;
//   console.log(hun);
// }

// Хамгийн их хуудастай номыг ол. books = [{title: "Монгол түүх", pages: 120}, {title: "Газар зүй", pages: 150}]
// const books = [
//   { title: "Монгол түүх", pages: 120 },
//   { title: "Газар зүй", pages: 150 },
// ];
// let max = books[0];
// for (let i = 0; i < books.length; i++) {
//   if (books[i].pages > max.pages) {
//     max = books[i];
//   } else {
//     max = max;
//   }
// }
// console.log(max);

// 90-с их оноотой оюутны нэрийг хэвлэ. students = [{name: "Бат", score: 85}, {name: "Сара", score: 92}]
// const students = [
//   { name: "Бат", score: 85 },
//   { name: "Сара", score: 92 },
// ];
// for (let i = 0; i < students.length; i++) {
//   if (students[i].score > 90) {
//     hun = students[i];
//     console.log(hun);
//   }
// }

// stock нь 0 биш бүтээгдэхүүнийг ол. products = [{title: "Уут", stock: 5}, {title: "Сав", stock: 0}]
// const products = [
//   { title: "Уут", stock: 5 },
//   { title: "Сав", stock: 0 },
// ];
// for (let i = 0; i < products.length; i++) {
//   if (products[i].stock !== 0) {
//     hun = products[i];
//     console.log(hun);
//   }
// }

// Бүх цалингийн нийлбэр ол. employees = [{name: "Амгалан", salary: 1000}, {name: "Номин", salary: 1500}]
// const employees = [
//   { name: "Амгалан", salary: 1000 },
//   { name: "Номин", salary: 1500 },
// ];
// let sum = 0;
// for (let i = 0; i < employees.length; i++) {
//   sum += employees[i].salary;
// }
// console.log(sum);

// 2005 оноос хойш хэвлэгдсэн номыг ол. books = [{title: "Монгол түүх", year: 2000}, {title: "Газар зүй", year: 2010}]
// const books = [
//   { title: "Монгол түүх", year: 2000 },
//   { title: "Газар зүй", year: 2010 },
// ];
// for (let i = 0; i < books.length; i++) {
//   if (books[i].year > 2005) {
//     hun = books[i];
//     console.log(hun);
//   }
// }

// Насны дундажийг ол. students = [{name: "Бат", age: 20}, {name: "Сара", age: 22}]
// const students = [
//   { name: "Бат", age: 20 },
//   { name: "Сара", age: 22 },
// ];
// let sum = 0;
// for (let i = 0; i < students.length; i++) {
//   sum += students[i].age;
//   hun = sum / students.length;
// }
// console.log(hun);

// Бүх үнэ 10%-иар нэмэгдүүлсэн шинэ array үүсгэ. products = [{title: "Уут", price: 500}, {title: "Сав", price: 800}
// const products = [
//   { title: "Уут", price: 500 },
//   { title: "Сав", price: 800 },
// ];
// newArr = [];
// for (let i = 0; i < products.length; i++) {
//   hun = products[i].price / 10;
//   products[i].price += hun;
// }
// newArr.push(products);
// console.log(newArr);

// students = [{name: "Бат", math: 85, english: 90, science: 95}, {name: "Сара", math: 92, english: 88, science: 100}]
// Хамгийн өндөр үндсэн дүн (math + english + science) бүхий оюутны нэрийг ол.
// const students = [
//   { name: "Бат", math: 85, english: 90, science: 95 },
//   { name: "Сара", math: 92, english: 88, science: 100 },
// ];
// let sum = "";
// for (let i = 0; i < students.length; i++) {
//   hun = students[i].math + students[i].english + students[i].science;
//   max = hun[0];
//   if (hun > max) {
//     max = hun[i];
//     sum = students[i].name;
//   }
// }
// console.log(sum);
