

let a = 3;

// 조건식 ? true return : false return
a >= 0 ? console.log("양수") : console.log("음수");

// ==
if (a >= 0) {
    console.log("양수");
} else {
    console.log("음수");
}


let nullArr = [];

const arrStatus =  a.length === 0 ? "빈 배열" : "빈 배열이 아닙니다.";

console.log(arrStatus); // 빈 배열


// truthy falsy 활용
let undefinedValue;

const result = a ? true : false;
console.log(result); // false


// 학점 계산
// 90 이상 : A
// 50 이상 : B
// 둘 다 아님 : F

let score = 100;

score >= 90 ? console.log("A") : score >= 50 ? console.log("B") : console.log("F");

if (score >= 90) { // 중첩 삼항연산자의 경우 if 조건문이 가독성이 좋음
    console.log("A")
} else if (score >= 50) {
    console.log("B")
} else {
    console.log("F")
}