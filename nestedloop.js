// Массив дахь бүх тоонуудыг хоёр хоёроор нь үржүүлж, шинэ массивт хадгал. Жишээ нь: [2,3,4] → [6,8,12]
// const arr = [2, 3, 4];
// let sum = [];
// for (let i = 0; i < arr.length; i++) {
//   kun = arr[i];
//   for (let j = i + 1; j < arr.length; j++) {
//     hun = kun * arr[j];
//     sum.push(hun);
//   }
// }
// console.log(sum);

// Массив дахь давтагдсан тоонуудыг олж, тус бүрийн хэдэн удаа гарч ирсэн болохыг тооц. Жишээ: [1,2,2,3,3,3] → {2:2, 3:3}
// const arr = [1, 2, 2, 2, 3, 3, 3];
// let kun = {};
// for (let i = 0; i < arr.length; i++) {
//   let count = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       count++;
//     }
//   }
//   if (count > 1) {
//     kun[arr[i]] = count;
//   }
// }
// console.log(kun);

// Хоёр массивын дунд адилхан элементүүдийг ол. Жишээ: [1,2,3,4] ба [3,4,5,6] → [3,4]
// const arr = [1, 2, 3, 4];
// const secondarr = [3, 4, 5, 6];
// let huvi = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < secondarr.length; j++) {
//     if (arr[i] === secondarr[j]) {
//       huvi.push(arr[i]);
//     }
//   }
// }
// console.log(huvi);

// Өгөгдсөн тооноос хамаарч од(*)-оор гурвалжин хэвлэ. 4
// const spy = 04;
// for (let i = 0; i < spy; i++) {
//   star = "*";
//   for (let j = 0; j < i; j++) {
//     star += "*";
//   }
//   console.log(star);
// }

// Хоёр үг нь ижил үсгийн бүрдэлтэй (анаграмм) эсэхийг шалга. Жишээ: "listen" ба "silent" → true
// const a = "Listen";
// const b = "silent";
// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < b.length; j++) {
//     if (a.length !== b.length) {
//       console.log("False");
//       break;
//     } else if (a[i] === b[j]) {
//       console.log("True");
//     }
//   }
// }

// Массив доторх хоёр элементийн нийлбэр нь өгөгдсөн target тоотой тэнцүү хосуудыг ол.
// Жишээ: [1,2,3,4,5], target=5 → [[1,4],[2,3]]
// const arr = [1, 2, 3, 4, 5];
// const target = 5;
// let sum = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     hun = arr[i] + arr[j];
//     if (hun === target) {
//       sum.push([arr[i], arr[j]]);
//     }
//   }
// }
// console.log(sum);

// Mассивыг өсөхөөр эрэмбэл Жишээ: [5,2,8,1] → [1,2,5,8]
// const arr = [5, 20, 8, 9, 1];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let max = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = max;
//     }
//   }
// }
// console.log(arr);

// Массив дахь хоёр тооны ялгавар k-тай тэнцүү хосуудыг тоол. Жишээ: [1,5,3,4,2], k=2 → 3
// const arr = [1, 5, 3, 4, 2, 7];
// const spy = 2;
// let sum = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     let hun = arr[i] - arr[j];
//     if (hun === spy && i !== j) {
//       sum.push([arr[i], arr[j]]);
//     }
//   }
// }
// console.log(sum.length);

// 1-ээс 10 хүртэлх үржвэрийн хүснэгт хэвлэ.
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     hun = i + "*" + j + "=" + i * j;
//     console.log(hun);
//   }
// }

// Өгөгдсөн string доторх давтагдсан үсгүүдийг ол. Жишээ: "programming" → ['r','g','m']
// Set ашиглалгүйгээр массив доторх давхардсан элементүүдийг арилгах. Жишээ: [1,2,2,3,4,4,5] → [1,2,3,4,5]
// Хоёр ангийн оюутнуудын дүнг харьцуулж, аль нь өндөр оноотойг илэрхийл. Жишээ: classA=[80,90,70], classB=[85,85,75] → [B,A,B]
// Хоёр string-ийг double loop ашиглан substring эсэхийг шалга (includes ашиглахгүй). Жишээ: "hello world", "world" → true
// Хоёр массивын бүх элементүүдийн нийлбэрийг 2D массив хэлбэрээр гарга. Жишээ: [1,2] ба [3,4] → [[4,5],[5,6]]
// Хоёр string-ийн адилхан үсэг хэдэн ширхэг байгаа болохыг тооц. Жишээ: "apple", "peach" → 3 (p, e, a)
