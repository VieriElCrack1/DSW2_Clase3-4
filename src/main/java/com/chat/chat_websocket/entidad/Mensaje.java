package com.chat.chat_websocket.entidad;

public class Mensaje {
    public String message;
    public String fromUsuario;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getFromUsuario() {
        return fromUsuario;
    }

    public void setFromUsuario(String fromUsuario) {
        this.fromUsuario = fromUsuario;
    }
}
