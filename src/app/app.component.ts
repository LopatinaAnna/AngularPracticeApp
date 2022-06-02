import { Component, OnInit } from '@angular/core';
import { Service } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularPracticeApp';
  service: Service

  constructor(service: Service){
    this.service = service
  }

  ngOnInit() {
    this.service.fetchCharacters()
  }
}
