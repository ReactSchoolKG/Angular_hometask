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
];

//Create new array 
//of heroes ,where property
//isEvil is true
//через методи масиву
console.log("after filtering", heroes.filter(hero => {
    return hero.isEvil && hero;
}));

//через Map container
let mapHeroes = new Map();
heroes.forEach((hero, i) => {
    hero.isEvil && mapHeroes.set(mapHeroes.size+1, hero);
});

console.log("after mapping", Array.from(mapHeroes.values()));

//замикання
let mapHeroes2 = new Map();
function checkHero(hero) {
    self = this;
    self.hero = hero;
    return function isEvil() {
        self.hero.isEvil && mapHeroes2.set(mapHeroes2.size+1, self.hero);
    }
}

heroes.forEach(hero => {
    var checkedHero = checkHero(hero);
    checkedHero();
})
console.log("after closure", Array.from(mapHeroes2.values()));

//Create object
//{
//  `Marvel`: [names],
//  `DC Comics`: [names],
//  `Tolkien`: [names]
//}

function toObj(){
    return {
        'Marvel' : [],
        'DC Comics' : [],
        'Tolkien' : []
    }
}

const obj = toObj();
const obj2 = toObj();
const obj3 = toObj();
const obj4 = toObj();
const obj5 = toObj();
const obj6 = toObj();

heroes.forEach(hero => {
    if(hero.family === "DC Comics")obj["DC Comics"] = [...obj["DC Comics"], hero];
    if(hero.family === "Marvel")obj.Marvel = [...obj.Marvel, hero];
    if(hero.family === "Tolkien")obj.Tolkien = [...obj.Tolkien, hero];
})

heroes.forEach(hero => {
    if(hero.family === "DC Comics")obj2["DC Comics"].push(hero);
    if(hero.family === "Marvel")obj2.Marvel.push(hero);
    if(hero.family === "Tolkien")obj2.Tolkien.push(hero);
})

heroes.forEach(hero => {
    switch(hero.family) {
        case 'DC Comics':
            obj3["DC Comics"].push(hero);
            break;
        case 'Marvel': 
            obj3.Marvel.push(hero);
            break;
        case 'Tolkien':
            obj3.Tolkien.push(hero);
            break;
        default:
            return null;
    }
})

heroes.forEach(hero => {
    switch(hero.family) {
        case 'DC Comics':
            obj4["DC Comics"] = [...obj4["DC Comics"], hero];
            break;
        case 'Marvel': 
            obj4.Marvel = [...obj4.Marvel, hero];
            break;
        case 'Tolkien':
            obj4.Tolkien = [...obj4.Tolkien, hero];
            break;
        default:
            return null;
    }
})

obj5["DC Comics"] = heroes.filter(hero => {
    return hero.family === "DC Comics" && hero;
});
obj5.Marvel = heroes.filter(hero => {
    return hero.family === "Marvel" && hero;
});
obj5.Tolkien = heroes.filter(hero => {
    return hero.family === "Tolkien" && hero;
});

function checkHero2(hero) {
    self = this;
    self.hero = hero;
    return function isEvil() {
        switch(self.hero.family) {
            case 'DC Comics':
                obj6["DC Comics"] = [...obj6["DC Comics"], self.hero];
                break;
            case 'Marvel': 
                obj6.Marvel = [...obj6.Marvel, self.hero];
                break;
            case 'Tolkien':
                obj6.Tolkien = [...obj6.Tolkien, self.hero];
                break;
            default:
                return null;
        }
    }
}

heroes.forEach(hero => {
    var checkedHero = checkHero2(hero);
    checkedHero(); 
})


console.log("obj", obj);
console.log("obj2", obj2);
console.log("obj3", obj3);
console.log("obj4", obj4);
console.log("obj5", obj5);
console.log("obj6", obj6);