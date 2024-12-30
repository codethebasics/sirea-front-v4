import { Component, effect, OnInit } from '@angular/core';
import { BreadcrumbService } from './breadcrumbs.service';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  imports: [Breadcrumb],
})
export class BreadcrumbsComponent implements OnInit {
  items: MenuItem[] = [];
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };

  constructor(private breadcrumbService: BreadcrumbService) {
    effect(() => {
      this.items = this.breadcrumbService.breadcrumb();
    });
  }

  ngOnInit() {}
}
