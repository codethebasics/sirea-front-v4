import { Component, OnInit } from '@angular/core';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [Menu],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.items = [
      {
        label: 'Processos',
        items: [
          {
            label: 'Meus processos',
            icon: 'pi pi-briefcase',
            command: () => this.router.navigate(['/processos/meus-processos']),
          },
          {
            label: 'Importar',
            icon: 'pi pi-download',
            command: () => this.router.navigate(['/processos/importar']),
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
            command: () => this.router.navigate(['/sistema/usuarios']),
          },
          {
            label: 'Perfis',
            icon: 'pi pi-users',
            path: '/sistema/perfis',
            command: () => this.router.navigate(['/processos/meus-processos']),
          },
          {
            label: 'Parâmetros',
            icon: 'pi pi-sliders-h',
            command: () => this.router.navigate(['/sistema/parametros']),
          },
          {
            label: 'Mensagens',
            icon: 'pi pi-bell',
            command: () => this.router.navigate(['/sistema/mensagens']),
          },
          {
            label: 'Relatórios',
            icon: 'pi pi-book',
            command: () => this.router.navigate(['/sistema/relatorios']),
          },
          {
            label: 'Suporte',
            icon: 'pi pi-question-circle',
            command: () => this.router.navigate(['/sistema/suporte']),
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
            command: () => this.router.navigate(['/magistrado/requisicoes-assinadas']),
          },
          {
            label: 'Requisições pendentes',
            icon: 'pi pi-hourglass',
            command: () => this.router.navigate(['/magistrado/requisicoes-pendentes']),
          },
          {
            label: 'Requisições migradas',
            icon: 'pi pi-upload',
            command: () => this.router.navigate(['/magistrado/requisicoes-migradas']),
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
            command: () => this.router.navigate(['/vara/requisicoes-conferencia']),
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
            command: () => this.router.navigate(['/dashboard/metricas-sistema']),
          },
          {
            label: 'Métricas dos processos',
            icon: 'pi pi-chart-line',
            command: () => this.router.navigate(['/dashboard/metricas-processos']),
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
            command: () => this.router.navigate(['/administrador/saude-sistema']),
          },
          {
            label: 'Cadastro de assunto',
            icon: 'pi pi-comment',
            command: () => this.router.navigate(['/administrador/assunto']),
          },
          {
            label: 'Cadastro de vara',
            icon: 'pi pi-building-columns',
            command: () => this.router.navigate(['/administrador/vara']),
          },
          {
            label: 'Cadastro de seção/subseção',
            icon: 'pi pi-sitemap',
            command: () => this.router.navigate(['/administrador/secao-subsecao']),
          },
        ],
      },
    ];
  }

  teste() {
    this.router.navigate(['/administrador']);
  }
}
