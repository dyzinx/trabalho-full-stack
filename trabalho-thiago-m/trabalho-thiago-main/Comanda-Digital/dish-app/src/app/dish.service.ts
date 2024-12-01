import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root', // Isso torna o serviço disponível para toda a aplicação
})
export class DishService {
  private apiUrl = 'http://localhost:8080/dishes'; // URL do backend

  constructor(private http: HttpClient) {}

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.apiUrl);
  }
}
