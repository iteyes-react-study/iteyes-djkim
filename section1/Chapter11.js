// 11. 배열 내장함수

// 11-1. forEach
const arr = [1, 2, 3, 4, 5];

arr.forEach(function (element) {
    console.log(element);
});

// 11-2. map
const new_arr = arr.map((element) => {
    return element * 2;
});

console.log(new_arr); // 2 4 6 8 10

// 11-3. includes
let number = 3;
let notNumber = "3";
console.log(arr.includes(number)); // true
console.log(arr.includes(notNumber)); // false

// 11-4. indexOf
console.log(arr.indexOf(number)); // 2
console.log(arr.indexOf(notNumber)); // -1

// 11-5. findIndex
const new_arr = [
    { color: "red" },
    { color: "blue" },
    { color: "green" }
]

console.log(arr.findIndex(element => { element.color === "green" })); // 2

const idx = arr.findIndex(element => { element.color === "green" });
console.log(new_arr[idx]); // color : green

// 11-6. find
const findValue = arr.find((element) => element.color === "green");
console.log(findValue); // color : green

// 11-7. filter
const new_arr2 = [
    { num:1, color: "red" },
    { num: 2, color: "blue" },
    { num: 3, color: "green" },
    { num: 4, color: "blue" }
]

console.log(new_arr2.filter((element) => element.color === "blue")); // { num: 2, color: "blue" },{ num: 4, color: "blue" }

// 11-8. slice
console.log(new_arr2.slice(0, 2)); //     { num:1, color: "red" },{ num: 2, color: "blue" }

// 11-9. concat
const new_arr3 = [
    { num: 5, color: "red" },
    { num: 6, color: "blue" }
]

console.log(new_arr2.concat(new_arr3));

// 11-10. sort
let chars = ["가", "나", "라", "다"];

chars.sort(); // 원본배열 순서 정렬

let numbers = [2, 1, 10, 20];
numbers.sort(); // [1, 10, 2, 20]

const compare = (a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

number.sort(compare); // [1, 2, 10, 20]


// 11-11. join
const new_arr4 = ["Hello", "world", "new", "arr"];
console.log(new_arr4.join(" ")); // Hello World new arr
