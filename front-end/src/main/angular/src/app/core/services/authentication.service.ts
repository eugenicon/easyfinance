import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.login();
  }

  isUserAuthenticated(credentials = undefined) {
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.name + ':' + credentials.password)
    } : {});

    let observable = this.http.get<boolean>('api/user/authenticated', {headers: headers});
    return observable.pipe(map(authenticated => {
      let wasAuthenticated = this.isAuthenticatedSubject.getValue();
      this.isAuthenticatedSubject.next(authenticated);
      if (wasAuthenticated && !authenticated) {
        this.router.navigateByUrl('user/login');
      }
      return authenticated
    }));
  }

  login(credentials = undefined, navigateAfter: string = '/') {
    let observable = this.isUserAuthenticated(credentials);
    observable.subscribe(authenticated => {
      this.router.navigateByUrl(navigateAfter);
    });
  }

  logout(navigateAfter: string) {
    this.http.post('/logout', {}).subscribe(() => {
      this.isAuthenticatedSubject.next(false);
      this.router.navigateByUrl(navigateAfter);
    });
  }
}
