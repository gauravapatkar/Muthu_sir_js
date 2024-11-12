//?DATE
let x = new Date();

console.log(x);

let year = x.getFullYear();
console.log(year);

console.log(x.getMonth());
console.log(x.getDay());
console.log(x.getDate());
console.log(x.getHours());
console.log(x.getMinutes());
console.log(x.getSeconds());
console.log(x.getMilliseconds());

let y = new Date();
// y.setFullYear(2000, 11, 20);
y.setFullYear(1999);
y.setMonth(7);
y.setDate(22);
y.setHours(13);
y.setMinutes(34);
y.setMilliseconds(13);
console.log(y);

//? math:
console.log(Math.round(5.5));
console.log(Math.round(4.4));
console.log(Math.round(-1.5));
console.log(Math.round(-1.78));

console.log(Math.ceil(3.2));
console.log(Math.ceil(-3.8));
console.log(Math.ceil(-5.5));

console.log(Math.floor(-3.9));
console.log(Math.floor(8.9));

console.log(Math.trunc(-10.6));
console.log(Math.trunc(8.75));

let random = Math.random();
console.log(random);

let r = Math.random() * (9999 - 1000) + 1000;
let otp = Math.trunc(r);
console.log(otp);

console.log(Math.sqrt(100));
console.log(Math.sqrt(69));
console.log(Math.cbrt(27));
console.log(Math.cbrt(125));

console.log(Math.max(30, 40, 20, 50, 70));
console.log(Math.max()); //! -infinity
console.log(Math.min(90, 45, 85, 23, 79, 43));
console.log(Math.min()); //! infinity

let numar = [30, 50, 80, 40];
console.log(Math.max(...numar));

//? isNAN

console.log(Number(false));
console.log(Number(""));
console.log(Number("100"));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number([10, 20, 30]));

console.log(isNaN(true));
console.log(isNaN("100"));
console.log(isNaN("str"));

console.log(Number.isNaN(true));
console.log(Number.isNaN("str"));
console.log(Number.isNaN(NaN));
