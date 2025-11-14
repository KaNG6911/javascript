// 1. Доторх үгсийг урвуу болгох
// Эхний болон сүүлийн үгийг өөрчлөхгүй.
// Жишээ:
// Оролт: "JavaScript бол үнэхээр сонирхолтой хэл"
// Гаралт: "JavaScript лоб рээхнеүн йотлохронис хэл"
// const hun = (num) => {
//     let words = num.split(" ");
//     for (let i = 1; i < words.length - 1; i++) {
//         words[i] = words[i].split("").reverse().join("");
//     }
//     return words.join(" ");
// };
// const sum = hun("JavaScript бол үнэхээр сонирхолтой хэл");
// console.log(sum);

// 2. Өгүүлбэр дэх давтагдахгүй үсгүүдийг тоолох (том жижиг ялгахгүй)
// Зөвхөн a–z үсгийг тоолно.
// Оролт: "Сайн уу?"
// Гаралт: 4
// const hun = (num) => {
//   num = num.toLowerCase();
//   num = num.split("");
//   let count = [];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] <= "z" && num[i] >= "a") {
//       for (let k = i + 1; k < num.length; k++) {
//         if (num[i] !== num[k]) {
//           count.push(num[i]);

//           if (count.includes(num[i])) {
//             break;
//           }
//         }
//       }
//     }
//   }
//   return count;
// };
// const sum = hun("ssain uu");
// console.log(sum);

// 3. Давхардсан үсгүүдийг арилгаж дарааллыг хадгалах
// Оролт: "aabbccddeeff"
// Гаралт: "abcdef"
// 4. kebab-case → camelCase болгох
// Оролт: "hello-world-example"
// Гаралт: "helloWorldExample"
// 5. Урт нь 4-өөс их бол дундах үсгүүдийг “*” болгох
// Эхний 2 ба сүүлийн 2 үлдэнэ.
// Оролт: "mongolia"
// Гаралт: "mo****ia"
