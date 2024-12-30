import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroAssuntoComponent } from './pages/administrador/cadastro-assunto/cadastro-assunto.component';
import {
  CadastroSecaoSubsecaoComponent
} from './pages/administrador/cadastro-secao-subsecao/cadastro-secao-subsecao.component';
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
import {
  RequisicoesAssinadasComponent
} from './pages/magistrado/requisicoes-assinadas/requisicoes-assinadas.component';
import {
  RequisicoesPendentesComponent
} from './pages/magistrado/requisicoes-pendentes/requisicoes-pendentes.component';
import { RequisicoesMigradasComponent } from './pages/magistrado/requisicoes-migradas/requisicoes-migradas.component';
import { MetricasSistemaComponent } from './pages/dashboard/metricas-sistema/metricas-sistema.component';
import { MetricasProcessosComponent } from './pages/dashboard/metricas-processos/metricas-processos.component';
import {
  RequisicoesConferenciaComponent
} from './pages/vara/requisicoes-conferencia/requisicoes-conferencia.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Início' },
  {
    title: 'Processos',
    path: 'processos',
    children: [
      { path: 'meus-processos', component: MeusProcessosComponent },
      { path: 'importar', component: ImportarProcessoComponent },
    ]
  },
  {
    title: 'Sistema',
    path: 'sistema',
    children: [
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'perfis', component: PerfisComponent },
      { path: 'parametros', component: ParametrosComponent },
      { path: 'mensagens', component: MensagensComponent },
      { path: 'relatorios', component: RelatoriosComponent },
      { path: 'suporte', component: SuporteComponent },
    ]
  },
  {
    title: 'Magistrado',
    path: 'magistrado',
    children: [
      { path: 'requisicoes-assinadas', component: RequisicoesAssinadasComponent },
      { path: 'requisicoes-pendentes', component: RequisicoesPendentesComponent },
      { path: 'requisicoes-migradas', component: RequisicoesMigradasComponent }
    ]
  },
  {
    title: 'Vara',
    path: 'vara',
    children: [
      { path: 'requisicoes-conferencia', component: RequisicoesConferenciaComponent }
    ]
  },
  {
    title: 'Dashboard',
    path: 'dashboard',
    children: [
      { path: 'metricas-sistema', component: MetricasSistemaComponent },
      { path: 'metricas-processos', component: MetricasProcessosComponent },
    ]
  },
  {
    title: 'Administrador',
    path: 'administrador',
    children: [
      { path: 'assunto', component: CadastroAssuntoComponent },
      { path: 'secao-subsecao', component: CadastroSecaoSubsecaoComponent },
      { path: 'vara', component: CadastroVaraComponent },
      { path: 'saude-sistema', component: SaudeSistemaComponent },
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
