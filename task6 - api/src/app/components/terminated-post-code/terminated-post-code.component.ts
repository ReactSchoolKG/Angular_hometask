import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-terminated-post-code',
  templateUrl: './terminated-post-code.component.html',
  styleUrls: ['./terminated-post-code.component.css']
})
export class TerminatedPostCodeComponent implements OnInit {
  public searchControl = new FormControl('');
  public responseValue = "";

  constructor(private httpService: HttpService) { }

  getRequest(){
    this.httpService.terminatedPostcode(this.searchControl.value)
    .subscribe(
      res => this.responseValue = JSON.stringify(res),
      err => this.responseValue = JSON.stringify(err)
    )
  }

  ngOnInit() {
  }

}
