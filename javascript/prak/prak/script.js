// 1.Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
// let str = 'Привіт';
// let num = 123;
// let flag = true;
// let txt = 'true';
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);
// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';
// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);
// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
// const height = 23;
// const width = 10;
// let s = height*width;
// console.log(s);
// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v. V=pi*r^2*h
// const Pi = 3.14;
// const heightC = 10;
// let dC = 4;
// let v = Pi * heightC * Math.pow(dC / 2,2);
// console.log(v);
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// const n = 3;
// const m = 4;
// let k =Math.sqrt( Math.pow(3,2) + Math.pow(4,2));
// console.log(k);
// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// let str = "Hello world";
// document.write(str);
// alert(str);
// console.log(str);
// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
// alert('Миськів Святослав Олегович \n20 \nкатання на лижах');
// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
// let str1 ='кто' ;
// let str2 = 'ты';
// let str3 = 'такой?';
// let concatenation;
// concatenation = `${str1} ${str2} ${str3}`;
// document.write(concatenation);
// 10. Какие значения выведет в окно браузера следующий фрагмент кода? и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");   205-20 це string і відбувається конкатенація
// document.write(str - a + "<br/>");   15-вдалось відняти бо 20 це число
// document.write(str * "2" + "<br/>"); 40-як попередній випадок
// document.write(str / 2 + "<br/>");   10-як попередній випадок
// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14")     3
//     parseInt("-7.875")   -7
// parseInt("435")          435
// parseInt("Вася")         NaN
// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
// let firstNum = +prompt('введіть перше число');
// let secondNum = +prompt('введіть друге число');
// alert(firstNum+secondNum);
// alert(firstNum*secondNum);
// сложение це додавання чи множення?
// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
// let name = prompt("Введіть ім'я, по-батькові");
// let age = prompt('введіть свій вік');
// let greeting;
// greeting = `Доброго вечора ${name}, мої вітання що вам ${age}`
// alert(greeting);
// =====================
// ======ДОП============
// =====================

// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)
// let num1 = +prompt('enter a number');
// let num2 = +prompt('enter a number');
// let num3 = +prompt('enter a number');
// if (num1 < num2 && num2 < num3) {
//     console.log(num1);
//     console.log(num2);
//     console.log(num3);
// } else if (num1 < num3 && num3<num2) {
//     console.log(num1)
//     console.log(num3)
//     console.log(num2)
// }else if (num2<num1&&num1<num3){
//     console.log(num2);
//     console.log(num1);
//     console.log(num3);
// }else if(num2<num3&&num3<num1){
//     console.log(num2);
//     console.log(num3);
//     console.log(num1);
// }else if(num3<num1&&num1<num2){
//     console.log(num3);
//     console.log(num1);
//     console.log(num2);
// }else{
//     console.log(num3);
//     console.log(num2);
//     console.log(num1);
// }
// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
// alert('choose trafic light color: \n1=green \n2=yellow \n3=red');
// let color = prompt(`enter number of trafic light`);
// if (color == 1) {
//     console.log('GO')
// } else if (color == 2) {
//     console.log('WAIT')
// } else if (color == 3) {
//     console.log('STOP')
// } else {
//     console.log('DO WHAT U WANT')
// }
alert('виберіть колір світлофору \n1=зелений \n2=жовтий \n3=червоний');
alert('наявність машин \n1=є \n0=нема')
let color = prompt(`введіть число кольору світлофора`);
let isRoadClear = prompt('є на дорозі порушники?');
if (color == 1 && isRoadClear == 0) {
    console.log('іди');
} else if (color == 1 && isRoadClear == 1) {
    console.log('подожди пока нарушители проедут');
} else if (color == 2 && isRoadClear == 1) {
    console.log('жди');
} else if (color == 2 && isRoadClear == 0) {
    console.log('все равно жди');
} else if (color == 3 && isRoadClear == 0) {
    console.log('стой все равно');
} else if (color == 3 && isRoadClear == 1) {
    console.log('стой и жди');
} else {
    console.log('делай что хочешь');
}
