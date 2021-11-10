import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	menuIsOpen: boolean;

	constructor() { }

	ngOnInit(): void {
		this.menuIsOpen = false;
	}

	public toggleMenu() {
		this.menuIsOpen = !this.menuIsOpen;
	}
	public handleSelection() {
		if (this.menuIsOpen) {
			this.menuIsOpen = false;
		}
	}
}
