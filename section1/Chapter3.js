// 3. ������

let a = 10;

let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


// ���տ�����
a += 10; // a == 20;

// ����������
console.log(a++); // 10
console.log(a); // 11
console.log(++a); // 12

// ��������
console.log(!true); // false
console.log(true && true); // true
console.log(true || false); // true

// �񱳿�����
let compareA = 1 == "1"; // true
compareA = 1 === "1"; // false

let compareB = 1 <= 2; // true

// typeof
let typeVar = "1";
console.log(typeof typeVar); // string

// null ���տ�����
let nullVar;

nullVar = a ?? 10; // 10