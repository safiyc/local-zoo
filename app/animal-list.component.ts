
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template:  `
  <ul>
    <li *ngFor='let currentAnimal of childAnimalList'>
      <h5>{{currentAnimal.name}}</h5>
      <p>{{currentAnimal.species}}</p>
      <p>{{currentAnimal.age}}</p>
      <p>{{currentAnimal.diet}}</p>
      <p>{{currentAnimal.location}}</p>
      <p>{{currentAnimal.caretakers}}</p>
      <p>{{currentAnimal.sex}}</p>
      <p>{{currentAnimal.like}}</p>
      <p>{{currentAnimal.dislike}}</p>
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
    </li>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
