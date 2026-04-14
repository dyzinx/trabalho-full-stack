import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderCompleteComponent } from './order-complete.component';
import { Router } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('OrderCompleteComponent', () => {
  let component: OrderCompleteComponent;
  let fixture: ComponentFixture<OrderCompleteComponent>;
  
  // Criamos o espião do Router com os métodos necessários
  const routerSpy = jasmine.createSpyObj('Router', ['navigate', 'getCurrentNavigation']);

  beforeEach(async () => {
    // Simula o estado vindo da navegação anterior
    routerSpy.getCurrentNavigation.and.returnValue({
      extras: { 
        state: { 
          sorvete: { name: 'Sorvete de Chocolate', price: 10.50 } 
        } 
      }
    });

    await TestBed.configureTestingModule({
      imports: [OrderCompleteComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve calcular o total baseado no sorvete recebido', () => {
    expect(component.total).toBe(10.50);
  });

  it('deve navegar para o menu quando goBack for chamado', () => {
    component.goBack();
    // Verificamos o routerSpy em vez do locationSpy
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/menu']);
  });
});