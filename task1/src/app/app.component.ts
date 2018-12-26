import { Component, AfterViewInit } from '@angular/core';
import { School } from './models/school';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  /*public schools: School[]=[
    {name:'Cambridge School', id:1, place:'Cambridge, UK'},
    {name:'Harvard University', id:2, place:'Massachusetts, USA'}
  ];
  public schoolList:object[]=[];
  addSchool(newSchool:object){
    this.schoolList.push(newSchool);
  }*/
  control=false;
  underline=false;
  red=false;
  big=false;

  otherEpisodes = [
    { title: 'Two Swords', director: 'D. B. Weiss', id: 8 },
    { title: 'The Lion and the Rose', director: 'Alex Graves', id: 9 },
    { title: 'Breaker of Chains', director: 'Michelle MacLaren', id: 10 },
    { title: 'Oathkeeper', director: 'Michelle MacLaren', id: 11 }];

  episodes = [
    { title: 'Winter Is Coming', director: 'Tim Van Patten', id: 0 },
    { title: 'The Kingsroad', director: 'Tim Van Patten', id: 1 },
    { title: 'Lord Snow', director: 'Brian Kirk', id: 2 },
    { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk', id: 3 },
    { title: 'The Wolf and the Lion', director: 'Brian Kirk', id: 4 },
    { title: 'A Golden Crown', director: 'Daniel Minahan', id: 5 },
    { title: 'You Win or You Die', director: 'Daniel Minahan', id: 6 },
    { title: 'The Pointy End', director: 'Daniel Minahan', id: 7 }
  ];
  trackById(i:number, elem){
    return elem.id
  }
  addOtherEpisode(){
    const episodeCopy = JSON.parse(JSON.stringify(this.episodes));
    this.episodes=[...episodeCopy, this.episodes.push()]
  }
  ngAfterViewInit():void{
    console.log('after view init');
  }
}
