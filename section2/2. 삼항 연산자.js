

let a = 3;

// ���ǽ� ? true return : false return
a >= 0 ? console.log("���") : console.log("����");

// ==
if (a >= 0) {
    console.log("���");
} else {
    console.log("����");
}


let nullArr = [];

const arrStatus =  a.length === 0 ? "�� �迭" : "�� �迭�� �ƴմϴ�.";

console.log(arrStatus); // �� �迭


// truthy falsy Ȱ��
let undefinedValue;

const result = a ? true : false;
console.log(result); // false


// ���� ���
// 90 �̻� : A
// 50 �̻� : B
// �� �� �ƴ� : F

let score = 100;

score >= 90 ? console.log("A") : score >= 50 ? console.log("B") : console.log("F");

if (score >= 90) { // ��ø ���׿������� ��� if ���ǹ��� �������� ����
    console.log("A")
} else if (score >= 50) {
    console.log("B")
} else {
    console.log("F")
}