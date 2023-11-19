function tastA() { };
function tastB() { };
function tastC() { };

// ���� ���
// ���� �ð� : tastA = 0.3�� -> tastB = 0.5�� -> tastC = 0.2�� => 1��
// ���� �۾��� ���� �� �� ���� ���� �۾��� �������� �ʰ� ��ٸ�
// ���� �ۼ��� �ڵ带 �� ���� �� ��, �ڿ� �ۼ��� �ڵ带 ����
// ���� : �ϳ��� �۾��� �ʹ� ���� �ɸ��� �� ��, �ϳ��� �۾��� ����Ǳ� ������ ���� �۾��� �������� �ʱ� ������
//        �������� �帧�� ��������.

// �񵿱� ���
// �ڹٽ�ũ��Ʈ�� ��� �̱� ������� �����ϱ� ������ ��Ƽ �����带 ����� �� ����.
// ���� �ۼ��� �ڵ��� ����� ��ٸ��� �ʰ� ���� �ڵ带 �ٷ� �����ϴ� ��.
// �� �ڵ��� �۾������ Ȯ���ϱ� ���� �ݹ� �Լ��� ���.


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