// 6. �Լ� ǥ���� �� ȭ��ǥ �Լ�

console.log(helloFunc()); // ȣ�̽���

function helloFunc() { // �Լ� �����
    return "HELLO";
}

let hello = function () { // �Լ� ǥ����
    return "HELLO";
}

const helloText = hello();
console.log(helloText);


// ** ȣ�̽���(hoisting) : ���������Ͱ� �ڵ带 �����ϱ� ���� �Լ�, ����, Ŭ���� �Ǵ� ����Ʈ(import)�� ������ �ش� ������ �� ���� �̵�.
//                         �Լ� ǥ������ ȣ�̽��� ����� �ƴ�.

// ȭ��ǥ �Լ�
let helloA = () => "HELLO"; // ȭ��ǥ �Լ� ���� ȣ�̽��� ����� �ƴ�.
console.log(helloA());