
import { Router, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentUrl: string;
  currentStep: string;

  constructor(private router: Router) {
    router.events.filter(e => e instanceof NavigationEnd).subscribe((e: NavigationEnd) => {
      this.currentUrl = e.url;
      this.findCurrentStep(this.currentUrl);
      window.scrollTo(0, 0);
    });
  }

  private findCurrentStep(currentRoute) {
    const currRouteFragments = currentRoute.split('/');
    const length = currRouteFragments.length;
    this.currentStep = currentRoute.split('/')[length - 1];
  }
}
