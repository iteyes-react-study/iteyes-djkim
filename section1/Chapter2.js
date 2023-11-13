// 2. 자료형 및 형변환

// 2-1. 숫자
let age = 25; // 정수
let height = 175.5 // 실수

let inf = Infinity; // 무한대
let minufInf = -Infinity // 음의 무한대

let nan = NaN; // 연산 실패

// 2-2. 문자열
let name = "name";

let name2 = `name : ${name}`; // 문자열에 변수 삽입

// 2-3. Boolean
let isSwitchOff = true; // true, false


// 2-4. Null
let a = null;

// 2-5. Undefined
let variable; // == undefined


// 2-6. 형변환
let a = 10;
let b = "2";

console.log(a * b); // 20
console.log(a + b); // 102
console.log(a + parseInt(b)); // 12