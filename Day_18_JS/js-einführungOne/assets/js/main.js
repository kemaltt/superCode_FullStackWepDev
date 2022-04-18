// Einzeiliger Kommentar

/*
Mehrzeiliger Kommentar 
*/

// JS Output

console.log("it works");

// Data Types-----------------------------

//Numbers
// console.log(3);

// console.log(3 + 3);
// console.log(3 * 3);
// console.log(100 / 10);
// console.log(100 - 10);
// console.log(3.5);

//String-----------------------------------

// console.log('Hello world');
// console.log('string ist text');
// console.log('30');

//Boolean---------------------------------

// console.log(true);
// console.log(false);

// console.log(4 > 6);

//Variablen-------------------------------

//declaration - aasigment
//  var/ let / const

// var num1 = 33;
// console.log(num1);

// let num2 = 11
// console.log(num2);

// console.log(num1 + num2);

// const num3 = 1000
// console.log(num3);


// String concatination------------------------------------------

// var firstName = 'Bruce' //camelCase
// let lastName = 'Wayne'
// const address = 'Gotham City'

// console.log('Ich bin ' + firstName + ' ' + lastName + ' und wohne in ' + address);


//Übung --------------------------------------------------------------

//Ich bin Spiderman und komme aus NYC

// let hero = 'Spiderman';
// let city = 'NYC';

// console.log('Ich bin ' + hero + ' und komme aus ' + city + '!');

//Bruttowert MacBook

// let mwst = 1.19;
// let macbook = 1000;

// console.log('Mein Macbook hat ' + mwst * macbook + '$' + ' Brutto gekostet');

// Arithmetik Operatoren
// + - * %

// let x = 5
// let y = 3
// let z = 15

// console.log(x + x);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);

// //modulo
// console.log(x % y); //Restwert
// console.log(z % y);

//Increment & Decrement----------------------------------------

// x++; // immer einen oben drauf->Increment

// console.log(x); // output 6

// y--; // immer einen abziehen ->Decrement

// console.log(y); // output 2

// const pi = 3.14;
// geht nicht
// pi =6
// pi++

// JS Conventions------------------------------------------

//camelCase
// let meinHausIstBunt = 5; //most used

// // underscore
// let _meinHausIstBunt = 5;

// // $
// let $meinHausIstBunt = 5;

// // No Go Zone!!!!!!!!!

// let meinhausistbunt = 5;

// // Js ist case sensitive,das sind alles verschiedene Variablen!

// let abc;
// let ABC;
// let aBc;

// JS Output 2-----------------------------------------------

// document.write wird zum Testen benutzt

// document.write('Hallo Kurs');
// document.write('<h2>Hallo Alex!</h2>')
// document.write('<h2 style="color:tomato">Hallo Cipi!</h2>')

// window.alert('Guten Morgen')

//JS Input-------------------------------------

// window.prompt('Bitte gib dein Namen')
// window.confirm('Stimen Sie den Cookies zu ?')

// let windowInput = window.prompt('Bitte gebe deinen Namen ein', 'Hier Namen eintippen')

// console.log(windowInput);
// document.write(windowInput);



//DAY_2=============Comparison===============================================
// ########## Comparision ################
// == compare value
// === compare value & type

console.log(3 == 3); //true
console.log(3 === 3); //true
console.log(3 === 5); //false
console.log(3 == "3"); //true
console.log(3 === "3"); //false
console.log(3 == "three"); //false
// -------
console.log('%c---------', 'color: tomato');
console.log(1 == true); //true
console.log(0 == false); //true
console.log(1 === true); //false
console.log(0 === false); //false
console.log('%c---------', 'color: tomato');
console.log(3 === 4); //false
console.log("5" === 5); //false
console.log("5" === "5"); //true
// -------
console.log('%c---------', 'color: tomato');
// ! -> not
// != not equal
// !== not equal type
console.log(3 != 3); //false
console.log(3 !== 3); //false
console.log(3 !== "3"); //true
console.log(0 != true); //true
console.log(0 != false); //false
console.log(1 !== true); //true
// -------
console.log('%c---------', 'color: tomato');
// greater and less
// < less than
// > greater than
// <= less or equal
// >= greater or equal
console.log(3 > 2); //true
console.log(4 < 6); //true
console.log(4 >= 6); //false
console.log(4 >= 4); //true
console.log('%c---------', 'color: tomato');
console.log("a" == "a"); //true
console.log("A" > "a"); //false
console.log("Z" > "A"); //true
console.log("s" < "K"); //false
console.log("!" > "A"); //false
console.log('%c-strange stuff-', 'color: tomato');
// strange stuff of JS
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

// null ist leer, da ist nichts (null ist ein Zustand)


//innerHTML----------------DOM----------------------

let headline = document.getElementById('headline')

console.log(headline);

headline.innerHTML = 'Mickey'
    // headline.innerHTML = headline.innerHTML + ' Mause'
headline.innerHTML += ' Mause'



// document.getElementById('headline2').innerHTML = 'Ich bin h2'--nicht nutzlich
// document.getElementById('headline2').innerHTML += ' !'


headline.style.color = 'white'
headline.style.backgroundColor = 'blue'

let divContainer = document.getElementById('divContainer')
console.log(divContainer);

divContainer.innerHTML = ' <p>Ich bin ein p tag</p>'
divContainer.style.backgroundColor = 'yellow'

//unterschied document.write & innerHTML -----------------------

//document.write fügt immer zum immer zum Ende des Bodys hinzu
// innerHTML spricht gezielt ein Element an


// Function-----------------------------------------------------
// deklarieren

function addNumber() {
    console.log('Hello from function');
}
//callin/aufrufen
addNumber();

function addNumbers(a, b) {
    console.log(a + b);
}

addNumbers(5, 4)

function inchToCm(a, b) {
    console.log(a * b);
}
inchToCm(10, 2.54)


let headline3 = document.getElementById('headline3')

function multiply(a, b, c) {

    let multiply = a * b * c
    console.log(multiply);
    headline3.innerHTML = multiply
}

multiply(3, 4, 5)