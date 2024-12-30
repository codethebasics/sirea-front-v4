import { Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  breadcrumb = signal<any[]>([]);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateBreadcrumb();
      }
    });
  }

  private updateBreadcrumb() {
    const currentUrl = this.router.url.split('/');
    const breadcrumb = currentUrl.map((path, index) => ({
      label: path,
      url: '/' + currentUrl.slice(0, index + 1).join('/')
    }));
    this.breadcrumb.set(breadcrumb);
  }
}
