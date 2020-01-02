const day = (month,day,year) => 
{  let y0 = year - (14 - month) / 12;
    let x = y0 + y0 / 4 - y0 / 100 + y0 / 400;
    let m0 = month + 12 * ((14 - month) / 12) - 2;
    let d0 = (day + x + (31 * m0) / 12) % 7;
    return d0;}
module.exports = {
    day,

}