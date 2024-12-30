import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { WritableSignal, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  breadcrumb: WritableSignal<MenuItem[]> = signal<MenuItem[]>([]);

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Sempre que uma navegação termina, atualize o breadcrumb
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateBreadcrumb(this.activatedRoute.root);
    });
  }

  private updateBreadcrumb(route: ActivatedRoute, url: string = '', breadcrumbs: MenuItem[] = []): void {
    const children: ActivatedRoute[] = route.children;

    // Se a rota tiver filhos, percorre para obter os breadcrumbs
    if (children.length === 0) {
      this.breadcrumb.set(breadcrumbs);  // Atualiza o breadcrumb
    }

    // Para cada filho da rota, vai até o próximo nível e monta os breadcrumbs
    children.forEach(child => {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      const label = child.snapshot.data['breadcrumb'] || routeURL;  // Usa o label da rota ou o path
      const icon = child.snapshot.data['icon'];  // Pegando o ícone da rota

      // Atualiza o breadcrumb com o label, ícone e o link
      breadcrumbs.push({
        label,
        icon,  // Adicionando o ícone
        routerLink: url + '/' + routeURL
      });

      // Recursivamente chama o próximo nível de rota
      this.updateBreadcrumb(child, url + '/' + routeURL, breadcrumbs);
    });
  }
}
