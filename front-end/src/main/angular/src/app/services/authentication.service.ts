import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticated = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  authenticate(credentials, callback) {
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('api/user/authenticated', {headers: headers}).subscribe(response => {
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });
  }

  login(credentials, navigateAfter: string) {
    this.authenticate(credentials, () => {
      this.router.navigateByUrl(navigateAfter);
    });
  }

  logout(navigateAfter: string) {
    this.http.post('/logout', {}).subscribe(() => {
            this.authenticated = false;
            this.router.navigateByUrl(navigateAfter);
        });
  }
}

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}
