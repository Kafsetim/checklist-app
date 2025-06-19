import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-checklist-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-checklist-form.component.html',
})
export class AddChecklistFormComponent {
  @Output() addItem = new EventEmitter<string>();
  title = '';

  onSubmit() {
    if (this.title.trim()) {
      this.addItem.emit(this.title);
      this.title = '';
    }
  }
}
