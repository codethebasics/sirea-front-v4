import { Component, effect } from '@angular/core';
import { BreadcrumbService } from './breadcrumbs.service';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  imports: [Breadcrumb],
  standalone: true
})
export class BreadcrumbsComponent  {
  items: MenuItem[] = [];
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };

  constructor(private breadcrumbService: BreadcrumbService) {
    effect(() => {
      this.items = this.breadcrumbService.breadcrumb();
    });
  }

}
