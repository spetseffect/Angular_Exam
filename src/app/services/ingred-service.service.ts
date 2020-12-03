import { Injectable } from '@angular/core';
import { Ingred } from '../models/ingred';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredServiceService {
private data:Ingred[];
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<Ingred[]>("https://pizzastep.pp.ua:44306/api/ingredient");
  }
  getById(id: number): Ingred {
    return this.data.find(i => i.id == id);
  }
  addData(ingred: Ingred) {
    this.data.push(ingred);
  }
}
