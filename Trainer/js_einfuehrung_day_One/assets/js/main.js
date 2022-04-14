// Einzeiliger Kommentar

/* 
======
Mehrzeiliger Kommentar
======
*/

// JS Output

console.log("it works");

// Data Types
// Numbers
// console.log(3);
// console.log(3 + 3);
// console.log(3 * 3);
// console.log(100 / 10);
// console.log(100 - 10);
// console.log(3.5);

// String
// console.log("string ist text");
// console.log('Hallo Kurs!');
// console.log('30');

// Boolean
// console.log(true);
// console.log(false);

// Variablen
// declaration / assigment
// var / let / const

var num1 = 33;
console.log(num1);

let num2 = 11;
console.log(num2);
console.log(num1 + num2);

const num3 = 1000;
console.log(num3);

// string concatination

var firstName = 'Bruce'; //camelCase
let lastName = ' Wayne';
const address = 'Gotham City';

console.log('Ich bin ' + firstName + lastName + ' und wohne in ' + address);

// Übung

// Ich bin Spiderman und komme aus NYC!

let hero = "Spiderman";
let city = "NYC";

console.log("Ich bin " + hero + " und wohne in " + city + "!");

// Bruttowert MacBook

let mwst = 1.19;
let macbook = 1000;

// Mein Macbook hat $$$$ Brutto gekostet

console.log("Mein MacBook hat " + macbook * mwst + "€" + " gekostet");

// Arithmetik Operatoren
// + - * / %

let x = 5;
let y = 3;
let z = 15;

console.log(x + x);
console.log(x - y);
console.log(x * y);
console.log(x / y);
// modulo
console.log(x % y); //Restwert
console.log(z % y); //Restwert

// Increment & Decrement

x++; //immer einen oben drauf -> Increment
console.log(x);

y--; //immer einen abziehen -> Decrement
console.log(y);

const pi = 3.14;
// geht nicht
// pi = 6;
// pi++

// JS Conventions

// camelCase
let meinHausIstBunt = 5; // most used

// underscore
let _meinHausIstBunt = 5;

// $
let $meinHausIstBunt = 5; // bitte diese nicht nutzen

// NO GO ZONE!!!!!!!
let meinhausistbunt = 5;
//let 1meinhausistbunt = 5;

// JS ist case sensitive, das sind alles verschiedene Variablen!

let abc;
let ABC;
let aBc;

// JS Output 2

// document.write wird zum testen benutzt
document.write('Hallo Kurs!');
document.write('<h2>Hallo Alex!</h2>');
document.write('<h2 style="color: tomato">Hallo Cipi!</h2>');
// window.alert("Guten Morgen!");

// JS Input

// window.prompt("Bitte gib deinen Namen an!");
let confirm = window.confirm("Stimmen Sie den Cookies zu ?");
console.log(confirm);

// let windowInput = window.prompt("Bitte gebe deinen Namen ein", "Hier Namen eintippen.");
// console.log(windowInput);
// document.write(windowInput);