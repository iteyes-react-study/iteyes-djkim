// 8. ��ü

let new_person = new Object(); // ��ü ������ ���

let person = { // ��ü ���ͷ� ���
    age: 25,
    name: "kim"
};

console.log(person.name); // kim
console.log(person["age"]); // 25

console.log(getPropertyValue("name")); // kim

function getPropertyValue(key) {
    return person[key];
}

// property �߰�
person.location = "ko"; 
person["gender"] = "male";

// property ����
person.name = "lee";
person["age"] = 30;

// property ����
delete person.age; // �޸� ���� �������� ����
person.name = null;

// �޼��� �߰�
person.say = function () {
    console.log(`Hello I am ${this["name"]}`);
}

person.say();
person["say"];

person.hobby; // undefined
console.log(`name : ${"name" in person}`); // property �� Ȯ��
console.log(`hobby : ${"hobby" in person}`);