//your JS code here. If required.

setTimeout(function() {
    console.log('Macrotask');
}, 0);

Promise.resolve().then(function() {
    console.log('Microtask');
})


