import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

type RequisicaoPagamento = {
  id: number,
  numero: string,
  assunto: string,
  vara: string
}

@Component({
  selector: 'app-home',
  imports: [
    TableModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  customers!: RequisicaoPagamento[];

  constructor() {}

  ngOnInit() {
    this.customers = [
      {
        id: 1,
        numero: '1018293-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT'
      },
      {
        id: 2,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT'
      },
    ]
  }
}
