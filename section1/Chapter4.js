// 4. ���ǹ�
let a = 3;

if (a > 5) {
    console.log("5 �̻�");
} else if (a == 5) {
    console.log("5");
} else {
    console.log("5 ����");
}

let country = "ko";

switch (country) {
    case 'ko':
        console.log("�ѱ�");
        break;
    case 'cn':
        console.log("�߱�");
        break;
    case 'jp':
        console.log("�Ϻ�");
        break;
    default:
        console.log("�� �з�");
        break;
}