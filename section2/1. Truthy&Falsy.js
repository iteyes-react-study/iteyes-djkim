
let a = "";

if (a) { // ���ǽ� : �� ���ڿ�, 0, null, NaN, undefined �Է� ��, false ���
    console.log("true");
} else {
    console.log("false");
}

const getName = (person) => {
    if (!person) { // �Է°� ����
        return "��ü�� �ƴմϴ�."
    }
    return person.name;
}

let person = { name: "Kim" };
const name = getName(person);

let notPerson;
const notName = getName(notPerson); // ��ü�� �ƴմϴ�.