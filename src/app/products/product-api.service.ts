import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "../login/login-api.service";
import {Observable} from "rxjs";

export interface Product {
  id: Number,
  name: string,
  category: string,
  price: number,
  date: string
}

@Injectable({
  providedIn: 'root'
})

export class ProductApiService {
  baseURL: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  public create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product);
  }

  public read(id: Number): Observable<Product> {
    return this.http.get<Product>(this.baseURL + '/' + id);
  }

  public update(id: Number, product: Product): Observable<Product> {
    return this.http.put<Product>(this.baseURL + '/' + id, product);
  }

  public delete(id: Number): Observable<Product> {
    return this.http.delete<Product>(this.baseURL + '/' + id);
  }

  public list(): Observable<any> {
    return this.http.get<any>(this.baseURL);
  }
}
