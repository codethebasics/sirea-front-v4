import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { Image } from 'primeng/image';
import { InputText } from 'primeng/inputtext';
import { ButtonDirective, ButtonIcon, ButtonLabel } from 'primeng/button';
import { CheckIcon, TrashIcon, UndoIcon } from 'primeng/icons';
import { FormsModule } from '@angular/forms';
import { Tree } from 'primeng/tree';

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
    FormsModule,
    Tree,
    UndoIcon,

  ],
  templateUrl: './preferencias.component.html',
  styleUrl: './preferencias.component.scss',
  standalone: true,
})
export class PreferenciasComponent {
  groupedProfiles: any[];
  selectedProfile: any[];

  constructor() {
    this.groupedProfiles = [
      {
        label: 'Administrador',
        value: 'admtrf1',
        selected: true,
        children: [
          {
            label: 'Gestão',
            value: 'ges',
            selected: false,
            children: [
              { label: 'Gestão de precatório diretor', value: 'gpd', selected: false, },
              { label: 'Gestão de precatório supervisor', value: 'gsu', selected: false, },
              { label: 'Gestão de precatório servidor', value: 'gps', selected: false, },
            ],
          },
          {
            label: 'Vara',
            value: 'var',
            selected: false,
            children: [
              { label: 'Diretor de vara', value: 'vardir', selected: false, },
              { label: 'Servidor de vara', value: 'varser', selected: false, },
              { label: 'Colaborador de vara', value: 'varcolab', selected: false, },
              { label: 'Estagiário de vara', value: 'varestag', selected: false, },
            ],
          },
          {
            label: 'DIEFI',
            value: 'dif',
            selected: false,
            children: [
              { label: 'Diretor da DIEFI', value: 'gdie', selected: false, },
              { label: 'Supervisor da DIEFI', value: 'gdsu', selected: false, },
              { label: 'Servidor da DIEFI', value: 'gdies', selected: false },
            ],
          },
          {
            label: 'Magistrado',
            value: 'mag',
            selected: false,
          },
          {
            label: 'Advogado',
            value: 'adv',
            selected: false,
          },
          {
            label: 'Funcionários de escritórios de advocacia',
            value: 'advfunc',
            selected: false,
          },
          {
            label: 'Executado',
            value: 'executado',
            selected: false,
          },
          {
            label: 'Sistema cliente',
            value: 'sis',
            selected: false,
          },
          {
            label: 'Servidor do executado',
            value: 'prepexec',
            selected: false,
          },
        ],
      },
    ];

    this.selectedProfile = [];
  }
}
