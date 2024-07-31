// LESSON 2

//     #1 Выведите в консоль номер месяца в котором вы родились. Изучите чем отличается вывод числа и строки.

// ОТЛИЧИЕ: мы сожем складывать, делить, умножать (и т.д) числа, а строки можно только соединять 

let dateString = "1"
console.log(dateString); 

// ИЛИ

let dateNumber = 1 
console.log(dateNumber);

//     #2 Выведите в консоль строку: “ 'Добро '+'пожаловать '+' на курс' '+' ' Ваше имя' ”

console.log('Добро пожаловать' + ' на курс' + ' Тахмина')


//     #3 С помощью “Alert” выведите день месяц и год сегодняшний, после теста, закомментируйте код, чтобы он не мешал дальше выполнять практику

//alert('31.07.2024');


//     #4 Создайте на странице div с id=one. С помощью document.getElementById запишите в данный элемент текст 'Hello World'

document.getElementById('one').innerHTML = 'Hello World'




//    #5 Выведите все типы данных как было сделано на уроке в консоль.

// var, let, const :
console.log(b);
var b = 45;
b = 39;

let num = 545;
console.log(num);

const pi = 3.14;
console.log(pi);

// STRING
let str1 = ' money';
let str2 = ` I love ${str1}`;                // output в консоле: I love money
let str3 = ` My wallet has  ${9 + 6 * 1000}` // output в консоле: My wallet has 6009

console.log(str1);
console.log(str2);
console.log(str3);

// NUMBER 
let y = 989;
console.log(y);

// BIGINT
let number = 2433535446565555657n;
console.log(number);

// NaN 
console.log('number'/898);
console.log(NaN **0); // исключение


// UNDEFINED
let a;
console.log(a);

// BOOLEAN
let t = -5;
if (t>0) {
t = true;
}
if (t<0) {
    t= false;
}
console.log(t);

// NULL
let n = null;
console.log(n);

// INFINITY
let division = 5/0;
console.log(division);

//ОПЕРАТОР typeof
console.log(typeof str1);
console.log(typeof y);
console.log(typeof 'number'/898);
console.log(typeof division); // ??? почему выводит number а не infinity в этом случае ???
//??? а если написать сonsole.log(typeof 5/0) выходит NaN, почему ???
console.log(typeof a);
console.log(typeof t);
console.log(typeof n); // вывод: object





// --- < КОНСПЕКТ УРОКА 2 > ---

//1 вариант 
//
// console.log(a); - мы можем вызвать раньше чем мы объявили
// var a = 10 // устаревший вариант
// a = 20

// вариант 2 - современный вариант создания переменной
// let timur = 293
// console.log(timur);

// 3 вариант
// const c = 20
// c = 30
// console.log(c);




// * ТИП ДАННЫХ number *

// NaN - Not a Number - выходит когда у нас вычислительная ошибка
// console.log(NaN **0); - исключение, в этом случае выйдет 1 ( нулевая степень любого числа равно 1)


//* infinity * - выходит когда у нас indeterminacy 
// example:
// console.log(189 / 0);



/* 
 ТИП ДАННЫХ bigint - когда нам нужно вывести оооочень большое значение 
 example: 
 console.log(660587056777585754767n)
*/

// * ТИП ДАННЫХ string * :
// `` - косые ковычки имеют больше функционала
// example:
/*

let str1 = 'money';
let str2 = ` love ${str1}`;       // output в консоле: love money
let str3 = `Anime ${2 + 2 * 100}` // output в консоле: Anime 202

console.log(str1);
console.log(str2);
console.log(str3);'

*/



// * БУЛЕВОЙ ТИП ДАННЫХ *
// true и false
// console.log(20 < 202);



// * ТИП null *
// console.log(null);


// * ТИП undefined * - значение не определено
// let a;
// console.log(a);



// * ОПЕРАТОР typeof * - чтобы узнать тип переменной 

// typeof x    <-   оба варианта 
// typeof(x)   <-   допустимы 

// console.log(typeof 10);
// console.log(typeof 'cat');
// console.log(typeof 10n);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);

