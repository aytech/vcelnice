import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LocaleConstants } from "../../config";
import { Event, NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbarToggle') navbarToggle : ElementRef;
  @ViewChild('menu') menu : ElementRef;
  public lang: string = LocaleConstants.DEFAULT_LANG;

  constructor(private router: Router) { }

  private isMenuOpen = (): boolean => {
    return this.menu.nativeElement.offsetParent !== null;
  };

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.isMenuOpen()) {
          this.navbarToggle.nativeElement.click();
        }
      }
    });
  }
}
