function fetchData(inCallback){
    setTimeout(()=>{
        inCallback('peanut butter')
    },2000)
}

// fetch async:
test('the data is peanut butter', done => {
    function callback(data) {
        expect(data).toBe('peanut butter');
        done();
    }
    fetchData(callback);
});