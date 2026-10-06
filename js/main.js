// 我的第一个 JavaScript 文件

// 功能一：实时时钟，每秒刷新页面上的时间
function updateClock() {
    var now = new Date();
    var clock = document.getElementById('clock');
    clock.textContent = now.toLocaleString('zh-CN');
}
setInterval(updateClock, 1000); // 每隔 1 秒执行一次
updateClock();                  // 页面打开时先显示一次

// 功能二：点击按钮，输出欢迎语
document.getElementById('btnHello').addEventListener('click', function () {
    var output = document.getElementById('output');
    output.textContent = '你好！欢迎来到2408090602033胡扬健的第一个网页，现在是 ' +
        new Date().toLocaleTimeString('zh-CN') + '，祝你学习愉快！';
});
