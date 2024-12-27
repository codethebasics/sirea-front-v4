import { Component, OnInit } from '@angular/core';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  imports: [Menu],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Processos',
        items: [
          {
            label: 'Meus processos',
            icon: 'pi pi-briefcase',
          },
          {
            label: 'Importar',
            icon: 'pi pi-download',
          },
        ],
      },
      {
        separator: true
      },
      {
        label: 'Sistema',
        items: [
          {
            label: 'Usuários',
            icon: 'pi pi-user',
          },
          {
            label: 'Perfis',
            icon: 'pi pi-users',
          },
          {
            label: 'Parâmetros',
            icon: 'pi pi-sliders-h',
          },
          {
            label: 'Mensagens',
            icon: 'pi pi-bell'
          },
          {
            label: 'Relatórios',
            icon: 'pi pi-book'
          },
          {
            label: 'Suporte',
            icon: 'pi pi-question-circle',
          },
        ],
      },
      {
        separator: true
      },
      {
        label: 'Magistrado',
        items: [
          {
            label: 'Requisições assinadas',
            icon: 'pi pi-pencil',
          },
          {
            label: 'Requisições pendentes',
            icon: 'pi pi-hourglass',
          },
          {
            label: 'Requisições migradas',
            icon: 'pi pi-upload',
          },
        ],
      },
      {
        separator: true
      },
      {
        label: 'Vara',
        items: [
          {
            label: 'Tela de conferência',
            icon: 'pi pi-eye',
          },
        ],
      },
      {
        separator: true
      },
      {
        label: 'Dashboard',
        items: [
          {
            label: 'Métricas do sistema',
            icon: 'pi pi-chart-bar',
          },
          {
            label: 'Métricas dos processos',
            icon: 'pi pi-chart-line',
          },
        ],
      },
      {
        separator: true
      },
      {
        label: 'Administrador',
        items: [
          {
            label: 'Saúde do sistema',
            icon: 'pi pi-server',
          },
          {
            label: 'Cadastro de assunto',
            icon: 'pi pi-comment',
          },
          {
            label: 'Cadastro de vara',
            icon: 'pi pi-building-columns',
          },
          {
            label: 'Cadastro de seção/subseção',
            icon: 'pi pi-sitemap',
          },
        ],
      },
    ];
  }
}
