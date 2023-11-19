
// 단락회로평가
console.log(false && true); // 조건식 false를 만날경우 true 조건은 필요없음.

// truthy & falsy 를 활용한 단락회로평가

const getName = (person) => {
    const name = person && person.name;
    return name || "객체가 아닙니다.";
};

let person;
const name = getName(person);
console.log(name); // 객체가 아닙니다.