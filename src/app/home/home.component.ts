import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  experineceDuration:Date;
  constructor() { }

  ngOnInit(): void {
    this.experineceDuration=new Date(2018,7,5);
  }

}
