import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public navOnTop: boolean = true;
  public navToBottom: boolean = false;
  public navToTop: boolean = false;

  constructor() { }

  ngOnInit() {
    this.hideShowNav();
  }

  hideShowNav = () => {
    let lastScrollValue = 0;
    window.onscroll = () => {
      if(window.pageYOffset === 0) {
        this.navOnTop =true;
        this.navToBottom = false;
        this.navToTop = false;
      } else if (window.pageYOffset !== 0) {
        this.navOnTop =false;
        this.navToBottom = true;
        if (lastScrollValue > window.pageYOffset) {
          this.navToTop = true;
        } else {
          this.navToTop = false;
        }        
      }
      lastScrollValue = window.pageYOffset;
    };
  }

 
}
