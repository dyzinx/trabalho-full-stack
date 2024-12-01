package com.ibeus.Comanda.Digital.service;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import com.ibeus.Comanda.Digital.mock.PedidoMock;
import com.ibeus.Comanda.Digital.model.Pedido;
import com.ibeus.Comanda.Digital.repository.PedidoRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

@ExtendWith(SpringExtension.class)
class PedidoServiceTest {

  @InjectMocks
  private PedidoService pedidoService;

  @Mock
  private PedidoRepository pedidoRepository;

  @BeforeEach
  void startUp(){
    when(pedidoRepository.findAll()).thenReturn(PedidoMock.criandoUmaListaDePedidos());

    when(pedidoRepository.findByStatus(anyString()))
      .thenReturn(List.of(PedidoMock.criandoUmPedidoComStatusAguardando()));
  }

  @Test
  void quandoReceberUmaRequisicaoSemParametroDeveRetornarUmaListaDePedidos() {
      List<Pedido> resposta = pedidoService.listarPedidos(null);
      assertThat(resposta.size()).isEqualTo(2);
  }
}
