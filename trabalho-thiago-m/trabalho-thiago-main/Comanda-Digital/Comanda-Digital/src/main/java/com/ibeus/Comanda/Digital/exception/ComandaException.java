package com.ibeus.Comanda.Digital.exception;

import org.springframework.http.HttpStatus;

public class ComandaException extends RuntimeException {

  private static final String TITLE_MESSAGE = "Erro no sistema de comanda";

  private final String title;
  private final String description;
  private final HttpStatus status;

  public ComandaException(String description, HttpStatus httpStatus) {
    this.title = TITLE_MESSAGE;
    this.description = description;
    this.status = httpStatus;
  }

  // Getters explicitamente implementados
  public String getTitle() {
    return title;
  }

  public String getDescription() {
    return description;
  }

  public HttpStatus getStatus() {
    return status;
  }
}
