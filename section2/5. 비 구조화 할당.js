

let arr = ["one", "two", "three"];

/* let one = arr[0];
let two = arr[1];
let three = arr[2]; */

let [one, two, three] = arr;

// �迭 ���� �и�
let [one, two, three, four = "four"] = ["one", "two", "three"];


// swap
let a = 10;
let b = 20;

[a, b] = [b, a]
console.log(a, b); // 20 10


let object = {
    one: "one",
    two: "two",
    three: "three"
};

/*let one = object["one"];
let two = object["two"];
let three = object["three"];*/

let { one, two, three } = object; // ��ü�� key�� �������� ��Ī
let { one: oneValue, four = "four" } = object;
