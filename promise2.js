const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 1 resolved`);
    }, 1000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved`);
    }, 2000)
});

// promise1.then(res => console.log(res));
// promise2.then(res => console.log(res));

// Promise All
// Promise.all([promise1, promise2])
//     .then((res) => {
//         console.log(res);
//     })

//Promise Reach

Promise.race([promise1, promise2])
    .then((res) => {
        console.log(res);
    })
