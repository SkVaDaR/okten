// //1--створити масив з:
// // - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
// let num = [1, 2, 3, 4, 5];
// let str = ['hi', 'my', 'name', 'is', 'js'];
// let mix = [true, 1, false, 0, 'equal'];
// console.log(num);
// console.log(str);
// console.log(mix);

// //2 -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array[0] = 'hello';
// array[1] = true;
// array[2] = 3;
// console.log(array);

// //3 За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i <= 10; i++) {
//     document.write(`<div>`);
//     document.write('random text');
//     document.write('</div>');
// }
// console.log(i);

// //4 За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i <= 10; i++) {
//     document.write('<div>');
//     document.write(`${i} hello js`);
//     document.write('</div>');
// }

// //5 За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i <= 20) {
//     document.write('<div>');
//     document.write('<h1>while cycle</h1>');
//     document.write('</div>');
//     i++;
// }

// //6 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i <= 20) {
//     document.write('<div>');
//     document.write(`${i}<h1>while cycle</h1>`);
//     document.write('</div>');
//     i++;
// }

// //7 - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// //8 - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let str = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// for (const words of str){
//     console.log(words);
// }

//9 - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mixed = [true, 2, 'three', 'four', 'five', 'six', false, 'eight', 6, 'ten'];
// let i = 0;
// while (i < mixed.length) {
//     console.log(mixed[i]);
//     i++;
// }

// //10 Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array = [true, 2, 'three', 'four', 'five', 'six', false, 'eight', 6, 'ten'];
// for (let i = 0; i < array.length; i++) {
//     if(typeof array[i] === "boolean"){
//         console.log(array[i]);
//     }
// }

// //11 - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array = [true, 2, 'three', 'four', 'five', 'six', false, 'eight', 6, 'ten'];
// let i=0
// while (i<array.length) {
//     if(typeof array[i] === "number"){
//         console.log(array[i]);
//     }
//     i++
// }

// //12 - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array = [true, 2, 'three', 'four', 'five', 'six', false, 'eight', 6, 'ten'];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'string'){
//         console.log(array[i]);
//     }
//
// }

// //13 - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let all = [];
// all[0]='zero';
// all[1]=true;
// all[2]='hi';
// all[3]=4;
// all[4]='ok10';
// all[5]=324531;
// for(let i = 0; i<all.length;i++){
//     console.log(all[i]);
// }

// //14 - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i < 11; i++) {
//     console.log(i);
//     document.write(`${i}<br>`);
// }

// //15 - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i=1;i<101;i++){
//     console.log(i);
//     document.write(`${i}<br>`)
// }

// //16- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 2; i < 101; i+=2) {
//     console.log(i);
//     document.write(`${i}<br>`);
//
// }

// //17 - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 101; i+=2) {
//     console.log(i);
//     document.write(`${i}<br>`);
// }
