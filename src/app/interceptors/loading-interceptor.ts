import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingComponent } from '../shared/loading/loading.component';

/**
 * Interceptor responsável por apresentar e ocultar a barra de carregamento.
 * Sempre que uma requisição externa é feita, o filtro intercepta a requisição,
 * adicionando uma barra de loading na aplicação, indicando que uma requisição
 * está sendo efetuada. Ao final da requisição o filtro remove a barra de carregamento
 *
 * @author Bruno Carneiro (tr301605)
 */
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingComponent: LoadingComponent) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Ativar o ProgressBar
    this.loadingComponent.setLoading(true)

    return next.handle(req).pipe(
      finalize(() => {
        // Desativar o ProgressBar quando a requisição terminar
        this.loadingComponent.setLoading(false);
      })
    );
  }
}
