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

// Heroes task - output specific object of given array of objects

const result = heroes.reduce((acc, {
    name,
    family
}) => {
    if (!acc[family]) {
        acc[family] = [];
    }
    acc[family].push(name);
    return acc;
}, {});

console.log(result);

// Football task

const arr4 = ['3:1', '0:1', '3:1', '3:4', '0:0', '2:1'];

const result2 = arr4.map(item => item.split(':')).reduce((acc, cur) => {
    return (cur[0] > cur[1]) ? 3 + acc : (cur[0] === cur[1]) ? 1 + acc : 0 + acc;
}, 0);

console.log(result2);

//Remove white-spaces task

const str = 'Here is a test sentence';
const str2 = str.replace(/\s/g, "");

console.log(str2);