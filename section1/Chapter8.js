// 8. 객체

let new_person = new Object(); // 객체 생성자 방식

let person = { // 객체 리터럴 방식
    age: 25,
    name: "kim"
};

console.log(person.name); // kim
console.log(person["age"]); // 25

console.log(getPropertyValue("name")); // kim

function getPropertyValue(key) {
    return person[key];
}

// property 추가
person.location = "ko"; 
person["gender"] = "male";

// property 수정
person.name = "lee";
person["age"] = 30;

// property 삭제
delete person.age; // 메모리 값은 삭제되지 않음
person.name = null;

// 메서드 추가
person.say = function () {
    console.log(`Hello I am ${this["name"]}`);
}

person.say();
person["say"];

person.hobby; // undefined
console.log(`name : ${"name" in person}`); // property 값 확인
console.log(`hobby : ${"hobby" in person}`);