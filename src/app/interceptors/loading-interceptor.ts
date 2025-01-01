import { HttpInterceptorFn } from '@angular/common/http';
import { LoadingService } from '../shared/loading/loading.service';
import { inject } from '@angular/core';
import { catchError, finalize, throwError } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.show();

  return next(req).pipe(
    finalize(() => {
      setTimeout(() => loadingService.hide(), 3000);
    }),
    catchError((error) => {
      loadingService.hide();
      return throwError(error);
    }),
  );
};
