import { Component, OnInit } from '@angular/core';
import { FilmsService } from ".././service/films.service"

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  // connect FilmsService  to FilmsComponent
  constructor(public films: FilmsService){}

  allFilms = this.films.films;
  selectedFilms = this.films.getSelectedFilms()

  select({ title }) {
    this.films.selectFilm(title);
   }

  ngOnInit(){ }
}
