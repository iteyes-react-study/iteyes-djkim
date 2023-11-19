// 비동기 작업 상태
// 1. 대기상태(Pending)
// 2. 성공(Fulfilled)
// 3. 실패(Rejected)

function isPositive(number, resolve, reject) {
    setTimeout(() => {
        if (typeof number === 'number') {
            // 성공 -> resolve
            resolve(number >= 0 ? "양수" : "음수");
        } else {
            // 실패 -> reject
            reject("주어진 값이 숫자형이 아닙니다.");
        }
    }, 2000);
}

isPositive(10, (res) => {
    console.log("Fulfilled : ", res);
    },
    (err) => {
        console.log("Rejected : ", err);
    }
);

function isPositiveP(number) {
    const executor = (resolve, reject) => {
        setTimeout(() => {
            if (typeof number === 'number') {
                // 성공 -> resolve
                console.log(number);
                resolve(number >= 0 ? "양수" : "음수");
            } else {
                // 실패 -> reject
                reject("주어진 값이 숫자형이 아닙니다.");
            }
        }, 2000);
    };

    const asyncTask = new Promise(executor);
    return asyncTask
}

const res = isPositiveP(101);

res.then((res) => { console.log("success : ", res) }).catch((err) => { console.log("fail : ", err) });


// 콜백 지옥 탈출
function firstTask(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b;
            resolve(res);
        }, 3000);
    });
}

function secondTask(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * 2;
            resolve(res);
        }, 2000);
    });
}

function thirdTask(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * -1;
            resolve(res);
        }, 1000);
    })
}


/*firstTask(3, 4, (a_res) => {
    console.log("first : ", a_res);
    secondTask(a_res, (b_res) => {
        console.log("second : ", b_res);
        thirdTask(b_res, (c_res) => {
            console.log("third : ", c_res);
        });
    });
});*/

firstTask(5, 1).then((a_res) => {
    console.log("firse : ", a_res);
    return secondTask(a_res);
}).then((b_res) => {
    console.log("second : ", b_res);
    return thirdTask(b_res);
}).then((c_res) => {
    console.log("third : ", c_res);
});