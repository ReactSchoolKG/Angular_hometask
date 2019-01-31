import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor() { }

  // create film list
  films = [
    {title:"Avengers: Infinity War", year: 2018, distributor: "Disney"},
    {title:"Black Panther", year: 2018, distributor: "Disney"},
    {title:"Venom", year: 2018, distributor: "Sony"},
    {title:"Deadpool 2", year: 2018, distributor: "20th Century Fox"},
    {title:"Bohemian Rhapsody", year: 2018, distributor: "20th Century Fox"},
    {title:"Zootopia", year: 2016, distributor: "Disney"},
    {title:"The Secret Life of Pets", year: 2016, distributor: "	Universal"},
    {title:"Suicide Squad", year: 2016, distributor: "Warner Bros."},
    {title:"Despicable Me 2", year: 2013, distributor: "Universal"},
    {title:"Fast & Furious 6", year: 2013, distributor: "Universal"},
    {title:"Monsters University", year: 2013, distributor: "Disney"},
  ];

  // create observable  list of selected films
  private selectedFilms$: BehaviorSubject<{ title: string, year: number, distributor:string }[]> = 
    new BehaviorSubject([]);

  // get all selected films function
  getSelectedFilms(): Observable<{ title: string, year: number, distributor:string }[]> {
    return this.selectedFilms$;
  }

  // select film and add it to selectedFilms$ BehaviorSubject
  selectFilm(SelectTitle) {
    this.selectedFilms$.next(
      this.selectedFilms$.getValue().concat(
        this.films.filter(({title}) => title === SelectTitle)));
  }
}
