

function isKoreanFood(food) {
    if (['�Ұ��', '������', '�����'].includes(food)) {
        return true;
    } else {
        return false;
    }
}

const food1 = '�����';
console.log(isKoreanFood(food1)); // true
const food2 = '�Ľ�Ÿ';
console.log(isKoreanFood(food2)); // false



const meal = {
    �ѽ�: "�Ұ��",
    �߽�: "�ຸ��",
    �Ͻ�: "�ʹ�",
    ���: "������ũ"
}
const getMeal = (mealType) => {
    return meal[mealType] || "����";
}

console.log(getMeal("�߽�")); // �ຸ��
console.log(getMeal()); // ����