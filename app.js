import { loggingChat } from "./components/loggingChat.js";

window.onload = () => {
    const $btn_button = document.body.querySelector(".btn_enter");
    const $chat_input = document.body.querySelector("#chat_input");
    $btn_button.addEventListener("click", () => {
        const chatText = $chat_input.value;
        document.body.querySelector("#chat_log").appendChild(loggingChat(chatText));
        $chat_input.value = "";
    });
};
