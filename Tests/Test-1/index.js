    const heroes = [
        { name: 'Wolverine', family: 'Marvel', isEvil: false },
        { name: 'Deadpool', family: 'Marvel', isEvil: false },
        { name: 'Magneto', family: 'Marvel', isEvil: true },
        { name: 'Charles Xavier', family: 'Marvel', isEvil: false },
        { name: 'Batman', family: 'DC Comics', isEvil: false },
        { name: 'Harley Quinn', family: 'DC Comics', isEvil: true },
        { name: 'Legolas', family: 'Tolkien', isEvil: false },
        { name: 'Gandalf', family: 'Tolkien', isEvil: false },
        { name: 'Saruman', family: 'Tolkien', isEvil: true }
    ];

    function evilHeroes (arr) {

        const evilHeroes = [];

        const objHero = {
            'Marvel':[],
            'DC Comics':[],
            'Tolkien':[]
        };

        arr.forEach(element => {

            if(element.family === 'Marvel' && element.isEvil === true) {
            objHero['Marvel'] = element;
            } else if (element.family === 'DC Comics' && element.isEvil === true) {
                objHero['DC Comics'] = element;
            } else if (element.family === 'Tolkien' && element.isEvil === true) {
                objHero['Tolkien'] = element;
            };
        });

        evilHeroes.push(objHero);
        console.log(evilHeroes);
    };

    evilHeroes(heroes);
   
    
