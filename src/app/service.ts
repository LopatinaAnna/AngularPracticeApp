import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class Service{
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ]
  characterChanged = new Subject<void>()
  httpClient: HttpClient

  constructor(httpClient: HttpClient){
    this.httpClient = httpClient
  }

  fetchCharacters(){
    this.httpClient.get('https://swapi.dev/api/people')
      .pipe(map((response: any) => {
        const characterList = response.results
        const chars = characterList.map(char => {
          return { name: char.name, side: '' }
        })
        return chars
      }))
      .subscribe(data => {
        this.characters = data
        this.characterChanged.next()
      })
  }

  getCharacters(chosenList){
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    })
  }

  onSideChanged(character){
    const index = this.characters.findIndex(char => {
      return char.name === character.name
    })

    this.characters[index].side = character.side

    this.characterChanged.next()
  }

  addCharacter(name, side){
    const index = this.characters.findIndex(char => {
      return char.name === name
    })
    if(index !== -1){
      return;
    }

    const newCharacter = { name: name, side: side }
    this.characters.push(newCharacter)
  }
}
