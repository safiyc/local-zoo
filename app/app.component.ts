import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <div class='center-text'>
      <h1>{{title}}</h1>
    </div>
    <div class='row'>
      <div class='col s3'>
        <button class="btn-large">Add Animal</button>
      </div>
      <div class='col s9'>
        <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
        <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
        <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  title = 'Zoo\'s Animal Tracking';
  masterAnimalList: Animal[] = [
    new Animal('Southwest Redtailed Fox', 'Tush', 3, 'Rodents', 'Southwest Trail', 4, 'Female', 'Being near boulders', 'Water'),
    new Animal('Northern Bluefeathered Eagle', 'Buster', 2, 'Rodents', 'Northern Trail', 4, 'Male', 'Flying along a wall', 'Water'),
  ];
  selectedAnimal = null;

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }
}
