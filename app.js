(async function () {
    let request = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/comments'),
        fetch('https://jsonplaceholder.typicode.com/comments'),
        fetch('https://jsonplaceholder.typicode.com/comments'),
        fetch('https://jsonplaceholder.typicode.com/comments'),
    ]);
    let arr = {};
    let freeObj = [];
    for (let i = 0; i < 4; i++) {
        arr[i] = await request[i].json();
        for (let j = 0; j < 500; j++) {
            freeObj[j] = arr[i][j];
        }
    }
    console.log(freeObj);

})();



