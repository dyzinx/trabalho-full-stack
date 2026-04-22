import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface centralizada para toda a aplicação
export interface Dish {
  id?: number;
  name: string;
  description: string;
  price: number;
  image?: string; // O '?' indica que o campo é opcional
}

@Injectable({
  providedIn: 'root',
})
export class DishService {
  private apiUrl = 'https://comanda-backend.onrender.com/api/dishes'; 

  constructor(private http: HttpClient) {}

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.apiUrl);
  }
}