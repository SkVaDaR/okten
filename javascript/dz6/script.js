1//1) Створити масив з 20 чисел та:
// let numbers = [1, 21, 234, 354, 67, 523, 34, 87, 45, 567, 345, 5, 13, 6, 35, 65, 3, 65, 18, 8];
// a) відсортувати його від меншого до більшого.
// numbers.sort((a, b) => b - a);
//     b) відсортувати його від більшого до меншого.
// numbers.sort((a, b) => a - b);
//     c) Відфілтрувати числа які є кратними 3.
// let num = numbers.filter(value => {
//     return value %3 === 0
// })
// console.log(num);
// d) Відфілтрувати числа які є більшими за 10.
// let moreTen = numbers.filter(value => {
//     return value > 10
// })
// console.log(moreTen);
// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// numbers.forEach((array) => {
// document.write(`${array}, `)
// })
// f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let f = numbers.map(value => value*3)
// console.log(f);
//     g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let reduce = numbers.reduce((acc, value)=>acc+value);
// console.log(reduce);

2//2) Створити масив з 20 стрічок та:
// let str = ['This', 'maybe', 'the', 'night', 'that', 'my', 'dreams', 'might', 'let', 'me', 'know', 'all', 'the', 'stars', 'are', 'closer', 'lets', 'talk', 'about', 'anything']
// a) Відсортувати його в алфавітному порядку
// let sort = str.sort((a, b) => {
//     let low = a.toLowerCase()
//     let lower = b.toLowerCase()
//     if (low > lower) {
//         return 1
//     }
//     if (low < lower) {
//         return -1
//     }
//     return 0
// })
// console.log(sort);
// b) Відсортувати в зворотньому порядку
// let sort1 = str.sort((a, b) => {
//     let low = a.toLowerCase()
//     let lower = b.toLowerCase()
//     if (low < lower) {
//         return 1
//     }
//     if (low > lower) {
//         return -1
//     }
//     return 0
// })
// console.log(sort1);
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let moreFive = str.filter(value => value.length > 4);
// console.log(moreFive);
// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let sam = str.map(says => `Sam says ${says}`)
// console.log(sam);

3//3) Все робити тільки за допомогою методів масивів!
// Дано масив :
// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// let ageSortIncrease = users.sort((a, b) => {
//     let ageA = a.age;
//     let ageB = b.age;
//     if (ageA > ageB){
//         return 1
//     }if (ageA < ageB){
//         return  -1
//     }
//     return 0
// });
// console.log(ageSortIncrease);
//
// let ageSortDecrease = users.sort((a, b) => {
//     let ageA = a.age;
//     let ageB = b.age;
//     if (ageA < ageB){
//         return 1
//     }if (ageA > ageB){
//         return  -1
//     }
//     return 0
// });
// console.log(ageSortDecrease);
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let nameLengthIncrease = users.sort((a, b) => a.name.length - b.name.length);
// console.log(nameLengthIncrease);
// let userNamesDecrease = users.sort((a, b) => b.name.length - a.name.length)
// console.log(userNamesDecrease);
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// let id = users.map((name, index) => ({...name, id: index + 1}))
// console.log(id);
// console.log(users);
// d) відсортувати його за індентифікатором
// let sortById = id.sort((a, b) => b.id - a.id)
// console.log(sortById);
// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// let marriedCheck = users.reduce((acc, value) => {
//     if (value.isMarried === true) {
//         value.flat = true
//         acc.push(value)
//     }
//     return acc
// }, [])
// console.log(marriedCheck);