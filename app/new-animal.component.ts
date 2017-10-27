import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h3 class='center-text'>Add New Animal</h3>
  <div class='form-group'>
    <label>Enter Name</label>
    <input #newName class='form-control'>
  </div>
  <div class='form-group'>
    <label>Enter Species</label>
    <input #newSpecies class='form-control'>
  </div>
  <div class='form-group'>
    <label>Enter Age</label>
    <input #newAge class='form-control'>
  </div>
  <div class='form-group'>
    <label>Enter Diet</label>
    <input #newDiet class='form-control'>
  </div>
  <div class='form-group'>
    <label>Enter Location</label>
    <input #newLocation class='form-control'>
  </div>
  <div class='form-group'>
    <label>Enter Number of Caretakers</label>
    <input #newCaretakers class='form-control'>
  </div>
  <div class='form-group'>
    <label>Enter Sex</label>
    <input #newSex class='form-control'>
  </div>
  <div class='form-group'>
    <label>Enter Like</label>
    <input #newLike class='form-control'>
  </div>
  <div class='form-group'>
    <label>Enter Dislike</label>
    <input #newDislike class='form-control'>
  </div>
  <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLike.value, newDislike.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLike.value=''; newDislike.value=''; newButtonClicked()" class="btn-large waves-effect waves-light">Add</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  @Output() newButtonClickedSender = new EventEmitter();
  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, like: string, dislike: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, like, dislike);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

  newButtonClicked() {
    this.newButtonClickedSender.emit();
  }
}
