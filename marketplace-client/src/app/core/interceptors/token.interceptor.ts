import { environment } from './../../../environments/environment';
import { Injectable, Injector } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const auth = this.injector.get(AuthService);
        const clonedRequest = request.clone({
            headers: auth.getTokenHeader(),
            url: this.fixUrl(request.url)
        });
        return next.handle(clonedRequest);
    }

    private fixUrl(url: string) {
        if (url == 'auth/sign_in' || url == 'auth' || url == 'users/check_authenticated' || url == 'auth/sign_out' || url == 'users/whoami') {
            if (url.indexOf('http://') >= 0 || url.indexOf('https://') >= 0) {
                return url;
            } else {
                return environment.API_ENDPOINT_AUTH + url;
            }
        } else {
            if (url.indexOf('http://') >= 0 || url.indexOf('https://') >= 0) {
                return url;
            } else {
                return environment.API_ENDPOINT + url;
            }
        }
    }
}