package com.ibeus.Comanda.Digital.config;

import com.ibeus.Comanda.Digital.exception.ComandaException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ErrorHandler extends ResponseEntityExceptionHandler {

  @ExceptionHandler(ComandaException.class)
  public ResponseEntity<Map<String, Object>> handleComandaException(ComandaException exception) {
    Map<String,Object> message = new HashMap<>();
    message.put("error",exception.getTitle());
    message.put("message", exception.getDescription());
    message.put("status",exception.getStatus().value());
    return new ResponseEntity<>(message, exception.getStatus());
  }
}
