import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {
  private authenticated = false;

  constructor(private http: HttpClient, private router: Router) {
    this.login();
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  isUserAuthenticated(credentials = undefined) {
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    return this.http.get<boolean>('api/user/authenticated', {headers: headers});
  }

  login(credentials = undefined, navigateAfter: string = '/') {
    this.isUserAuthenticated(credentials).subscribe(authenticated => {
      this.authenticated = authenticated;
      this.router.navigateByUrl(navigateAfter);
    });
  }

  logout(navigateAfter: string) {
    this.http.post('/logout', {}).subscribe(() => {
            this.authenticated = false;
            this.router.navigateByUrl(navigateAfter);
        });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.authenticated;
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
