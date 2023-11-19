function tastA() { };
function tastB() { };
function tastC() { };

// 동기 방식
// 수행 시간 : tastA = 0.3초 -> tastB = 0.5초 -> tastC = 0.2초 => 1초
// 이전 작업이 진행 중 일 때는 다음 작업을 수행하지 않고 기다림
// 먼저 작성된 코드를 다 실행 한 후, 뒤에 작성된 코드를 실행
// 단점 : 하나의 작업이 너무 오래 걸리게 될 시, 하나의 작업이 종료되기 전까지 다음 작업을 수행하지 않기 때문에
//        전반적인 흐름이 느려진다.

// 비동기 방식
// 자바스크립트의 경우 싱글 쓰레드로 동작하기 때문에 멀티 쓰레드를 사용할 수 없음.
// 먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 바로 실행하는 것.
// 각 코드의 작업결과를 확인하기 위해 콜백 함수를 사용.


function firstTask(a, b, callbackFn) {
    setTimeout(() => {
        const res = a + b;
        callbackFn(res);
    }, 3000);
}

function secondTask(a, callbackFn) {
    setTimeout(() => {
        const res = a * 2;
        callbackFn(res);
    }, 2000);
}

function thirdTask(a, callbackFn) {
    setTimeout(() => {
        const res = a * -1;
        callbackFn(res);
    }, 1000);
}

firstTask(3, 4, (res) => {
    console.log("first : ", res);
});

secondTask(3, (res) => {
    console.log("second : ", res);
});

thirdTask(4, (res) => {
    console.log("third : ", res);
});

console.log("task end");

// task end
// third : -4
// second : 6
// first : 7


firstTask(3, 4, (a_res) => {
    console.log("first : ", a_res);
    secondTask(a_res, (b_res) => {
        console.log("second : ", b_res);
        thirdTask(b_res, (c_res) => {
            console.log("third : ", c_res);
        });
    });
});

console.log("task end");

// task end
// first : 7
// second : 14
// third : -14