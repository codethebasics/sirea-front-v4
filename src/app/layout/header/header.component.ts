import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { Chip } from 'primeng/chip';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    CommonModule,
    Menubar,
    Chip,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Bruno',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Notificações',
            icon: 'pi pi-bell'
          },
          {
            label: 'Preferências',
            icon: 'pi pi-wrench'
          },
          {
            separator: true
          },
          {
            label: 'Sair',
            icon: 'pi pi-sign-out'
          },
        ]
      }
    ]
  }
}
