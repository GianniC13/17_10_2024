// JS - Promisiuni (Promise)
function executor(resolve, reject) {
    setTimeout(() => {
        const isRejected = false;

        if (isRejected) {

            reject('rejected');
        } else {
            resolve('resolved');
        }
    }, 5000);
}

const promise = new Promise(executor);
promise
    .then((value) => console.log('fulfilled with value: ', value))
    .catch((reason) => console.log('rejected with reason: ', reason))
    .finally(() => console.log('finally executed'));
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// async/await
async function getUserInfo() {
    for (let i = 0; i < 1000; i++) {
        for (let j = i; j < 1000; j++){
            continue;
        }
    }

    // simulam eroare in timpul executiei:
    throw new Error('Promise rejected');
    return {email: 'test@test.com'};
}

const userInfo = getUserInfo();
userInfo.then(info => console.log('userInfo in then: ', info));
console.log('prom: ', userInfo);
console.log('operations after calling async function');

async function main() {
    console.log('operations before calling async function');
    let ui = null;
    try {
        ui = await getUserInfo();
    } catch(e) {
        console.log('rejected with: ', e);
    } finally {
        console.log('new finally executed');
    }

    console.log('ui: ', ui);
    console.log('operations after calling the async function');
}

main();