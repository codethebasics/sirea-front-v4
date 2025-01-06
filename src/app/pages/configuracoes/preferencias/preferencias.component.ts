import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { Image } from 'primeng/image';
import { InputText } from 'primeng/inputtext';
import { ButtonDirective, ButtonIcon, ButtonLabel } from 'primeng/button';
import { CheckIcon, TrashIcon } from 'primeng/icons';

@Component({
  selector: 'app-preferencias',
  imports: [
    Card,
    Image,
    InputText,
    ButtonDirective,
    CheckIcon,
    ButtonIcon,
    ButtonLabel,
    TrashIcon,
  ],
  templateUrl: './preferencias.component.html',
  styleUrl: './preferencias.component.scss',
  standalone: true,
})
export class PreferenciasComponent {}
