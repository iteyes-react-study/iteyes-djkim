
let a = "";

if (a) { // 조건식 : 빈 문자열, 0, null, NaN, undefined 입력 시, false 출력
    console.log("true");
} else {
    console.log("false");
}

const getName = (person) => {
    if (!person) { // 입력값 검증
        return "객체가 아닙니다."
    }
    return person.name;
}

let person = { name: "Kim" };
const name = getName(person);

let notPerson;
const notName = getName(notPerson); // 객체가 아닙니다.