//call back //1
// function wakeUpInTime(earlyTime, cb) {
//     setTimeout(() => {
//             if (earlyTime) {
//                 console.log('U woke up');
//                 cb(null, 100)
//             } else {
//                 cb('You overslept first lesson')
//             }
//         }, 100)
// }
//
// //2
// function shower(mood, cb) {
//     setTimeout(() => {
//             if (mood) {
//                 console.log("U're clean");
//                 cb(null, mood + 5);
//             } else {
//                 cb(`U have dirty teeth`);
//             }
//         }, 1000)
// }
//
// //3
// function eat(mood, cb) {
//     setTimeout(() => {
//             if (mood) {
//                 console.log('om nom nom');
//                 cb(null, mood + 10);
//             } else {
//                 cb("u're hungry till afternoon");
//             }
//         }, 500)
// }
//
// //4
// function study(mood, cb) {
//     setTimeout(() => {
//             if (mood) {
//                 console.log('pary');
//                 cb(null, mood - 1);
//             } else {
//                 cb('get F');
//             }
//         }, 3000)
// }
//
// //5
// function lunch(mood, cb) {
//     setTimeout(() => {
//             if (mood) {
//                 console.log('u had lunch');
//                 cb(null, mood + 5);
//             } else {
//                 cb("u're starving");
//             }
//         }, 3000)
// }
//
// //6
// function walk(mood, cb) {
//     setTimeout(() => {
//             if (mood) {
//                 console.log('knees not hurt');
//                 cb(null, mood + 10);
//             } else {
//                 cb('u feel tired');
//             }
//         }, 1500)
// }
//
// //7
// function dinner(mood, cb) {
//     setTimeout(() => {
//             if (mood) {
//                 console.log('tasty');
//                 cb(null, mood + 5);
//             } else {
//                 cb("u won't sleep well");
//             }
//         }, 500)
// }
//
// //8
// function jsLection(mood, cb) {
//     setTimeout(() => {
//             if (mood) {
//                 console.log('new knowledge');
//                 cb(null, mood + 10);
//             } else {
//                 cb('watch replay!!!');
//             }
//         }, 2000)
// }
//
// //9
// function rest(mood, cb) {
//     setTimeout(() => {
//             if (mood) {
//                 console.log('playing');
//                 cb(null, mood + 5);
//             } else {
//                 cb('Then start codding');
//             }
//         }, 1000)
// }
//
// //10
// function code(mood, cb) {
//     setTimeout(() => {
//             if (mood) {
//                 console.log('happy and go sleep');
//                 cb(null, mood + 100);
//             } else {
//                 cb('U need more practice');
//             }
//         }, 4000)
// }
//
// wakeUpInTime(true, (err, mood) => {
//     if (!err) {
//         console.log(mood);
//         shower(mood, (err, data) => {
//             if (!err) {
//                 console.log(data);
//                 eat(mood, (err, data) => {
//                     if (!err) {
//                         console.log(data);
//                         study(mood, (err, data) => {
//                             if (!err) {
//                                 console.log(data);
//                                 lunch(mood, (err, data) => {
//                                         if (!err) {
//                                             console.log(data);
//                                             walk(mood, (err, data) => {
//                                                 if (!err) {
//                                                     console.log(data);
//                                                     dinner(mood, (err, data) => {
//                                                         if (!err) {
//                                                             console.log(data);
//                                                             jsLection(mood, (err, data) => {
//                                                                 if (!err) {
//                                                                     console.log(data);
//                                                                     rest(mood, (err, data) => {
//                                                                         if (!err) {
//                                                                             console.log(data);
//                                                                             code(mood, (err, data) => {
//                                                                                 if (!err) {
//                                                                                     console.log(data);
//                                                                                 } else {
//                                                                                     console.warn(err);
//                                                                                 }
//                                                                             })
//                                                                         } else console.warn(err);
//                                                                     })
//                                                                 } else console.warn(err);
//                                                             })
//                                                         } else console.warn(err);
//                                                     })
//                                                 } else console.warn(err);
//                                             })
//                                         } else console.warn(err);
//                                     })
//                             } else console.warn(err);
//                         })
//                     } else console.warn(err);
//                 })
//             } else console.warn(err);
//         })
//     } else console.warn(err);
// })

