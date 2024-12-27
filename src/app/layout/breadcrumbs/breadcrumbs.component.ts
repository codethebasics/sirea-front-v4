import { Component, OnInit } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumbs',
  imports: [BreadcrumbModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent implements OnInit {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Meus processos' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
