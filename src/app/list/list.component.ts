import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  characters = []
  activatedRoute: ActivatedRoute
  service: Service

  constructor(activatedRoute: ActivatedRoute, service: Service){
    this.activatedRoute = activatedRoute
    this.service = service
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.characters = this.service.getCharacters(params.side)
    })
  }
}
