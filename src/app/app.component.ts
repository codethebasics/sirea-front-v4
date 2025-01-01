import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { BreadcrumbsComponent } from './layout/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    ButtonModule,
    DatePickerModule,
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    LoadingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'sirea-front';
}
