import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsRequestService {
  constructor(private http: HttpClient) {}

  getProductsList() {
    console.log("getting data")
    return this.http.get('https://dummyjson.com/products');
  }

  getProductsDetails(id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
