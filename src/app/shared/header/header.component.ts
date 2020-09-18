import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuIsOpen:boolean = false;

  constructor() { }

  toggleMenu(){
    this.menuIsOpen = !this.menuIsOpen;
  }
  handleSelection() {
    if (this.menuIsOpen) {
      this.menuIsOpen = false;
    }
  }
}
