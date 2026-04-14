package com.ibeus.Comanda.Digital.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import com.ibeus.Comanda.Digital.exception.ComandaException;
import com.ibeus.Comanda.Digital.model.Pedido;
import com.ibeus.Comanda.Digital.repository.PedidoRepository;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    public List<Pedido> listarPedidos(String status) {
        return status == null ? pedidoRepository.findAll() : pedidoRepository.findByStatus(status);
    }

    public Pedido salvarPedido(Pedido pedido) {
        return pedidoRepository.save(pedido);
    }

    public Pedido atualizarStatus(Long id, String status) {
        Pedido pedido = buscarPedidoPorId(id);
        pedido.setStatus(status);
        return pedidoRepository.save(pedido);
    }

    public Pedido atualizarPedido(Long id, Pedido pedidoAtualizado) {
        Pedido pedidoExistente = buscarPedidoPorId(id);
        pedidoExistente.setItem(pedidoAtualizado.getItem());
        pedidoExistente.setPrecoUnitario(pedidoAtualizado.getPrecoUnitario());
        pedidoExistente.setStatus(pedidoAtualizado.getStatus());
        return pedidoRepository.save(pedidoExistente);
    }

    public void deletarPedido(Long id) {
        if (!pedidoRepository.existsById(id)) {
            throw new ComandaException("Pedido não encontrado", HttpStatus.NOT_FOUND);
        }
        pedidoRepository.deleteById(id);
    }

    private Pedido buscarPedidoPorId(Long id) {
        return pedidoRepository.findById(id)
            .orElseThrow(() -> new ComandaException("Pedido não encontrado", HttpStatus.NOT_FOUND));
    }
}