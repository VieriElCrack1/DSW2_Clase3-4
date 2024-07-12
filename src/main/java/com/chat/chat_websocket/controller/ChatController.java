package com.chat.chat_websocket.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/chat")
public class ChatController {

    @GetMapping("/server")
    public String server() {
        return "server";
    }

    @GetMapping("/cliente")
    public String cliente() {
        return "cliente";
    }
}
