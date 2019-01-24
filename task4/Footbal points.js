const result = ["3:1", "2:2", "0:1", "4:0", "1:0"];
let champion = result.reduce((sum, current) => {
    let x = Number(current[0]),
        y = Number(current[2]);
    if (x > y) return sum + 3;
    if (x === y) return sum + 1;
    if (x < y) return sum;
}, 0);
console.log(champion);
const str = "ad dfga sdfsdf hdfh sdf hfhdhf";
console.log(str.replace(/\s/g, ""));