// promise //1
// function wakeUpInTime(earlyTime) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (earlyTime) {
//                 console.log('U woke up');
//                 resolve(100)
//             } else {
//                 reject('You overslept first lesson')
//             }
//         }, 100)
//     })
// }
//
// 2
//
// function shower(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log("U're clean");
//                 resolve(mood + 5)
//             } else {
//                 reject(`U have dirty teeth`);
//             }
//         }, 1000)
//     })
// }
//
// //3
// function eat(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log('om nom nom');
//                 resolve(mood + 10);
//             } else {
//                 reject("u're hungry till afternoon");
//             }
//         }, 500)
//     })
// }
//
// //4
// function study(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log('pary');
//                 resolve(mood - 1);
//             } else {
//                 reject('get F');
//             }
//         }, 3000)
//     })
// }
//
// //5
// function lunch(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log('u had lunch');
//                 resolve(mood + 5);
//             } else {
//                 reject("u're starving");
//             }
//         }, 3000)
//     })
// }
//
// //6
// function walk(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log('knees not hurt');
//                 resolve(mood + 10);
//             } else {
//                 reject('u feel tired');
//             }
//         }, 1500)
//     })
// }
//
// //7
// function dinner(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log('tasty');
//                 resolve(mood + 5);
//             } else {
//                 reject("u won't sleep well");
//             }
//         }, 500)
//     })
// }
//
// //8
// function jsLection(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log('new knowledge');
//                 resolve(mood + 10);
//             } else {
//                 reject('watch replay!!!');
//             }
//         }, 2000)
//     })
// }
//
// //9
// function rest(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log('playing');
//                 resolve(mood + 5);
//             } else {
//                 reject('Then start codding');
//             }
//         }, 1000)
//     })
// }
//
// //10
// function code(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log('happy and go sleep');
//                 resolve(mood + 50);
//             } else {
//                 reject('U need more practice');
//             }
//         }, 4000)
//     })
// }
//
// wakeUpInTime(true)
//     .then(value => {
//         console.log(value);
//         return shower(value);
//     }).then(value => {
//     console.log(value);
//     return eat(value);
// }).then(value => {
//     console.log(value);
//     return study(value);
// }).then(value => {
//     console.log(value);
//     return lunch(value);
// }).then(value => {
//     console.log(value);
//     return walk(value);
// }).then(value => {
//     console.log(value);
//     return dinner(value);
// }).then(value => {
//     console.log(value);
//     return jsLection(value);
// }).then(value => {
//     console.log(value);
//     return rest(value);
// }).then(value => {
//     console.log(value);
//     return code(value);
// }).catch(error => {
//         console.log(error);
//     }
// ).finally(() => {
//     console.log('have a nice day')
// })

// async await //1
// function wakeUpInTime(earlyTime) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (earlyTime) {
//                 console.log('U woke up');
//                 resolve(100)
//             } else {
//                 reject('You overslept first lesson')
//             }
//         }, 100)
//     })
// }
//
// //2
// function shower(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log("U're clean");
//                 resolve(mood + 5)
//             } else {
//                 reject(`U have dirty teeth`);
//             }
//         }, 1000)
//     })
// }
//
// //3
// function eat(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log('om nom nom');
//                 resolve(mood + 10);
//             } else {
//                 reject("u're hungry till afternoon");
//             }
//         }, 500)
//     })
// }
//
// //4
// function study(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log('pary');
//                 resolve(mood - 1);
//             } else {
//                 reject('get F');
//             }
//         }, 3000)
//     })
// }
//
// //5
// function lunch(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log('u had lunch');
//                 resolve(mood + 5);
//             } else {
//                 reject("u're starving");
//             }
//         }, 3000)
//     })
// }
//
// //6
// function walk(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log('knees not hurt');
//                 resolve(mood + 10);
//             } else {
//                 reject('u feel tired');
//             }
//         }, 1500)
//     })
// }
//
// //7
// function dinner(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log('tasty');
//                 resolve(mood + 5);
//             } else {
//                 reject("u won't sleep well");
//             }
//         }, 500)
//     })
// }
//
// //8
// function jsLection(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log('new knowledge');
//                 resolve(mood + 10);
//             } else {
//                 reject('watch replay!!!');
//             }
//         }, 2000)
//     })
// }
//
// //9
// function rest(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log('playing');
//                 resolve(mood + 5);
//             } else {
//                 reject('Then start codding');
//             }
//         }, 1000)
//     })
// }
//
// //10
// function code(mood) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (mood) {
//                 console.log('happy and go sleep');
//                 resolve(mood + 50);
//             } else {
//                 reject('U need more practice');
//             }
//         }, 4000)
//     })
// }
//
// async function schedule() {
//     let mood = await wakeUpInTime(true);
//     console.log(mood);
//     mood = await shower(mood);
//     console.log(mood);
//     mood = await eat(mood);
//     console.log(mood);
//     mood = await study(mood);
//     console.log(mood);
//     mood = await lunch(mood);
//     console.log(mood);
//     mood = await walk(mood);
//     console.log(mood);
//     mood = await dinner(mood);
//     console.log(mood);
//     mood = await jsLection(mood);
//     console.log(mood);
//     mood = await rest(mood);
//     console.log(mood);
//     mood = await code(mood);
//     console.log(mood);
// }
//
//
// try {
//     schedule()
// } catch (err) {
//     console.log(err);
// }

