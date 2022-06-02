import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  availableSides = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'light' },
    { display: 'Dark', value: 'dark' }
  ]
  service: Service

  constructor(service: Service){
    this.service = service
  }

  onSubmit(form){
    if(form.valid){
      this.service.addCharacter(form.value.name, form.value.side)
    }
  }
}
