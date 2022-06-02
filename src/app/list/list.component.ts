import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Service } from '../service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy{
  characters = []
  activatedRoute: ActivatedRoute
  service: Service
  currentSide: 'all'
  subscription: Subscription

  constructor(activatedRoute: ActivatedRoute, service: Service){
    this.activatedRoute = activatedRoute
    this.service = service
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.characters = this.service.getCharacters(params.side)
      this.currentSide = params.side
    })
    this.subscription = this.service.characterChanged.subscribe(() => {
      this.characters = this.service.getCharacters(this.currentSide)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
