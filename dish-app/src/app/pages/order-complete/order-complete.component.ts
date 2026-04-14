import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-complete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css']
})
export class OrderCompleteComponent {
  total: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const sorvete = navigation?.extras.state?.['sorvete'];
    if (sorvete) {
      this.total = sorvete.price;
    }
  }

  goBack() {
    // Mudamos para navegar para o menu, que é mais seguro que o "back" puro
    this.router.navigate(['/menu']);
  }

  goToOrderCancelled() {
    this.router.navigate(['/welcome']);
  }

  goToDeliveryStatus() {
    // Rota hipotética para o status
    console.log('Navegando para status da entrega...');
  }
}