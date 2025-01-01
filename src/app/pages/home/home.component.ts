import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

interface RequisicaoPagamento {
  id: number;
  numero: string;
  assunto: string;
  vara: string;
}

@Component({
  selector: 'app-home',
  imports: [TableModule],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  customers!: RequisicaoPagamento[];

  ngOnInit() {
    this.customers = [
      {
        id: 1,
        numero: '1018293-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 2,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 3,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 4,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 5,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 6,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 7,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 8,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 9,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 10,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 11,
        numero: '1018293-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 12,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 13,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 14,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 15,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 16,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 17,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 18,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 19,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
      {
        id: 20,
        numero: '1018277-31.2022.4.01.3600',
        assunto: 'AUXÍLIO-DOENÇA PREVIDENCIÁRIO',
        vara: '9ª VARA FEDERAL DE JUIZADO ESPECIAL CÍVEL DA SJMT',
      },
    ];
  }
}
