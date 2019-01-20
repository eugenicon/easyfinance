import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {User} from "../../modules/user/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  private userSubject = new BehaviorSubject<User>(User.EMPTY);
  public user = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  isUserAuthenticated(credentials = undefined): Observable<boolean> {
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.name + ':' + credentials.password)
    } : {});

    let observable = this.http.get<User>('api/user/authenticated', {headers: headers});
    return observable.pipe(map(authenticatedUser => {
      let wasAuthenticated = this.isAuthenticatedSubject.getValue();
      let isAuthenticated = authenticatedUser ? authenticatedUser['name'].length > 0 : false;
      this.isAuthenticatedSubject.next(isAuthenticated);
      this.userSubject.next(isAuthenticated ? authenticatedUser : User.EMPTY);
      if (wasAuthenticated && !isAuthenticated) {
        this.router.navigateByUrl('user/login');
      }
      return isAuthenticated
    }),
      catchError(() => {
        this.isAuthenticatedSubject.next(false);
        return this.isAuthenticated
      }));
  }

  login(credentials = undefined, navigateAfter: string = '/'): Observable<boolean> {
    let observable = this.isUserAuthenticated(credentials);
    observable.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigateByUrl(navigateAfter);
      }
    });
    return observable;
  }

  logout(navigateAfter: string) {
    this.http.post('/logout', {}).subscribe(() => {
      this.isAuthenticatedSubject.next(false);
      this.router.navigateByUrl(navigateAfter);
    });
  }

  register(user: User, navigateAfter: string = '/') {
    this.http.post('api/user/register', user).subscribe(() => {
      this.isAuthenticatedSubject.next(false);
      this.router.navigateByUrl(navigateAfter);
    });
  }

  save(user: User): Observable<any> {
    return this.http.post('api/user/save', user);
  }
}
