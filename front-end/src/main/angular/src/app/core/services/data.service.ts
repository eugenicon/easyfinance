import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../../modules/categories/category.model";
import {Operation} from "../../modules/operations/operation.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/categories/all' );
  }

  getOperations(): Observable<Operation[]> {
    return this.http.get<Operation[]>('/api/operations/all' );
  }
}