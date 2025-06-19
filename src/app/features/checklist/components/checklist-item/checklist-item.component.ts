import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistItem } from '../../../../models/checklist-items.model';

@Component({
  selector: 'app-checklist-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checklist-item.component.html',
})
export class ChecklistItemComponent {
  @Input() item!: ChecklistItem;
  @Output() toggle = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();
}
