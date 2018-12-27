import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
// 	public schools: object[]=[
//     {name:'Cambridge', id:1, place:'UK'},
//     {name:'Oxford', id:2, place:'UK'}
//   ];
//   public listSchools: object[] = [];
//   title = 'My Angular App';
//   addSchool(school: object) {
//     this.listSchools.push(school);
//   }
// }

export class AppComponent{
  control = false;
  underline = false;
  red = false;
  big = false;
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

  trackById(i: number, episodes) {
  	return episodes.id;
  }
}