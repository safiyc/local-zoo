import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf='childSelectedAnimal'>
      <h3>Edit Animal</h3>
      <label>Enter Name</label>
      <input [(ngModel)]='childSelectedAnimal.name'>
      <label>Enter Species</label>
      <input [(ngModel)]='childSelectedAnimal.species'>
      <label>Enter Age</label>
      <input [(ngModel)]='childSelectedAnimal.age'>
      <label>Enter Diet</label>
      <input [(ngModel)]='childSelectedAnimal.diet'>
      <label>Enter Location</label>
      <input [(ngModel)]='childSelectedAnimal.location'>
      <label>Enter Number of Caretakers</label>
      <input [(ngModel)]='childSelectedAnimal.caretakers'>
      <label>Enter Sex</label>
      <input [(ngModel)]='childSelectedAnimal.sex'>
      <label>Enter Like</label>
      <input [(ngModel)]='childSelectedAnimal.like'>
      <label>Enter Dislike</label>
      <input [(ngModel)]='childSelectedAnimal.dislike'>
      <button (click)='doneButtonClicked()'>Done</button>
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
