const harmonic = (value) =>{ 
    let h = 1;
    for (let i = 2; i <= value; i++) {
        h = h + 1 / i;
    }
    return h;
}
module.exports = {
    harmonic,

}