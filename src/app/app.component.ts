import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FormsModule, ButtonModule, DatePickerModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sirea-front';
  date: any;
}
