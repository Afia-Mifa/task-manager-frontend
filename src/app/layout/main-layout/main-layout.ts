import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Menu } from "../menu/menu";
import { MainContent } from '../main-content/main-content';

@Component({
  selector: 'app-main-layout',
  imports: [Header, Menu, MainContent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {
 isMenuVisible = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    console.log("Menu toggled")
  }
}
