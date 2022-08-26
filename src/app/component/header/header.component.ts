import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'angular-sakila';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log('toggle');
  }

}
