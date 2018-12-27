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

        const evilHeroes = arr.filter(item => item.isEvil === true);

        const objHero = {
            'Marvel':[],
            'DC Comics':[],
            'Tolkien':[]
        };

        evilHeroes.forEach(element => {

            if(element.family === 'Marvel') {
            objHero['Marvel'] = element;
            } else if (element.family === 'DC Comics') {
                objHero['DC Comics'] = element;
            } else if (element.family === 'Tolkien') {
                objHero['Tolkien'] = element;
            };
        });

       
        console.log(objHero);
    };

    evilHeroes(heroes);
   
    
