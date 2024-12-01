import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule], // Certifique-se de adicionar o RouterModule aqui
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  sorvetes = [
    {
      image: 'assets/images/sorvete-chocolate.jpg',
      name: 'Sorvete de Chocolate',
      description: 'Água filtrada, açúcar, leite em pó integral, cacau em pó.',
      price: 10.70
    },
    {
      image: 'assets/images/sorvete-morango.jpg',
      name: 'Sorvete de Morango',
      description: 'Água filtrada, morango, açúcar, espessantes e gorduras vegetais.',
      price: 14.80
    },
    {
      image: 'assets/images/sorvete-flocos.jpg',
      name: 'Sorvete de Flocos',
      description: 'Água filtrada, açúcar, leite em pó integral, chocolate granulado.',
      price: 15.50
    }
  ];

  constructor(private router: Router) {}

  goToProductDetails(sorvete: any) {
    this.router.navigate(['/product-details'], { state: { sorvete } });
  }
  

  goBack() {
    this.router.navigate(['/welcome']);
  }
}