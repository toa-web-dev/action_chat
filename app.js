import { ChatBubble } from "./components/ChatBubble.js";

window.onload = () => {
    initEventListener();
};
const $btn_button = document.body.querySelector(".btn_enter");
const $chat_input = document.body.querySelector("#chat_input");

/**
 * @description 이벤트리스너 초기화 함수
 */
function initEventListener() {
    $btn_button.addEventListener("click", loggingBubble);

    $chat_input.addEventListener("keydown", (e) => {
        if (e.code === "Enter" || e.code === "NumpadEnter") loggingBubble();
    });
}

//util로 모듈화하기
/**
 * @description 1. 채팅창에 ChatBubble 컴포넌트를 추가합니다.
 *              2.  입력한 텍스트 길이가 0보다 클때 ChatBubble을 추가하고 chat_input에 focus를 유지합니다.
 */
function loggingBubble() {
    const chatText = $chat_input.value;
    if (chatText.length > 0) {
        document.body.querySelector("#chat_log").appendChild(ChatBubble(chatText));
    }
    $chat_input.value = "";
    $chat_input.focus();
}
