const heroes = [
    {name:"Wolverine", family:"Marvel", isEvil:false},
    {name:"Deadpoll", family:"Marvel", isEvil:false},
    {name:"Magneto", family:"Marvel", isEvil:true},
    {name:"Charles Xavier", family:"Marvel", isEvil:false},
    {name:"Batman", family:"DC Comics", isEvil:false},
    {name:"Harley Quinn", family:"DC Comics", isEvil:true},
    {name:"Logolas", family:"Tolkien", isEvil:false},
    {name:"Gandalf", family:"Tolkien", isEvil:false},
    {name:"Saruman", family:"Tolkien", isEvil:true},
];

console.log(heroes.filter((i)=>i.isEvil===true));  // first task

const obj = {
    'Marvel':[],
    'DC Comics':[],
    'Tolkien':[]
};

heroes.forEach((i)=>{
	if(i.family === 'Marvel') {
		obj['Marvel'].push(i.name);
	}
	if(i.family === 'DC Comics') {
		obj['DC Comics'].push(i.name);
	}
	if(i.family === 'Tolkien') {
		obj['Tolkien'].push(i.name);
	}
});

console.log(obj);  //second task