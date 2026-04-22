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
    this.router.navigate(['/menu']);
  }

  goToOrderCancelled() {
    this.router.navigate(['/welcome']);
  }

  goToDeliveryStatus() {
    console.log('Navegando para status da entrega...');
    // AQUI ESTÁ A ORDEM DE NAVEGAÇÃO QUE FALTAVA:
    this.router.navigate(['/delivery-status']); 
  }
}