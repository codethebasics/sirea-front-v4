import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-notificacoes',
  imports: [
    CommonModule,
    AccordionModule,
    AvatarModule,
    BadgeModule,
    MessageModule,
  ],
  templateUrl: './notificacoes.component.html',
  standalone: true,
  styleUrl: './notificacoes.component.scss',
})
export class NotificacoesComponent {
  tabs = [
    {
      summary: 'Aviso de manutenção do sistema',
      description:
        'O SIREA está na sua versão mais atual (4.0) e será necessária a atualização de alguns componentes do sistema. A manutenção se inicia às 08:00 do dia 05/01/2025 com previsão de término para às 17:00 do dia 05/01/2025.',
      severity: 'info',
      date: '02/01/2025 17:00',
      viewed: false,
      icon: 'pi pi-megaphone',
      value: '0',
    },
    {
      summary: 'Indisponibilidade do PJe',
      description:
        'O PJe está apresentando instabilidade em seu funcionamento, o que pode comprometer determinadas funcionalidades da aplicação. Informaremos assim que o serviço estiver acessível.',
      severity: 'error',
      date: '23/12/2024 11:00',
      viewed: false,
      icon: 'pi pi-exclamation-triangle',
      value: '1',
    },
    {
      summary: 'Correção de bug no sistema',
      description:
        'Um patch contendo uma correção para um bug encontrado na tela de cadastro de assunto foi disponibilizado de forma emergencial',
      severity: 'info',
      date: '21/12/2024 09:00',
      viewed: false,
      icon: 'pi pi-wrench',
      value: '2',
    },
    {
      summary: 'Indisponibilidade da API de requisição de pagamento',
      description:
        'O API de requisição de pagamento está apresentando instabilidade em seu funcionamento, o que pode comprometer determinadas funcionalidades da aplicação.',
      severity: 'info',
      date: '14/12/2024 10:00',
      viewed: false,
      icon: 'pi pi-exclamation-triangle',
      value: '3',
    },
  ];
}
