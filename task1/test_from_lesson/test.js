const heroes = [
    {name:"Wolwerine", family:"Marvel", isEvil:false},
    {name:"Deadpoll", family:"Marvel", isEvil:false},
    {name:"Magneto", family:"Marvel", isEvil:true},
    {name:"Charles Havier", family:"Marvel", isEvil:false},
    {name:"Batman", family:"DC Comics", isEvil:false},
    {name:"Harley Quinn", family:"DC Comics", isEvil:true},
    {name:"Logolas", family:"Tolkien", isEvil:false},
    {name:"Gandalf", family:"Tolkien", isEvil:false},
    {name:"Saruman", family:"Tolkien", isEvil:true},
]

// 1 task
let newH = heroes.filter((item)=>item.isEvil===true);
console.log(newH);


// 2 task
let obj= {"Marvel":[],"DC Comics":[], "Tolkien":[]};
heroes.map((item)=>{
    switch(item.family){
        case "Marvel":
        obj.Marvel.push(item.name)
        break
        case "DC Comics":
        obj["DC Comics"].push(item.name)
        break
        case "Tolkien":
        obj.Tolkien.push(item.name)
        break
    }
});
console.log(obj);