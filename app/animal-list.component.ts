
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template:  `
  <select (change)="onChange($event.target.value)" class="form-control form-control-lg">
    <option value="allAnimals">All Animals</option>
    <option value="youngAnimals">Young Animals</option>
    <option value="oldAnimals">Old Animals</option>
  </select>

  <table class='striped'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Specifies</th>
        <th>Age</th>
        <th>Diet</th>
        <th>Location</th>
        <th>Caretakers</th>
        <th>Sex</th>
        <th>Like</th>
        <th>Dislike</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor='let currentAnimal of childAnimalList | age:filterByAge'>
        <td>{{currentAnimal.name}}</td>
        <td>{{currentAnimal.species}}</td>
        <td>{{currentAnimal.age}}</td>
        <td>{{currentAnimal.diet}}</td>
        <td>{{currentAnimal.location}}</td>
        <td>{{currentAnimal.caretakers}}</td>
        <td>{{currentAnimal.sex}}</td>
        <td>{{currentAnimal.like}}</td>
        <td>{{currentAnimal.dislike}}</td>
        <td><button (click)="editButtonHasBeenClicked(currentAnimal)" class="btn-large waves-effect waves-light">Edit</button></td>
        <td><button (click)="deleteButtonHasBeenClicked(currentAnimal)" class="btn-large waves-effect waves-light">Delete</button></td>
      </tr>
    </tbody>
  </table>
  `

  // <ul *ngFor='let currentAnimal of childAnimalList | age:filterByAge' >
  //   <li class="collapsible" data-collapsible="accordion">
  //     <div class="collapsible-header">
  //       <p>Name: {{currentAnimal.name}}</p>
  //     </div>
  //     <div class="collapsible-body">
  //       <p>Species: {{currentAnimal.species}}</p>
  //     </div>
  //   </li>
  // </ul>

})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  @Output() deleteSender = new EventEmitter();

  filterByAge: string = 'allAnimals';

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  deleteButtonHasBeenClicked(animalToDelete: Animal) {
    this.deleteSender.emit(animalToDelete);
  }
}
