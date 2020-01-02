const equation = (a, b,c) =>
{
    let root1 = 0, root2 = 0;
let delta = Math.sqrt((b * b) - (4 * a * c));
root1 = (-b + Math.sqrt(delta)) / (2 * a);
root2 = (-b - Math.sqrt(delta)) / (2 * a);
let result = [root1, root2];
return result;
}
module.exports = {
    equation,

}

