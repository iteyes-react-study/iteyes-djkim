// 9. 배열

let arr = new Array(); // 객체 생성자 방식

let arr = [1, "2", true, null, undefined, {}, function () { }]; // 배열 리터럴 방식

let new_arr = [1, 2, 3, 4, 5];

console.log(new_arr[0]); // 1

// 배열 추가
new_arr.push(6);
console.log(new_arr); // [1,2,3,4,5,6]

// 배열 길이 확인
console.log(new_arr.length);