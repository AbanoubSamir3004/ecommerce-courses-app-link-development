import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { ToastService } from '../service/toast.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);

  const modifiedReq = req.clone({
    url: `${environment.baseURL}${req.url}`,
  });

  return next(modifiedReq).pipe(
    catchError((error) => {
      if (!navigator.onLine) {
        toastService.showError('warning', 'There is no internet.. Check the internet connection.');
      } else if (error.status === 401) {
        toastService.showError('Unauthorized', 'You are not authorized to access this resource.');
      } else if (error.status === 403) {
        toastService.showError('Forbidden', 'You do not have permission to access this resource.');
      } else if (error.status === 404) {
        toastService.showError('Not Found', 'The requested resource was not found.');
      } else if (error.status === 500) {
        toastService.showError('Server Error', 'An internal server error occurred.');
      } else {
        toastService.showError('Error', 'An unexpected error occurred.');
      }
      return throwError(() => error);
    })
  );
};