// 3. 연산자

let a = 10;

let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


// 복합연산자
a += 10; // a == 20;

// 증감연산자
console.log(a++); // 10
console.log(a); // 11
console.log(++a); // 12

// 논리연산자
console.log(!true); // false
console.log(true && true); // true
console.log(true || false); // true

// 비교연산자
let compareA = 1 == "1"; // true
compareA = 1 === "1"; // false

let compareB = 1 <= 2; // true

// typeof
let typeVar = "1";
console.log(typeof typeVar); // string

// null 병합연산자
let nullVar;

nullVar = a ?? 10; // 10