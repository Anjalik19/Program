const power = (number) => 
    {
        let i = 0;
        let power = 1;
        console.log("power of 2^" + number);
        while (i <= number) {
            console.log("2^ " + i + "=" + power);
            power = power * 2;
            i++;
        }}
module.exports = {
    power,

}