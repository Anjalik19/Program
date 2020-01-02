const windspeed = (temperature,windSpeed) =>
{
    if ((temperature > 50) || (windSpeed > 120 || windSpeed < 3)) {
        console.log("error");
    }
    else {
        let w = 35.74 + 0.6215 * temperature + (0.4275 * temperature - 35.75) * Math.pow(windSpeed, 0.16);
        return w;
    }
}
module.exports = {
    windspeed,

}

