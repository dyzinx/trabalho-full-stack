package com.ibeus.Comanda.Digital.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // Isso faz com que rotas como /welcome, /menu, etc, 
        // sejam redirecionadas para o Angular processar.
        registry.addViewController("/{path:[^\\.]*}")
                .setViewName("forward:/index.html");
    }
}