import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { Router } from '@angular/router';
import { DishService } from '../../dish.service';
import { of } from 'rxjs';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  
  // Criamos Mocks (objetos simulados) para as dependências
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  let dishServiceSpy = jasmine.createSpyObj('DishService', ['getDishes']);

  beforeEach(async () => {
    // Configuramos o Mock do serviço para retornar uma lista vazia por padrão
    dishServiceSpy.getDishes.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: DishService, useValue: dishServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar o cardápio ao iniciar (ngOnInit)', () => {
    expect(dishServiceSpy.getDishes).toHaveBeenCalled();
  });

  it('deve navegar para a página de boas-vindas ao clicar em voltar', () => {
    component.goBack();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/welcome']);
  });

  it('deve navegar para detalhes do produto quando um sorvete é selecionado', () => {
    // Criamos um objeto de teste que respeita a interface Dish
    const mockSorvete = { 
      id: 1, 
      name: 'Chocolate', 
      price: 10.5, 
      description: 'Cremoso', 
      image: 'assets/image.jpg' 
    };

    component.goToProductDetails(mockSorvete);

    // Verifica se o roteador foi chamado com o caminho e o estado (sorvete) corretos
    expect(routerSpy.navigate).toHaveBeenCalledWith(
      ['/product-details'], 
      { state: { sorvete: mockSorvete } }
    );
  });
});