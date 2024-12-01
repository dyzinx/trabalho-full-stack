package com.ibeus.Comanda.Digital.mock;

import java.util.List;

import com.ibeus.Comanda.Digital.model.Pedido;

public final class PedidoMock {

  private PedidoMock() {

  }

  public static List<Pedido> criandoUmaListaDePedidos() {
    Pedido pedido1 = new Pedido();
    pedido1.setId(1L);
    pedido1.setStatus("pronto");

    return List.of(pedido1, criandoUmPedidoComStatusAguardando());
  }

  public static Pedido criandoUmPedidoComStatusAguardando() {
    Pedido pedido = new Pedido();
    pedido.setId(2L);
    pedido.setStatus("aguardando");

    return pedido;
  }
}