//Реалізувати друкарську машинку.
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером.
//function typeH(machineWorks) {
//     return new Promise( (resolve, reject) => {
//         setTimeout(()=>{
//             if (machineWorks){
//                 document.write('H')
//                 resolve(true);
//             }else {
//                 reject('typing machine is broken')
//             }
//         }, Math.random()*1000)
//     })
// }
// function typeE(letter) {
//     return new Promise( (resolve, reject) => {
//         setTimeout(()=>{
//             if (letter){
//                 document.write('e')
//                 resolve(true+1)
//             }else {
//                 reject('typing machine is broken')
//             }
//         }, Math.random()*1000)
//     })
// }
// function typeL(letter) {
//     return new Promise( (resolve, reject) => {
//         setTimeout(()=>{
//             if (letter){
//                 document.write('l')
//                 resolve(true+1)
//             }else {
//                 reject('typing machine is broken')
//             }
//         }, Math.random()*1000)
//     })
// }
// function typeO(letter) {
//     return new Promise( (resolve, reject) => {
//         setTimeout(()=>{
//             if (letter){
//                 document.write('o')
//                 resolve(true+1)
//             }else {
//                 reject('typing machine is broken')
//             }
//         }, Math.random()*1000)
//     })
// }
// function typeSpace(letter) {
//     return new Promise( (resolve, reject) => {
//         setTimeout(()=>{
//             if (letter){
//                 document.write(' ')
//                 resolve(true+1)
//             }else {
//                 reject('typing machine is broken')
//             }
//         }, Math.random()*1000)
//     })
// }
// function typeW(letter) {
//     return new Promise( (resolve, reject) => {
//         setTimeout(()=>{
//             if (letter){
//                 document.write('W')
//                 resolve(true+1)
//             }else {
//                 reject('typing machine is broken')
//             }
//         }, Math.random()*1000)
//     })
// }
// function typeR(letter) {
//     return new Promise( (resolve, reject) => {
//         setTimeout(()=>{
//             if (letter){
//                 document.write('r')
//                 resolve(true+1)
//             }else {
//                 reject('typing machine is broken')
//             }
//         }, Math.random()*1000)
//     })
// }
//
// function typeD(letter) {
//     return new Promise( (resolve, reject) => {
//         setTimeout(()=>{
//             if (letter){
//                 document.write('d')
//                 resolve(true+1)
//             }else {
//                 reject('typing machine is broken')
//             }
//         }, Math.random()*1000)
//     })
// }
//
// async function typeMachine() {
//     let letter = await typeH(true);
//     letter = await typeE(letter);
//     letter = await typeL(letter);
//     letter = await typeL(letter);
//     letter = await typeO(letter);
//     letter = await typeSpace(letter);
//     letter = await typeW(letter);
//     letter = await typeO(letter);
//     letter = await typeR(letter);
//     letter = await typeL(letter);
//     letter = await typeD(letter);
//
// }
// typeMachine()