// 7. �ݹ� �Լ�

function checkMood(mood, goodCallback, badCallback) {
    if (mood === 'good') {
        goodCallback();
    } else {
        badCallback();
    }
}

function cry() {
    console.log("action :: cry");
}

function sing() {
    console.log("action :: sing");
}

function dance() {
    console.log("action :: dance");
}

checkMood("good", sing, cry);