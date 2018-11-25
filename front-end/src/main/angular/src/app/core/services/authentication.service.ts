import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

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
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    return this.http.get<boolean>('api/user/authenticated', {headers: headers});
  }

  login(credentials = undefined, navigateAfter: string = '/') {
    this.isUserAuthenticated(credentials).subscribe(authenticated => {
      this.isAuthenticatedSubject.next(authenticated);
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
