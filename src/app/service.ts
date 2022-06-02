export class Service{
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ]

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
