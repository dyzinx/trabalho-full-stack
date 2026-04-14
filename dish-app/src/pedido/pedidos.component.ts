import { Component, OnInit } from '@angular/core';
import { PedidoService, Pedido } from '../app/pedido.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// No arquivo pedidos.component.ts
@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './pedidos.component.html',
  styleUrls: [] // Deixe assim se o arquivo .css não existir
})
export class PedidosComponent implements OnInit {
  pedidos: Pedido[] = [];
  
  // Atualizado para os nomes corretos dos campos
  novoPedido: Pedido = {
    item: '',
    precoUnitario: 0,
    status: 'Novo'
  };

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.carregarPedidos();
  }

  carregarPedidos(): void {
    this.pedidoService.getPedidos().subscribe({
      next: (data) => {
        this.pedidos = data;
      },
      error: (err) => {
        console.error('Erro ao carregar pedidos:', err);
      }
    });
  }

  criarPedido(): void {
    this.pedidoService.createPedido(this.novoPedido).subscribe({
      next: (pedidoCriado) => {
        console.log('Pedido criado com sucesso:', pedidoCriado);
        this.carregarPedidos();
        this.resetarFormulario();
      },
      error: (err) => {
        console.error('Erro ao criar pedido:', err);
      }
    });
  }

  atualizarStatus(id: number, status: string): void {
    this.pedidoService.updateStatus(id, status).subscribe({
      next: () => {
        this.carregarPedidos();
      },
      error: (err) => {
        console.error(`Erro ao atualizar pedido ${id}:`, err);
      }
    });
  }

  deletarPedido(id: number): void {
    this.pedidoService.deletePedido(id).subscribe({
      next: () => {
        this.carregarPedidos();
      },
      error: (err) => {
        console.error(`Erro ao deletar pedido ${id}:`, err);
      }
    });
  }

  resetarFormulario(): void {
    // Atualizado para os nomes corretos dos campos
    this.novoPedido = {
      item: '',
      precoUnitario: 0,
      status: 'Novo'
    };
  }
}