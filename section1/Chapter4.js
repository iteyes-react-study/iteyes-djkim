// 4. 조건문
let a = 3;

if (a > 5) {
    console.log("5 이상");
} else if (a == 5) {
    console.log("5");
} else {
    console.log("5 이하");
}

let country = "ko";

switch (country) {
    case 'ko':
        console.log("한국");
        break;
    case 'cn':
        console.log("중국");
        break;
    case 'jp':
        console.log("일본");
        break;
    default:
        console.log("미 분류");
        break;
}