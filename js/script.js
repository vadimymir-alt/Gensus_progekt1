//
// let a = 10;
// console.log(a); //10
// a = 20;
// console.log(a); // 20
// const b = 15;
// console.log(b);
// Типи
// Boolean
// Let NameFildChecket = true // имя проверено
// let ageFildChecket = false // Вік не перевірено
// Symbol // примитивний тип данних
// спеціальний тип данних
// Undefined // не присвоено значення
// null // нулевое значение
// let a = null
// console.log(a); // null
// let b
// console.log(b); // undefined
// typeof
// console.log(typeof 3); // number
// console.log(typeof 'fgh'); // string
// console.log(typeof true); // boolean
// Числа
// Приведення до числа
// console.log(1 + 3); // 4
// const value = "3";
// console.log(Number(value)); // 3
// Перевірка на число
// console.log(typeof Number(value)); // number
// let a = 31;
// console.log(a);
// const number = Number("51");
//console.log(Number.isNaN(number)); // false
// const string = Number("qweqwe"); //NaN
// console.log(Number.isNaN(string)); // true
// console.log(Number.parseInt("5ddd")); // 5
// console.log(Number.parseInt("5ddd678")); // 5
// console.log(Number.parseInt("11.ddd")); // 11
// console.log(Number.parseInt("ddd")); // NaN
// Парсить у строки число з крвпкою
// console.log(Number.parseFloat("5ddd")); // 5
// console.log(Number.parseFloat("55ddd123")); // 55
// console.log(Number.parseFloat("55.67ddd79")); // 55.67
// -_______________Складання з крапкою_____________
// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3
// console.log(Math.floor(1.7)); // 1
// console.log(Math.ceil(1.2)); // 2
// console.log(Math.round(1.2)); // 1
// console.log(Math.floor(1.7)); // 2
// console.log(Math.max(10, 20, 50, .7)); // 50
// console.log(Math.min(1.5, 1.7, 2, 3)); // 1.5
// __________Повертае в степінь______________
// console.log(Math.pow(2, 4)); // 16
// Повертае випадкове число в диапазоне (0, 1)
// console.log(Math.random()); // получилось 0.9791060810080617
// console.log(Math.random() * (10 - 1) + 1); // 6.373966305777615
// String (строчка)
// let str = "Привіт";
// let phrase = `так можна вставляти ${str}`;
// let name = "Оля";
// let hello = `Привіт ${name}`;
//console.log(hello); // Привіт Оля
// const message = "javaScript" + " is" + " awesome";
// console.log(message); // javaScript is awesome
// ____________________________________________
// ______________Конкатенация__________________
// let result;
// result = 5 + "5";
// console.log(result); // '55'
// console.log(typeof result); // string
// result = 5 + "5" + 5;
// console.log(typeof result); // string
// console.log(result); // '555'
// result = 5 + 5 + "5";
// console.log(result); // 105
// console.log(typeof result); // string
// const message = "Welcome to Lviv";
// console.log(message.length); // 15
// console.log(message.toLowerCase()); // welcome to lviv
//
// console.log(message.toUpperCase()); // WELCOME TO LVIV
// console.log(message); // Welcome to Lviv
// console.log(message.index0f("hello"));
// console.log(message.length); // 15
//  ----всі методи строк чутліви до регістру
// console.log(message.includes("welcome")); // false
// console.log(message.includes("Welcome")); // true
// _________________________________________
// BigInt  Велики числа
// _________________________________________
//
// ----------Обекти----------
//
// let user = {// Об'ект
 // name: "Іван", // за ключем "name" зберегается значення "Іван"
 // age: 30, // за ключем "age" зберегается значення "30"
  //work: true,
    //"likes birds": true, // імя властивсей з декіл слів повинн};
 //};
 //console.log(user);
// отримаємо значення властивістей обекта
// console.log(user.name); // Іван
// console.log(user.age);// 30
// delete user.age;
// console.log(user);
// ___________________________________________
//  Перебор властивостей "for... in"
// -----------------------------------------
// for (let key in user) {
    // ключи
  //  console.log(key); // name/ age/ work
    // значення ключів
   // console.log(user[key]); // Іван, 30, true
//}
//   Впорядкування властивостей обекта
// _________________________________________
// let codes = {
  //  49: "нім",
    //41: "Швейц",
   // 44: "Англ",
   // 1: "США",
//};
//for (let code in codes) {
  //  console.log(code); // 1,41,44,49
//}
// for (let prop in user) {
  //  console.log(prop);
// name, age,work,likes birds
// не цілочисельни властив перераховані в порядку створенн
// ------------------------------------------
// Домашня робота
//  1
// let name = "Іван";
// let citi = "Київ";
// citi = name;
// console.log(citi); // Іван
// 2
// let name = "Olga";
// console.log(`привіт ${1}`); //  привіт 1
// console.log(`привіт ${"name"}`);// привіт name
// console.log(`привіт ${name}`); // привіт Olga
// 3
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// console.log(Number.parseFloat("5")); // 5
// console.log(Number.parseFloat("13cvb")); // 13
// console.log(Number.parseFloat("12.9sxdcfvg"));// 12.9
//  *** 4 ***
// console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3
// **** 5 *****
// console.log(Math.max(20, 10, 50, 40)); // 50
// ***** 6 ****
// console.log(Math.random() * (4 - 2) + 2); // 3.630859095823263
// **** 7 *****
// const message = "Welcome to Bahamas!";
// console.log(message.length); // 19
// **** 8 ****
// console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!
// **** 9 ****
// let user = {};
  // user.name = "Dmytro",
   // user.age = "67",
   // user.citi = "Lviv",
// console.log(user);// {name: 'Dmytro', age: '67', citi: 'Lviv'}
// delete user.citi;
// console.log(user); // {name: 'Dmytro', age: '67'}
// user["like flowers"] = true;
// console.log(user);
// ***** 10 *****
// for (let key in user)
// {
 //   console.log(key);// name, age, like flowers
   // console.log(user[key]);// Dmytro, 67, true
 //} 
    // Урок 2
   // ********************
    //  Виведення данних
//______________________________________
// const message = " Javascript is awesome";
// alert(message);
// console.log(message);
// ______________________________
// Отримання 
// ************** 
// confirm, prompt

// const isConfirm = confirm("Plis confirm reservation");
 // console.log(isConfirm);
// const test = confirm("Yes or No")
// console.log(test);
// const userName = prompt("Pleas enter Name:");
// console.log(userName);

// Перетворення типів
// const value = prompt("Pleas enter Namber:");
// console.log(typeof value); // string
// console.log(value); // 5
// let value;
// value = false;
// console.log(typeof value);// boolean
// const newValue = String(value);
// console.log(typeof newValue); // string
// value = "123";
// console.log(typeof value);// string
// const newValue = Number(value);
// console.log(typeof newValue);// number
// console.log(Boolean("PRYVUT"));// true
// console.log(Boolean(""));// false
// console.log(Boolean(2));// true
// console.log(Boolean());// false
//******************************
// Оператори ********************* */

// console.log(2 + 2);// 4
// console.log(5 - 2);//3
// console.log(5 * 2);// 10
// console.log(6 / 3); // 2
// console.log(8 % 3); // 2 залишок від ділення
// console.log(5 ** 2); // 25 степень
// console.log(5 > 2);// true
// console.log(5 < 2);// false
// let value = "0";
// console.log(value === 0);// false
// let value = 0;
// console.log(value === 0);// true
// console.log(5 !== 5);// false
// or(||) -and(&&) -not(!) 
// console.log(5 == 5 && 6 > 3);// true