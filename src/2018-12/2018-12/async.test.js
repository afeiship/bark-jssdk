function fetchData(inCallback) {
    setTimeout(() => {
        inCallback('peanut butter')
    }, 2000)
}

function fetchWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter')
        }, 1000)
    })
}

// fetch async:
test('the data is peanut butter', done => {
    function callback(data) {
        expect(data).toBe('peanut butter');
        done();
    }
    fetchData(callback);
});

test('testa data is peanut butter with promise',()=>{
    fetchWithPromise().then(response=>{
        expect(response).toBe('peanut butter');
    });
});