// 监听主线程发送的消息
self.onmessage = function(event) {
    console.log(event, '----event-----');

    // 向主线程发送消息
    self.postMessage(event + 1);
};
