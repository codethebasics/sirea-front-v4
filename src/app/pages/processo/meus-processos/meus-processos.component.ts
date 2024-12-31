import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-meus-processos',
  imports: [],
  templateUrl: './meus-processos.component.html',
  standalone: true,
  styleUrl: './meus-processos.component.scss'
})
export class MeusProcessosComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://viacep.com.br/ws/70775110/json/')
      .subscribe({
        next: data => console.log(data),
        error: error => console.log(error),
      })
  }
}
