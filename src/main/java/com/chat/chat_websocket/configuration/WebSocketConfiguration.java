package com.chat.chat_websocket.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfiguration implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        //ruta para comunicar el cliente(navegador) con el servidor websocket
        registry.addEndpoint("/chat").withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        //prefijo o ruta donde se registra el usuario y el servidor envia los mensajes
        registry.setApplicationDestinationPrefixes("/x").enableSimpleBroker("/topic");
    }
}
