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

// // const result = heroes.reduce((acc, cur) => {
// //     acc[cur.family] = [...acc, cur.name];
// //     return acc;
// // }, {});

const result1 = {};

const arr1 = heroes.filter(item => item.family === 'Marvel').map(item => item.name);
const arr2 = heroes.filter(item => item.family === 'DC Comics').map(item => item.name);
const arr3 = heroes.filter(item => item.family === 'Tolkien').map(item => item.name);

result1.Marvel = arr1;
result1.DCComics = arr2;
result1.Tolkien = arr3;

console.log(result1);

const arr1 = ['3:1', '3:1', '3:1'];

const result = arr1.map(item => item.split(':')).reduce((acc, cur) => {
    if (cur[0] > cur[1]) return 3 + acc;
    if (cur[0] === cur[1]) return 1 + acc;
    if (cur[0] < cur[1]) return 0 + acc;
}, 0);

const str1 = 'Here is a test sentence';
const str2 = str1.replace(/\s/g, "");
console.log(str2);



console.log(result);