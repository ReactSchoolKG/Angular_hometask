import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  posts = [
    { 
      title:"Man must explore, and this is exploration at its greatest",
      shortDescription:"Problems look mighty small from 150 miles up",
      author:"Start Bootstrap",
      postDate:"September 24, 2018"
    },
    { 
      title:"I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
      author:"Start Bootstrap",
      postDate:"September 18, 2018"
    },
    {
      title:"Science has not yet mastered prophecy",
      shortDescription:"We predict too much for the next year and yet far too little for the next ten.",
      author:"Start Bootstrap",
      postDate:"August 24, 2018"
    },
    {
      title:"Failure is not an option",
      shortDescription:"Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
      author:"Start Bootstrap",
      postDate:"July 8, 2018"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
