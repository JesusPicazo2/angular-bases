import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

console.log(uuid());

@Injectable({providedIn: 'root'})
export class dbzService {
  public Characters: Character[] = [{
    id:uuid(),name:'Krillin',power: 1000},
  { id:uuid(),name:'Goku', power:9500},
  {id:uuid(),name:'Vegetta', power:7500}
];

addCharacter(character: Character):void{
  const newCharacter:Character = {...character, id: uuid()}
  this.Characters.push(newCharacter);
}

deleteCharacterById(id:string){
  this.Characters = this.Characters.filter( Character => Character.id !== id);
}
}
