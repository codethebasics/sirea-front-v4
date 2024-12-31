
import { ProgressBar } from 'primeng/progressbar';
import { NgIf } from '@angular/common';
import {Component, OnInit, signal, Signal} from '@angular/core';
import {LoadingService} from "./loading.service";

@Component({
  selector: 'app-loading',
  imports: [NgIf, ProgressBar],
  templateUrl: './loading.component.html',
  standalone: true,
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit {
  loading: boolean = false;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.loading$.subscribe((isLoading) => {
      this.loading = isLoading;
    });
  }

  setLoading(value: boolean) {
    this.loading = value;  // Alterar o estado do Signal para true ou false
  }
}
