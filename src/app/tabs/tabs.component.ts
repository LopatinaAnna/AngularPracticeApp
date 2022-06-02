import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  characters = []
  chosenList = 'all'
  service: Service

  constructor(service: Service) {
    this.service = service
  }

  onChoose(side){
    this.chosenList = side
  }

  getCharacters(){
    this.characters = this.service.getCharacters(this.chosenList)
    return this.characters
  }
}
