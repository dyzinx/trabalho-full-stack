import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  sorvete: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.sorvete = navigation?.extras.state?.['sorvete'];
  }

  goBack() {
    this.router.navigate(['/menu']);
  }

  goToOrderComplete() {
    // Passa o sorvete selecionado para a próxima página
    this.router.navigate(['/order-complete'], { state: { sorvete: this.sorvete } });
  }
}
