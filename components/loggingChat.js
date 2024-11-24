// 입력한 채팅을 채팅로그에 올리는 모듈

// 실시간 온라인 채팅일 경우의 작동방식

// 1. 클라이언트에서 입력한 채팅은 이 모듈로 로그를 생성한 뒤 서버에 전송한다.
// 이 경우 사용자간 채팅 로그의 순서가 다르게 나타날수 있으나 큰 차이는 없을 것

// 2. 서버에 전송되기 전에 클라이언트 로그에 기록되는 게 맞는가?
// 사용자가 자신의 채팅이 서버로 전송 되었는지 알 수 있게, 요청 완료를 감지한 후 로그에 기록되는 게 맞는 것 같음
// 요청이 실패했을 때, 입력한 채팅이 채팅창에 나타나지 않음으로서 사용자는 자신의 채팅이 전송되지 않았음을 인지할 수 있음

const createChatBubble = (chatText) => {
    const $bubble = document.createElement("div");
    const $p = document.createElement("p");
    const text = chatText.trim();
    $p.innerText = text;

    $bubble.appendChild($p);
    return $bubble;
};

export function loggingChat(chatText) {
  return createChatBubble(chatText)
}
