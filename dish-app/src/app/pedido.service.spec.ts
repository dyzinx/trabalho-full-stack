import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PedidoService, Pedido } from './pedido.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('PedidoService', () => {
  let service: PedidoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PedidoService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(PedidoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Garante que não fiquem requisições pendentes entre um teste e outro
    httpMock.verify();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar a lista de pedidos via GET', () => {
    const mockPedidos: Pedido[] = [
      { id: 1, item: 'Sorvete de Baunilha', precoUnitario: 10, status: 'Novo' }
    ];

    service.getPedidos().subscribe(pedidos => {
      expect(pedidos.length).toBe(1);
      expect(pedidos).toEqual(mockPedidos);
    });

    const req = httpMock.expectOne('http://localhost:8080/pedidos');
    expect(req.request.method).toBe('GET');
    req.flush(mockPedidos); // Simula a resposta do servidor
  });

  it('deve criar um novo pedido via POST', () => {
    const novo: Pedido = { item: 'Chocolate', precoUnitario: 12, status: 'Novo' };

    service.createPedido(novo).subscribe(pedido => {
      expect(pedido).toEqual(novo);
    });

    const req = httpMock.expectOne('http://localhost:8080/pedidos');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(novo);
    req.flush(novo);
  });
});