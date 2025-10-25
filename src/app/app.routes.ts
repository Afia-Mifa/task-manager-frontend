import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/main-content/main-layout.routes').then(m => m.mainLayoutRoutes)
  },
  { path: '**', redirectTo: '' }
];
