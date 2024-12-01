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
        // Retorna todos os pedidos ou filtra por status, se fornecido
        return status == null ? pedidoRepository.findAll() : pedidoRepository.findByStatus(status);
    }

    public Pedido atualizarStatus(Long id, String status) {
        Pedido pedido = buscarPedidoPorId(id);
        pedido.setStatus(status);
        return pedidoRepository.save(pedido);
    }

    public Pedido salvarPedido(Pedido pedido) {
        return pedidoRepository.save(pedido);
    }

    public void deletarPedido(Long id) {
        if (!pedidoRepository.existsById(id)) {
            throw new ComandaException(
                String.format("Pedido com o id %s não foi encontrado", id), HttpStatus.NOT_FOUND);
        }
        pedidoRepository.deleteById(id);
    }

    public Pedido atualizarPedido(Long id, Pedido pedidoAtualizado) {
        Pedido pedidoExistente = buscarPedidoPorId(id);

        // Atualiza os campos do pedido existente
        pedidoExistente.setItem(pedidoAtualizado.getItem());
        pedidoExistente.setPrecoUnitario(pedidoAtualizado.getPrecoUnitario());
        pedidoExistente.setStatus(pedidoAtualizado.getStatus());

        return pedidoRepository.save(pedidoExistente);
    }

    private Pedido buscarPedidoPorId(Long id) {
        return pedidoRepository.findById(id)
            .orElseThrow(() -> new ComandaException(
                String.format("Pedido com o id %s não foi encontrado", id), HttpStatus.NOT_FOUND));
    }
}
