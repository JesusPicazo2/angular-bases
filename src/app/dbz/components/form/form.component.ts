import { Component, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {EventEmitter} from '@angular/core';
import {v4 as uuid} from 'uuid'

@Component({
  selector: 'dbz-add-character',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

@Output()
public onNewCharacter: EventEmitter<Character> = new EventEmitter();

public character: Character = {
  id:uuid.toString(),
  name:'',
  power:0
};

emitCharacter():void{

  // debugger;

  console.log(this.character);
  if(this.character.name.length === 0) return;

  this.onNewCharacter.emit(this.character);

this.character = {id:uuid.toString(), name:'', power:0};
}
}
