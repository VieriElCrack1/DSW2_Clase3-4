let $chatHistory;

let $textarea;
let $chatHistoryList;

function init() {
    cacheDOM();
    bindEvents();
}

function bindEvents() {
    $(".btn-enviar-mensaje").on('click', sendMessage);
    $(".btn-enviar-mensajeServer").on('click', sendMessageServer);
    $(".btn-iniciar-cliente").on('click', registrationChat);
    $(".btn-cerrar").on('click', closeChat);
    $(".btn-refrescar").on('click', refresh);
}

function cacheDOM() {
    $chatHistory = $(".chat-history");
    $textarea = $("#message-to-send");
    $chatHistoryList = $chatHistory.find('ul');
}

function render(message, userName) {
    scrollToBottom();
    //response
    var templateResponse = Handlebars.compile($("#message-response-template").html());
    var contextResponse = {
        response: message,
        time: getCurrentTime(),
        userName: userName
    };

    setTimeout(function () {
        $chatHistoryList.append(templateResponse(contextResponse));
        scrollToBottom();
    }.bind(this), 1500);
}

function sendMessage() {
    let username = $("#userName").val();
    message = $textarea.val();
    sendMsg(username, message);

    scrollToBottom();
    if(message.trim() !== '') {
        var template = Handlebars.compile($("#message-template").html());
        var context = {
            messageOutput: message,
            time: getCurrentTime(),
            toUserName: username
        };
        $chatHistoryList.append(template(context));
        scrollToBottom();
        $textarea.val('');
    }
}

function sendMessageServer() {
    let username = $("#userName").val();
    message = $textarea.val();
    sendMsgServer(username, message);

    scrollToBottom();
    if(message.trim() !== '') {
        var template = Handlebars.compile($("#message-template").html());
        var context = {
            messageOutput: message,
            time: getCurrentTime(),
            toUserName: 'Server'
        };
        $chatHistoryList.append(template(context));
        scrollToBottom();
        $textarea.val('');
    }
}

function scrollToBottom() {
    $chatHistory.scrollTop($chatHistory[0].scrollHeight);
}

function getCurrentTime() {
    return new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
}

function registrationChat() {
    registration();
}

function closeChat() {
    disconnect();
}

function refresh() {
    fetchAll();
}

init()