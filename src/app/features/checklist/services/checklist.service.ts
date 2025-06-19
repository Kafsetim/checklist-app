import { Injectable } from '@angular/core';
import { ChecklistItem } from '../../../models/checklist-items.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {
  private itemsSubject = new BehaviorSubject<ChecklistItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  private get items(): ChecklistItem[] {
    return this.itemsSubject.getValue();
  }

  private set items(items: ChecklistItem[]) {
    this.itemsSubject.next(items);
  }

  addItem(item: ChecklistItem): void {
    this.items = [...this.items, item];
  }

  toggleItem(id: string): void {
    this.items = this.items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    );
  }

  deleteItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}
