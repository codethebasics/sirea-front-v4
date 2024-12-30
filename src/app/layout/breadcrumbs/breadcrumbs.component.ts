import { Component, OnInit } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  imports: [BreadcrumbModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent implements OnInit {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { icon: 'pi pi-briefcase' , label: 'Meus processos', routerLink: '/processos/meus-processos' },
      { icon: 'pi pi-download' , label: 'Importar', routerLink: '/processos/importar' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
