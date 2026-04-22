import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; // Adicionado Router
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Adicionado HttpClient

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule], // HttpClientModule precisa estar aqui
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(
    private router: Router, 
    private http: HttpClient
  ) {}

  // AQUI ESTÁ A FUNÇÃO QUE FALTAVA PARA O BOTÃO FUNCIONAR!
  startSession() {
    this.router.navigate(['/menu']);
  }

  // Exemplo de como resolver o erro de 'implicit any'
  fazerChamadaExemplo() {
    this.http.get('url-da-api').subscribe({
      next: (response: any) => { // Tipamos como 'any' para o erro TS7006 sumir
        console.log('Sucesso:', response);
      },
      error: (error: any) => { // Tipamos como 'any' aqui também
        console.error('Erro:', error);
      }
    });
  }

  irParaMenu() {
    this.router.navigate(['/menu']);
  }
}