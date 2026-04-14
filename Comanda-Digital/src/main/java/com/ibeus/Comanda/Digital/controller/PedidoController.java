package com.ibeus.Comanda.Digital.controller;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ibeus.Comanda.Digital.model.Pedido;
import com.ibeus.Comanda.Digital.service.PedidoService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/pedidos")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @GetMapping
    public ResponseEntity<List<Pedido>> listarPedidos(@RequestParam(required = false) String status) {
        List<Pedido> pedidos = pedidoService.listarPedidos(status);
        return ResponseEntity.ok(pedidos);
    }

    @PostMapping
    public ResponseEntity<Pedido> criarPedido(@RequestBody Pedido novoPedido) {
        Pedido pedidoSalvo = pedidoService.salvarPedido(novoPedido);
        // Retorna status 201 Created
        return ResponseEntity.status(HttpStatus.CREATED).body(pedidoSalvo);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Pedido> atualizarStatus(@PathVariable Long id, @RequestBody Map<String, String> body) {
        Pedido pedidoAtualizado = pedidoService.atualizarStatus(id, body.get("status"));
        return ResponseEntity.ok(pedidoAtualizado);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pedido> atualizarPedido(@PathVariable Long id, @RequestBody Pedido pedidoAtualizado) {
        Pedido pedido = pedidoService.atualizarPedido(id, pedidoAtualizado);
        return ResponseEntity.ok(pedido);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPedido(@PathVariable Long id) {
        pedidoService.deletarPedido(id);
        return ResponseEntity.noContent().build(); // Status 204 No Content
    }
}