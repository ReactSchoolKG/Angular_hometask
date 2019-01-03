//Football points 
const results = ["3:1", "2:2", "0:1", "1:3", "4:2", "1:1"];

const points = (arr) => arr.reduce(( output, current ) => {
        const arraySplit = current.split(':');
        return output += arraySplit[0] > arraySplit[1] ? 3 
        : arraySplit[0] === arraySplit[1] ? 1
        : 0;
    }, 0);

console.log(points(results));

//Remove string spaces
const str = "I hope that I understood the task correctly.";

const removeStringSpaces = (string) => {
    return string.replace(/\s/g,"");  
};

console.log(removeStringSpaces(str));