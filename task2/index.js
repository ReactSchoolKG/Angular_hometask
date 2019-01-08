const heroes = [{
        name: 'Wolverine',
        family: 'Marvel',
        isEvil: false
    },
    {
        name: 'Deadpool',
        family: 'Marvel',
        isEvil: false
    },
    {
        name: 'Magneto',
        family: 'Marvel',
        isEvil: true
    },
    {
        name: 'Charles Xavier',
        family: 'Marvel',
        isEvil: false
    },
    {
        name: 'Batman',
        family: 'DC Comics',
        isEvil: false
    },
    {
        name: 'Harley Quinn',
        family: 'DC Comics',
        isEvil: true
    },
    {
        name: 'Legolas',
        family: 'Tolkien',
        isEvil: false
    },
    {
        name: 'Gandalf',
        family: 'Tolkien',
        isEvil: false
    },
    {
        name: 'Saruman',
        family: 'Tolkien',
        isEvil: true
    }
];

const result = heroes.reduce((acc, {
    name,
    family
}) => {
    // acc[family] = name;
    (acc[family] && Array.isArray(acc[family])) ? [...acc[family], ...name.split()] : acc[family] = name.split();
    return acc;
}, {});

console.log(result);

// const result1 = {};

// const arr1 = heroes.filter(item => item.family === 'Marvel').map(item => item.name);
// const arr2 = heroes.filter(item => item.family === 'DC Comics').map(item => item.name);
// const arr3 = heroes.filter(item => item.family === 'Tolkien').map(item => item.name);

// result1.Marvel = arr1;
// result1.DCComics = arr2;
// result1.Tolkien = arr3;

// console.log(result1);

// const arr4 = ['3:1', '0:1', '3:1', '3:4', '0:0', '2:1'];

// const result2 = arr4.map(item => item.split(':')).reduce((acc, cur) => {
//     return (cur[0] > cur[1]) ? 3 + acc : (cur[0] === cur[1]) ? 1 + acc : 0 + acc;
// }, 0);

// console.log(result2);

// const str1 = 'Here is a test sentence';
// const str2 = str1.replace(/\s/g, "");

// console.log(str2);