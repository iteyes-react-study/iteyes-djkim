// 10. �ݺ���

for (let i = 0; i < 100; i++) {
    console.log(i);
}

// �迭 ��ȸ
let arr = ["a", "b", "c"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // a b c
}

// ��ü ��ȸ
let person = {
    name: "kim",
    age: 25,
    country: "ko"
}

const personKeys = Object.keys(person); // name age country
const personValues = Object.values(person); // "kim" 25 "ko"

for (let i = 0; i < personValues.length; i++) {
    console.log(personValues[i]);
}