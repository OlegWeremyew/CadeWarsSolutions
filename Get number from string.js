/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
*/
function getNumberFromString(s) {
    let num = s.replace(/[^+\d]/g, '');
    return Number(num);
}

/*
/[^+\d]/g
[...] - символьный класс
^ - инверсия, будем заменять "всё кроме"
+ - символ +, можно заэкранировать: \+, но внутри символьного класса это не обязательно
\d - цифра
/.../g - флаг global для replace - менять все вхождения
let str = 'call: +7(123) 456-78-90';

console.log(str.replace(/[^+\d]/g, ''));
*/