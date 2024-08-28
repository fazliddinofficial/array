// (async function () {
//   let request = await Promise.allSettled([
//     fetch("https://jsonplaceholder.typicode.com/comments"),
//     fetch("https://jsonplaceholder.typicode.com/comments"),
//     fetch("https://jsonplaceholder.typicode.com/comments"),
//     fetch("https://jsonplaceholder.typicode.com/comments"),
//   ]);
//   console.log(request);

//   const res = await Promise.all(
//     request.map(({ status, value }) => {
//       if (status === "fulfilled") {
//         return value?.json();
//       }
//     })
//   );
//   console.log(res.flat(1));
// })();

// let arr = [32, 54, 32, 21];
// function sorted(arr) {
//   let res = arr.sort(function (a, b) {
//     return a - b;
//   });
// }
// console.log(sorted(arr));

// function order(words) {
//   let reg = /[^0-9]/gi;
//   if (!words) {
//     return "";
//   }
//   let splited = words.split(' ');
//   return splited.sort(function (a, b) {
//     a.replace(reg, '') - b.replace(reg, '');
//   }).join(' ');
// }

// assign(qabul qiluvchi, qoshiluvchi)