// 5. 함수

let count = 1; // 전역변수

function getArea(width, height) { // 함수 선언식
    let area = width * height; // 지역변수
    return area;
}

let areaA = getArea(count, 100);
console.log(areaA);

