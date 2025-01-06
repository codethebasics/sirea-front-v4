import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { Image } from 'primeng/image';

@Component({
  selector: 'app-preferencias',
  imports: [Card, Image],
  templateUrl: './preferencias.component.html',
  styleUrl: './preferencias.component.scss',
  standalone: true,
})
export class PreferenciasComponent {}
