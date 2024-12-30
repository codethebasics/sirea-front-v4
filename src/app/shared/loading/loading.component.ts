
import { ProgressBar } from 'primeng/progressbar';
import { NgIf } from '@angular/common';
import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [NgIf, ProgressBar],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  loading: Signal<boolean> = signal(false);

  setLoading(value: boolean) {
    this.loading.apply(value);  // Alterar o estado do Signal para true ou false
  }
}
