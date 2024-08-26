(async function () {
    let request = await Promise.allSettled([
        fetch('https://jsonplaceholder.typicode.com/comments'),
        fetch('https://jsonplaceholder.typicode.com/comments'),
        fetch('https://jsonplaceholder.typicode.com/comments'),
        fetch('https://jsonplaceholder.typicode.com/comments'),
    ]);
    console.log(request);

    const res = await Promise.all(request.map(({ status, value }) => {
        if (status === 'fulfilled') {
            return value?.json();
        }  
    }));
    console.log(res.flat(1));

})();



