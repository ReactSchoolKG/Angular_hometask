const heroes=[
    {name:'Wolverine', family:'Marvel', isEvil:false},
    {name:'Deadpool', family:'Marvel', isEvil:false},
    {name:'Magneto', family:'Marvel', isEvil:true},
    {name:'Charles Xavier', family:'Marvel', isEvil:false},
    {name:'Batman', family:'DC Comics', isEvil:false},
    {name:'Harley Quinn', family:'DC Comics', isEvil:true},
    {name:'Legolas', family:'Tolkien', isEvil:false},
    {name:'Gandalf', family:'Tolkien', isEvil:false},
    {name:'Saruman', family:'Tolkien', isEvil:true},
    {name:'Hello', family:'Test', isEvil:true},
];

const objByFamilies = (arr) => 
 arr.reduce((accum, item) => {
    accum[item.family] === undefined ? accum[item.family] = [item] : accum[item.family].push(item);
    return accum; 
 }, {})

const result = objByFamilies(heroes);
console.log(result);


const results = ["3:1","3:2","3:3","3:4","3:2","3:3","3:4","3:1","3:2","3:4"];

const points = (arr) => {
    return results.reduce((accum, item, index) => {
        if(index === 0){
            accum = 0;   
        }
        let x = Number(item.split("")[0]);
        let y = Number(item.split("")[2]);
        if(x > y){
            return accum + 3;
        }
        else if(x === y){
            return accum + 1;
        }
        else{
            return accum;
        }
        return item;
    }, results[0]);
}

const resultPoints = points(results);
console.log(resultPoints);

startString = "hgf hgfhf hgfh";
console.log(startString.split(' ').join(''));