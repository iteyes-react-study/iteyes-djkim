// 9. �迭

let arr = new Array(); // ��ü ������ ���

let arr = [1, "2", true, null, undefined, {}, function () { }]; // �迭 ���ͷ� ���

let new_arr = [1, 2, 3, 4, 5];

console.log(new_arr[0]); // 1

// �迭 �߰�
new_arr.push(6);
console.log(new_arr); // [1,2,3,4,5,6]

// �迭 ���� Ȯ��
console.log(new_arr.length);