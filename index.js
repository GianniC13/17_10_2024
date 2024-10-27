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