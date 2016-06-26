service: tracker
service_name: K☆50:Трекер
last_modified: 2016-06-17

#Инициализация счетчика

JavaScript-библиотека, отвечающая за работу счётчика загружается с URL https://k50-a.akamaihd.net/k50/k50tracker2.js.
Код для подключения библиотеки доступен на странице редактирования счётчика. Библиотека может быть загружена асинхронным и синхронным способом, однако, её функционал при этом остаётся неизменным.

##Пример кода отслеживания

```js
<script>
(function(c,a,p) {
var s = document.createElement(a); s.src = p; s.type = "text/javascript"; s.async =!0; s.readyState ? s.onreadystatechange = function() { if ( s.readyState === "loaded" || s.readyState === "complete" ) { s.onreadystatechange = null; c();}} : s.onload = function () {c();}; var n = document.getElementsByTagName(a)[0]; n.parentNode.insertBefore(s,n); })(function(){
    k50Tracker.init({
        siteId: 1169056832
})
},"script","https://k50-a.akamaihd.net/k50/k50tracker2.js");
</script>
```
