import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../../modules/categories/category.model";
import {Operation} from "../../modules/operations/operation.model";
import {Budget} from "../../modules/budgets/budgets.model";
import {ReportData} from "../../modules/home/home.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getEmpty(): Observable<any[]> {
    return new Observable<any[]>();
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/categories/all' );
  }

  getCategoryTypes(): Observable<string[]> {
    return this.http.get<string[]>('/api/categories/types' );
  }

  saveCategory(data: Category): Observable<any> {
    return this.http.post('/api/categories/save', data);
  }

  deleteCategory(data: Category): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      body: data
    };
    return this.http.delete('/api/categories/delete', httpOptions);
  }

  getOperations(): Observable<Operation[]> {
    return this.http.get<Operation[]>('/api/operations/all' );
  }

  saveOperation(data: Operation): Observable<any> {
    return this.http.post('/api/operations/save', data);
  }

  deleteOperation(data: Operation): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      body: data
    };
    return this.http.delete('/api/operations/delete', httpOptions);
  }

  saveBudget(data: Budget): Observable<any> {
    return this.http.post('/api/budgets/save', data);
  }

  deleteBudget(data: Budget): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      body: data
    };
    return this.http.delete('/api/budgets/delete', httpOptions);
  }

  getBudgets(): Observable<Budget[]> {
    return this.http.get<Budget[]>('/api/budgets/all' );
  }

  getBudgetsReport(): Observable<ReportData[]> {
    return this.http.get<ReportData[]>('/api/reports/budget-progress' );
  }
}
