import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidosComponent } from './pedidos.component';
import { PedidoService } from '../app/pedido.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('PedidosComponent', () => {
  let component: PedidosComponent;
  let fixture: ComponentFixture<PedidosComponent>;
  let pedidoServiceSpy: jasmine.SpyObj<PedidoService>;

  beforeEach(async () => {
    // Criamos um "espião" do serviço para não chamar a API real
    const spy = jasmine.createSpyObj('PedidoService', ['getPedidos', 'createPedido']);

    await TestBed.configureTestingModule({
      // Como o componente é standalone, ele vai nos imports
      imports: [PedidosComponent],
      providers: [
        { provide: PedidoService, useValue: spy },
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidosComponent);
    component = fixture.componentInstance;
    pedidoServiceSpy = TestBed.inject(PedidoService) as jasmine.SpyObj<PedidoService>;

    // Configuramos o retorno padrão do mock
    pedidoServiceSpy.getPedidos.and.returnValue(of([]));
    
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar a lista de pedidos ao iniciar', () => {
    expect(pedidoServiceSpy.getPedidos).toHaveBeenCalled();
  });
});