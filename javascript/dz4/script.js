1//1) створити функцію яка приймає масив та виводить його
// function num(array) {
//     console.log(array);
// }
//
// num([1, 3, 10, 8, 7])

2//2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function random(arr){
//     for(let i=0;i<5;i++){
//         arr.push(Math.round(Math.random()*10))
//     }
//     num(arr)
// }
// random([])
3// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(a, b, c) {
// if(a<b&&a<c){
//     console.log(a);
// }
// if(b<a&&b<c){
//         console.log(b);
//     }
// if(c<a&&c<b){
//         console.log(c);
//     }
// }
// min(10,15,9)
4//4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function numbersMax(a,b,c){
//     if(a>b&&a>c){
//         return a;
//     }
//     if(b>a&&b>c){
//         return b;
//     }
//     if(c>a&&c>b){
//         return c;
//     }
// }
// let output = numbersMax(5,10,15);
// console.log(output);
5//5) створити функцію яка повертає найбільше число з масиву
// function arrMax(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }
//
// let maximum = arrMax([1, 6, 346, 345, 312, 564]);
// console.log(maximum);
6// 6) створити функцію яка повертає найменьше число з масиву
// function numberMin(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     return min;
// }
//
// let minimal = numberMin([234, 345, 74, 32, 0]);
// console.log(minimal);
7//7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// function sumator(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum
// }
//
// let s = sumator([1, 5, 7, 8]);
// console.log(s);
8//8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function middle(arr) {
//     let mid = 0;
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         mid = (sum+=arr[i])/arr.length
//     }
//     return mid
// }
//
// let m = middle([3, 6, 9]);
// console.log(m);
9//9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// function array(user) {
//     let keys = Object.keys(user)
//     return keys
// }
// let k = array({name: 'Dima', age: 13, model: 'Camry'});
// console.log(k);
10//10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// function array(user) {
//     let values = Object.values(user)
//     return values
// }
// let k = array({name: 'Dima', age: 13, model: 'Camry'});
// console.log(k);
11//11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// function adding(add1, add2) {
//     let sum = [];
//     if (add1 > add2) {
//     }
//     for (let i = 0; i < add1.length; i++) {
//         sum[i] = add1[i] + add2[i];
//     }
//     if (add2 > add1) {
//         for (let i = 0; i < add2.length; i++) {
//             sum[i] = add1[i] + add2[i];
//         }
//     }
//     return sum
// }
//
// console.log(adding([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]));
