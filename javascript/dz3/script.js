//- Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
1// Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//
//a) отримує текст з параграфа з id "content"
// const contentLog = document.getElementById('content');
// console.log(contentLog);
//
// b) отримує текст з блоку з id "rules"
// const rulesLog = document.getElementById('rules');
// console.log(rulesLog);
//
// c) замініть текст параграфа з id 'content' на будь-який інший
// const contentEdit = document.getElementById('content');
// contentEdit.innerText = '«Бійці́вський клуб» (англ. Fight Club) — культовий американський художній фільм 1999 року, екранізація однойменного роману Чака Поланіка, опублікованого у 1996 році. Ідея проекту належала продюсеру Лорі Зіскін, яка залучила до нього сценариста Джима Ульса і режисера Девіда Фінчера. Головні ролі в картині виконали актори Бред Пітт, Едвард Нортон і Гелена Бонем Картер.'
//
//d) замініть текст параграфа з id 'rules' на будь-який інший
// const rulesEdit = document.getElementById('rules');
// rulesEdit.innerText = 'Оповідач (Едвард Нортон) працює лінійним службовцем компанії-виробника автомобілів, обов\'язками якого є оцінка вартості відкликання партій продукції у випадку аварій. Внаслідок постійного стресу на роботі та частого пересування між часовими поясами, герой страждає на хронічне безсоння, з приводу чого звертається до лікаря, який рекомендує йому відвідувати групу психологічної підтримки для осіб, що перенесли хірургічне лікування раку яєчок — це має допомогти йому зрозуміти, чим є справжні страждання. Відвідування групи справляє позитивний вплив на Оповідача: він має можливість плакати, і це катарсичне переживання допомагає йому позбутися безсоння. Згодом, удаючи хворого, він записується до інших груп підтримки, доки не стикається з жінкою на ім\'я Марла Сінґер (Гелена Бонем Картер), яка веде аналогічний спосіб життя. Після цієї зустрічі герой припиняє відвідувати групи, й до нього повертається безсоння.';
//
//e) змініть кожному елементу колір фону на червоний
// document.body.style.backgroundColor = '#cf2f2f';
//
//f) змініть кожному елементу колір тексту на синій
// document.body.style.color = '#6089de';
//
//g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// const rulesClasses = document.getElementById('rules').className;
// console.log(rulesClasses);
//
//h) отримати всі елементи з класом fc_rules
// const classLog = document.getElementsByClassName('fc_rules');
// console.log(classLog);
//
//i) поміняти колір тексту у всіх елементів fc_rules на червоний
// const rulesChangeColor = document.getElementsByClassName('fc_rules');
// for (let i = 0; i < rulesChangeColor.length; i++) {
//     rulesChangeColor[i].style.color='#cd4040';
// }

2//За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement. Вставити цей блок на сторінку
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// for (let i = 0; i < users.length; i++) {
//     let usersDiv = document.createElement('div');
//     usersDiv.innerHTML = JSON.stringify(users[i]);
//     document.body.appendChild(usersDiv);
// }
