let fact = function (num) {
    console.log("value for number is:",num);
    return new promise(function (resolve, reject) {
        if (x < 0) {
            reject("x should be greater then 0")
        } else {
            resolve(num)
        }
    })
}
exports.fact = fact;