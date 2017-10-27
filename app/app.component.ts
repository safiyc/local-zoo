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
        <button (click)="newButtonClicked()" class="btn-large">Add Animal</button>
      </div>
      <div class='col s9'>
        <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)" (deleteSender)="deleteAnimal($event)"></animal-list>
        <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
        <div *ngIf='addNewAnimal'>
          <new-animal (newAnimalSender)="addAnimal($event)" (newButtonClickedSender)="finishedAdding()"></new-animal>
        </div>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  title = 'Zoo Animal Tracking';
  masterAnimalList: Animal[] = [
    new Animal('Southwest Redtailed Fox', 'Tush', 3, 'Rodents', 'Southwest Trail', 4, 'Female', 'Being near boulders', 'Water'),
    new Animal('Northern Bluefeathered Eagle', 'Buster', 2, 'Rodents', 'Northern Trail', 4, 'Male', 'Flying along a wall', 'Water'),
  ];
  selectedAnimal = null;
  addNewAnimal = false;

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  newButtonClicked() {
    this.addNewAnimal = true;
  }

  finishedAdding() {
    this.addNewAnimal = false;
  }

  deleteAnimal(clickedAnimal) {
    var index = this.masterAnimalList.indexOf(clickedAnimal);
    this.masterAnimalList.splice(index, 1);
  }

}
