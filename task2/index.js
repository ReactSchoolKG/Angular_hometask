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

// const result = heroes.reduce((acc, cur) => {
//     acc[cur.family] = [...acc, cur.name];
//     return acc;
// }, {});

const result1 = {};

const arr1 = heroes.filter(item => item.family === 'Marvel').map(item => item.name);
const arr2 = heroes.filter(item => item.family === 'DC Comics').map(item => item.name);
const arr3 = heroes.filter(item => item.family === 'Tolkien').map(item => item.name);

result1.Marvel = arr1;
result1.DCComics = arr2;
result1.Tolkien = arr3;




console.log(result1);

// 1. Create new array of heroes, where property isEvil is true.
// 2. Create object
// {‘Marvel’:[],// all heroes from family Marvel
// ‘DC Comics’:[],// all heroes from family DC Comics
// ‘Tolkien’:[]// all heroes from family Tolkien
// }
// Output:
// {‘Marvel’:['Wolverine','Deadpool',’Magneto','Charles Xavier'],
// ‘DC Comics’:['Batman','Harley Quinn'],
// ‘T