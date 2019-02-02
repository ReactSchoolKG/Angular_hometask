import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-about',
  templateUrl: './content-about.component.html',
  styleUrls: ['./content-about.component.css']
})
export class ContentAboutComponent implements OnInit {

  aboutTexts = [
  `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Saepe nostrum ullam eveniet pariatur voluptates odit, 
    fuga atque ea nobis sit soluta odio, adipisci quas 
    excepturi maxime quae totam ducimus consectetur?`,

    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Eius praesentium recusandae illo eaque architecto error, 
    repellendus iusto reprehenderit, doloribus, minus sunt. 
    Numquam at quae voluptatum in officia voluptas voluptatibus, minus!`,

    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Aut consequuntur magnam, excepturi aliquid ex itaque esse est 
    vero natus quae optio aperiam soluta voluptatibus corporis 
    atque iste neque sit tempora!`
  ]

  constructor() { }

  ngOnInit() {
  }

}
