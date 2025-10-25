import { Routes } from '@angular/router';
import { MainLayout } from '../main-layout/main-layout';

export const mainLayoutRoutes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../features/dashboard/dashboard.routes').then(
            (m) => m.dashboardRoutes
          ),
      },
      {
        path: 'employee',
        loadChildren: () =>
          import('../../features/employee/employee.routes').then(
            (m) => m.dashboardRoutes
          ),
      },
      {
        path: 'organization',
        loadChildren: () =>
          import('../../features/organization/organization.routes').then(
            (m) => m.dashboardRoutes
          ),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
