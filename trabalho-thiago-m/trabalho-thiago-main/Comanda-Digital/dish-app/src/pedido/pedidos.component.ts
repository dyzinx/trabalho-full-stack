import { Component, OnInit } from '@angular/core';
import { PedidoService, Pedido } from '../app/pedido.service';
import { CommonModule } from '@angular/common'; // Necessário para standalone
import { HttpClientModule } from '@angular/common/http'; // Necessário para chamadas HTTP
import { FormsModule } from '@angular/forms'; // Necessário para inputs e formulários

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule], // Incluímos todos os módulos necessários
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos: Pedido[] = [];
  novoPedido: Pedido = {
    id: 0,
    cliente: '',
    preco_total: 0,
    status: 'Novo'
  };

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.carregarPedidos();
  }

  carregarPedidos(): void {
    this.pedidoService.getPedidos().subscribe({
      next: (data: any) => {
        this.pedidos = data;
      },
      error: (err: any) => {
        console.error('Erro ao carregar pedidos:', err);
      }
    });
  }

  criarPedido(): void {
    this.pedidoService.createPedido(this.novoPedido).subscribe({
      next: (pedidoCriado: any) => {
        console.log('Pedido criado com sucesso:', pedidoCriado);
        this.carregarPedidos(); // Atualiza a lista
        this.resetarFormulario();
      },
      error: (err: any) => {
        console.error('Erro ao criar pedido:', err);
      }
    });
  }

  atualizarStatus(id: number, status: string): void {
    this.pedidoService.updateStatus(id, status).subscribe({
      next: () => {
        console.log(`Status do pedido ${id} atualizado para ${status}`);
        this.carregarPedidos();
      },
      error: (err: any) => {
        console.error(`Erro ao atualizar status do pedido ${id}:`, err);
      }
    });
  }

  deletarPedido(id: number): void {
    this.pedidoService.deletePedido(id).subscribe({
      next: () => {
        console.log(`Pedido ${id} deletado com sucesso`);
        this.carregarPedidos();
      },
      error: (err: any) => {
        console.error(`Erro ao deletar pedido ${id}:`, err);
      }
    });
  }

  resetarFormulario(): void {
    this.novoPedido = {
      id: 0,
      cliente: '',
      preco_total: 0,
      status: 'Novo'
    };
  }
}
