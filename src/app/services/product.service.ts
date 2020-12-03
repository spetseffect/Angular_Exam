import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private data: Product[];
  constructor(private http: HttpClient) {
  }
  getData() {
    return this.http.get<Product[]>("https://pizzastep.pp.ua:44306/api/product");

    //console.log('data', this.data);
    //return this.data;
  }
  getById(id: number): Product {
    return this.data.find(p => p.id == id);
  }
  addData(product: Product) {
    this.data.push(product);
  }
  ngOnInit() {
  }

}
