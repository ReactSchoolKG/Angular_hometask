const matches = ["1:3", "0:0", "2:1", "3:1", "1:0", "2:3", "4:1", "3:2", "2:4", "0:1"];

const countResult = (arr) => {
    return arr.reduce((sum, current)=>{
        let [x,y] = (deleteSpacing(current)).split(":").map((i) => +i)
        let point;
        (x > y) ? point=3 : (x < y ? point=0 : point=1)
        return sum + point
    }, 0);
}

function deleteSpacing(str){
    return str.replace(/\s/, "")
}

console.log(countResult(matches));