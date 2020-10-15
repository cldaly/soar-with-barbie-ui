import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'SoarWithBarbie';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }
    });
  }
}
