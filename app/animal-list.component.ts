
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template:  `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals">All Animals</option>
    <option value="youngAnimals">Young Animals</option>
    <option value="oldAnimals">Old Animals</option>
  </select>
  <ul>
    <li *ngFor='let currentAnimal of childAnimalList | age:filterByAge'>
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

  filterByAge: string = 'allAnimals';

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
}
