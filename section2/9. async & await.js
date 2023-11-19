// async
function hello() {
    return "HELLO";
}

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function helloAsync() {
    return delay(3000).then(() => {
        return "HELLO ASYNC";
    });
}

console.log(hello); // HELLO
console.log(helloAsync); // Promise{}

// await
function main() {
    const res = await helloAsync();
    console.log(res);
}

helloAsync().then((res) => {
    console.log(res);
}); // HELLO ASYNC


