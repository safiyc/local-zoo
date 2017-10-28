import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf='childSelectedAnimal'>
      <h3>Edit Animal</h3>
      <label>Enter Name</label>
      <input [(ngModel)]='childSelectedAnimal.name' class='form-control'>
      <label>Enter Species</label>
      <input [(ngModel)]='childSelectedAnimal.species' class='form-control'>
      <label>Enter Age</label>
      <input [(ngModel)]='childSelectedAnimal.age' class='form-control'>
      <label>Enter Diet</label>
      <input [(ngModel)]='childSelectedAnimal.diet' class='form-control'>
      <label>Enter Location</label>
      <input [(ngModel)]='childSelectedAnimal.location' class='form-control'>
      <label>Enter Number of Caretakers</label>
      <input [(ngModel)]='childSelectedAnimal.caretakers' class='form-control'>
      <label>Enter Sex</label>
      <input [(ngModel)]='childSelectedAnimal.sex' class='form-control'>
      <label>Enter Like</label>
      <input [(ngModel)]='childSelectedAnimal.like' class='form-control'>
      <label>Enter Dislike</label>
      <input [(ngModel)]='childSelectedAnimal.dislike' class='form-control'>
      <button (click)='doneButtonClicked()' class="btn-large waves-effect waves-light">Done</button>
    </div>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
