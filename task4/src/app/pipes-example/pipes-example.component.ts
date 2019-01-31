import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent {
  
  // define defuault values
  inputRadius = "";
  inputHex = "#111";

  // handle user radius input function
  onKeyR(event) {
    this.inputRadius = event.target.value;
  }

  // handle user hex input function
  onKeyH(event) {
    this.inputHex = event.target.value;
  }
}
