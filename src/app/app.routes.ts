import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'checklist', 
    pathMatch: 'full' 
  },
  {
    path: 'checklist',
    loadComponent: () => import('./features/checklist/pages/checklist-page/checklist-page.component').then(m => m.ChecklistPageComponent)
  }
];
