import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroAssuntoComponent } from './pages/administrador/cadastro-assunto/cadastro-assunto.component';
import { CadastroSecaoSubsecaoComponent } from './pages/administrador/cadastro-secao-subsecao/cadastro-secao-subsecao.component';
import { CadastroVaraComponent } from './pages/administrador/cadastro-vara/cadastro-vara.component';
import { SaudeSistemaComponent } from './pages/administrador/saude-sistema/saude-sistema.component';
import { MeusProcessosComponent } from './pages/processo/meus-processos/meus-processos.component';
import { ImportarProcessoComponent } from './pages/processo/importar-processo/importar-processo.component';
import { UsuariosComponent } from './pages/sistema/usuarios/usuarios.component';
import { PerfisComponent } from './pages/sistema/perfis/perfis.component';
import { ParametrosComponent } from './pages/sistema/parametros/parametros.component';
import { MensagensComponent } from './pages/sistema/mensagens/mensagens.component';
import { RelatoriosComponent } from './pages/sistema/relatorios/relatorios.component';
import { SuporteComponent } from './pages/sistema/suporte/suporte.component';
import { RequisicoesAssinadasComponent } from './pages/magistrado/requisicoes-assinadas/requisicoes-assinadas.component';
import { RequisicoesPendentesComponent } from './pages/magistrado/requisicoes-pendentes/requisicoes-pendentes.component';
import { RequisicoesMigradasComponent } from './pages/magistrado/requisicoes-migradas/requisicoes-migradas.component';
import { MetricasSistemaComponent } from './pages/dashboard/metricas-sistema/metricas-sistema.component';
import { MetricasProcessosComponent } from './pages/dashboard/metricas-processos/metricas-processos.component';
import { RequisicoesConferenciaComponent } from './pages/vara/requisicoes-conferencia/requisicoes-conferencia.component';
import {NotificacoesComponent} from "./pages/configuracoes/notificacoes/notificacoes.component";
import {PreferenciasComponent} from "./pages/configuracoes/preferencias/preferencias.component";
import {ManuaisComponent} from "./pages/configuracoes/manuais/manuais.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Início' },
  {
    title: 'Processos',
    path: 'processos',
    data: {
      breadcrumb: 'Processos',
    },
    children: [
      {
        path: 'meus-processos',
        component: MeusProcessosComponent,
        data: {
          breadcrumb: 'Meus processos',
          icon: 'pi pi-briefcase'
        },
      },
      {
        path: 'importar',
        component: ImportarProcessoComponent,
        data: {
          breadcrumb: 'Importar',
          icon: 'pi pi-download'
        },
      },
    ],
  },
  {
    title: 'Sistema',
    path: 'sistema',
    data: {
      breadcrumb: 'Sistema',
    },
    children: [
      {
        path: 'usuarios',
        component: UsuariosComponent,
        data: {
          breadcrumb: 'Usuários',
          icon: 'pi pi-user'
        },
      },
      {
        path: 'perfis',
        component: PerfisComponent,
        data: {
          breadcrumb: 'Perfis',
          icon: 'pi pi-users'
        },
      },
      {
        path: 'parametros',
        component: ParametrosComponent,
        data: {
          breadcrumb: 'Parâmetros',
          icon: 'pi pi-briefcase'
        },
      },
      {
        path: 'mensagens',
        component: MensagensComponent,
        data: {
          breadcrumb: 'Mensagens',
          icon: 'pi pi-bell'
        },
      },
      {
        path: 'relatorios',
        component: RelatoriosComponent,
        data: {
          breadcrumb: 'Relatórios',
          icon: 'pi pi-book'
        },
      },
      {
        path: 'suporte',
        component: SuporteComponent,
        data: {
          breadcrumb: 'Suporte',
          icon: 'pi pi-question-circle'
        },
      },
    ],
  },
  {
    title: 'Magistrado',
    path: 'magistrado',
    data: {
      breadcrumb: 'Magistrado',
    },
    children: [
      {
        path: 'requisicoes-assinadas',
        component: RequisicoesAssinadasComponent,
        data: {
          breadcrumb: 'Requisições assinadas',
          icon: 'pi pi-pencil'
        },
      },
      {
        path: 'requisicoes-pendentes',
        component: RequisicoesPendentesComponent,
        data: {
          breadcrumb: 'Requisições pendentes',
          icon: 'pi pi-hourglass'
        },
      },
      {
        path: 'requisicoes-migradas',
        component: RequisicoesMigradasComponent,
        data: {
          breadcrumb: 'Requisições migradas',
          icon: 'pi pi-upload'
        },
      },
    ],
  },
  {
    title: 'Vara',
    path: 'vara',
    data: {
      breadcrumb: 'Vara',
    },
    children: [
      {
        path: 'requisicoes-conferencia',
        component: RequisicoesConferenciaComponent,
        data: {
          breadcrumb: 'Tela de conferência',
          icon: 'pi pi-eye'
        },
      },
    ],
  },
  {
    title: 'Dashboard',
    path: 'dashboard',
    data: {
      breadcrumb: 'Dashboard',
    },
    children: [
      {
        path: 'metricas-sistema',
        component: MetricasSistemaComponent,
        data: {
          breadcrumb: 'Métricas do sistema',
          icon: 'pi pi-chart-bar'
        },
      },
      {
        path: 'metricas-processos',
        component: MetricasProcessosComponent,
        data: {
          breadcrumb: 'Métricas dos processos',
          icon: 'pi pi-chart-line'
        },
      },
    ],
  },
  {
    title: 'Administrador',
    path: 'administrador',
    data: {
      breadcrumb: 'Administrador',
    },
    children: [
      {
        path: 'assunto',
        component: CadastroAssuntoComponent,
        data: {
          breadcrumb: 'Cadastro de assunto',
          icon: 'pi pi-comment'
        },
      },
      {
        path: 'secao-subsecao',
        component: CadastroSecaoSubsecaoComponent,
        data: {
          breadcrumb: 'Cadastro de seção/subseção',
          icon: 'pi pi pi-sitemap'
        },
      },
      {
        path: 'vara',
        component: CadastroVaraComponent,
        data: {
          breadcrumb: 'Cadastro de vara',
          icon: 'pi pi-building-columns'
        },
      },
      {
        path: 'saude-sistema',
        component: SaudeSistemaComponent,
        data: {
          breadcrumb: 'Saúde do sistema',
          icon: 'pi pi-server'
        },
      },
    ],
  },
  {
    title: 'Configurações',
    path: 'configuracoes',
    data: {
      breadcrumb: 'Configurações',
      icon: 'pi pi-cog'
    },
    children: [
      {
        path: 'notificacoes',
        component: NotificacoesComponent,
        data: {
          breadcrumb: 'Notificações',
          icon: 'pi pi-bell'
        },
      },
      {
        path: 'preferencias',
        component: PreferenciasComponent,
        data: {
          breadcrumb: 'Preferências',
          icon: 'pi pi pi-wrench'
        },
      },
      {
        path: 'manuais',
        component: ManuaisComponent,
        data: {
          breadcrumb: 'Manuais',
          icon: 'pi pi-question-circle'
        },
      },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
