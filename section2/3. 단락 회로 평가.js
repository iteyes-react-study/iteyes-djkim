
// �ܶ�ȸ����
console.log(false && true); // ���ǽ� false�� ������� true ������ �ʿ����.

// truthy & falsy �� Ȱ���� �ܶ�ȸ����

const getName = (person) => {
    const name = person && person.name;
    return name || "��ü�� �ƴմϴ�.";
};

let person;
const name = getName(person);
console.log(name); // ��ü�� �ƴմϴ�.