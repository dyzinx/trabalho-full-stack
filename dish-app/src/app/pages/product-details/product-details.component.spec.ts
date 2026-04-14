import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import { Router } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  
  // Mock do Router
  const routerSpy = jasmine.createSpyObj('Router', ['navigate', 'getCurrentNavigation']);

  beforeEach(async () => {
    // Configuramos o mock para retornar um sorvete de teste
    routerSpy.getCurrentNavigation.and.returnValue({
      extras: { 
        state: { 
          sorvete: { 
            name: 'Sorvete de Flocos', 
            price: 15.50, 
            description: 'Delicioso sorvete.', 
            image: 'assets/flocos.jpg' 
          } 
        } 
      }
    });

    await TestBed.configureTestingModule({
      imports: [ProductDetailsComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o nome do sorvete no template', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Buscamos pela classe que você definiu no seu HTML
    const titleElement = compiled.querySelector('.product-title');
    expect(titleElement?.textContent).toContain('Sorvete de Flocos');
  });
});