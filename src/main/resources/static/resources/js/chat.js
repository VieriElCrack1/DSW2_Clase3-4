let stompClient;

function registration() {
    //crear objeto de SockJS para acceder al canal que se configuro en el servidor websocket
    let socket = new SockJS("/chat");

    //crear un objeto de StomJS usando el canal de comun.(socket)
    stompClient = Stomp.over(socket);

    //conectar con el servidor websocket
    stompClient.connect({}, function () {
        //registro del usuario "usar el prefijo o la ruta 'topic'"
        stompClient.subscribe("/topic/messages/" + $("#userName").val(), mensajeRecibido);
    });
}

function mensajeRecibido(response) {

}