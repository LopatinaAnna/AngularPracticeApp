import { Component, Input } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() character;
  service: Service

  constructor(service: Service) {
    this.service = service
   }

  onAssign(side){
    this.service.onSideChanged({name: this.character.name, side: side})
  }
}
