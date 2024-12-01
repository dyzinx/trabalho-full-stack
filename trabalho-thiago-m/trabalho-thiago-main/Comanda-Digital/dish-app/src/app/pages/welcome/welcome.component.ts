import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router: Router, private http: HttpClient) {}

  startSession() {
    // Faz uma requisição GET para o endpoint do backend
    this.http.get('http://localhost:8080/pedidos').subscribe(
      response => {
        console.log('Resposta do backend:', response);
        // Navega para a página do menu após a requisição bem-sucedida
        this.router.navigate(['/menu']);
      },
      error => {
        console.error('Erro ao conectar com o backend:', error);
      }
    );
  }
}
