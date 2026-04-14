import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DishService, Dish } from '../../dish.service'; // Importe ambos aqui

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // Use a interface vinda do serviço. Ela já entende que a imagem pode ser undefined.
  sorvetes: Dish[] = []; 
  isLoading: boolean = true;

  constructor(
    private router: Router,
    private dishService: DishService
  ) {}

  ngOnInit(): void {
    this.carregarMenu();
  }

  carregarMenu(): void {
    this.isLoading = true;
    this.dishService.getDishes().subscribe({
      next: (dados) => {
        this.sorvetes = dados;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar menu:', err);
        this.isLoading = false;
      }
    });
  }

  goToProductDetails(sorvete: Dish) {
    this.router.navigate(['/product-details'], { state: { sorvete } });
  }

  goBack() {
    this.router.navigate(['/welcome']);
  }
}