const result = (principal,Rate,year) => {
let r = Rate / (12 * 100);
let n = 12 * year;
let payment = (principal * r) / (1 - Math.pow(1 + r, -n))
return payment;
}
module.exports = {
    result,

}