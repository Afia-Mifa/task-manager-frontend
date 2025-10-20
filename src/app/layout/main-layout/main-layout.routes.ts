import { Routes } from '@angular/router';
import { MainLayout } from './main-layout';

export const mainLayoutRoutes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../../features/dashboard/dashboard/dashboard.routes').then(m => m.dashboardRoutes)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];