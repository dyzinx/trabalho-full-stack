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
  sorvete: any;
  total: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.sorvete = navigation?.extras.state?.['sorvete'];
    this.total = this.sorvete?.price || 0;
  }

  goBack() {
    this.router.navigate(['/menu']);
  }

  goToOrderCancelled() {
    // Passa o sorvete para a página de pedido cancelado
    this.router.navigate(['/order-cancelled'], { state: { sorvete: this.sorvete } });
  }

  goToDeliveryStatus() {
    this.router.navigate(['/delivery-status']);
  }
}
