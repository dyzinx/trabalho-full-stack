import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-cancelled',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-cancelled.component.html',
  styleUrls: ['./order-cancelled.component.css']
})
export class OrderCancelledComponent {
  sorvete: any;
  total: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.sorvete = navigation?.extras.state?.['sorvete'];
    this.total = this.sorvete?.price || 0;
  }

  // Método para voltar ao menu
  goBack() {
    this.router.navigate(['/menu']);
  }

  // Método para redirecionar à página inicial
  goToHome() {
    this.router.navigate(['/welcome']); // Redireciona para a página inicial
  }
}
