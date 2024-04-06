import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private loading = 0;

  constructor(private loadingSvc: LoaderService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.loading === 0) {
      setTimeout(() => {
        this.loadingSvc.show();
        document.body.classList.add('no-scroll');
      });
    }
    this.loading++;

    return next.handle(request).pipe(
      finalize(() => {
        this.loading--;
        if (this.loading === 0) {
          setTimeout(() => {
            this.loadingSvc.hide();
            document.body.classList.remove('no-scroll');
          }, 2000);
        }
      })
    );
  }
}
