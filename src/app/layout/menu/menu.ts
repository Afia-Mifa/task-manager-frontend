import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  menuItems = signal<MenuItem[]>([
    { label: 'Dashboard', route: '/dashboard', icon:'dash' },
    { label: 'Employee', route: '/employee', icon:'emp' },
    { label: 'Organization', route: '/organization', icon:'org' },
  ]);
}
