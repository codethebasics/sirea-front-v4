import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { Chip } from 'primeng/chip';
import { animate, style, transition, trigger } from '@angular/animations';
import { delay } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    // Animação do fade in/out
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms 300ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
    // Animação do slide in/out
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(250px)', opacity: 0 }),
        animate('300ms 300ms ease-in', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ transform: 'translateX(250px)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  menuReady = false;

  ngOnInit() {}

  onToggleClass() {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.menuReady = false;
    }
  }

  // Controla o início das animações sequenciais
  onFadeInDone() {
    setTimeout(() => {
      this.menuReady = true; // Ativa o menu após o fade-in
    }, 500); // Adiciona um pequeno delay para controlar a sequência
  }
}
