import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delivery-status',
  standalone: true,
  imports: [],
  templateUrl: './delivery-status.component.html',
  styleUrls: ['./delivery-status.component.css']
})
export class DeliveryStatusComponent {
  constructor(private router: Router, private location: Location) {}

  goBack() {
    this.location.back();
  }

  goToPedidosEntregues() {
    this.router.navigate(['/pedidos-entregues']);
  }
}
