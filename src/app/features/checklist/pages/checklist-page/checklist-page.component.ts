import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistItemComponent } from '../../components/checklist-item/checklist-item.component';
import { AddChecklistFormComponent } from '../../components/add-checklist-form/add-checklist-form.component';
import { ChecklistService } from '../../services/checklist.service';
import { ChecklistItem } from '../../../../models/checklist-items.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checklist-page',
  standalone: true,
  imports: [CommonModule, ChecklistItemComponent, AddChecklistFormComponent],
templateUrl: './checklist-page.component.html',
})
export class ChecklistPageComponent {
  items$! : Observable<ChecklistItem[]>;

  constructor(private checklistService: ChecklistService) {}

  ngOnInit() {
    this.items$ = this.checklistService.items$;
  }

  onAddItem(title: string) {
    const newItem: ChecklistItem = {
      id: Date.now().toString(),
      title,
      completed: false,
      createdAt: new Date()
    };
    this.checklistService.addItem(newItem);
  }

  onToggleItem(id: string) {
    this.checklistService.toggleItem(id);
  }

  onDeleteItem(id: string) {
    this.checklistService.deleteItem(id);
  }
}
