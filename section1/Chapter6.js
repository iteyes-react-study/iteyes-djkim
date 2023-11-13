// 6. 함수 표현식 및 화살표 함수

console.log(helloFunc()); // 호이스팅

function helloFunc() { // 함수 선언식
    return "HELLO";
}

let hello = function () { // 함수 표현식
    return "HELLO";
}

const helloText = hello();
console.log(helloText);


// ** 호이스팅(hoisting) : 인터프리터가 코드를 실행하기 전에 함수, 변수, 클래스 또는 임포트(import)의 선언문을 해당 범위의 맨 위로 이동.
//                         함수 표현식은 호이스팅 대상이 아님.

// 화살표 함수
let helloA = () => "HELLO"; // 화살표 함수 또한 호이스팅 대상이 아님.
console.log(helloA());