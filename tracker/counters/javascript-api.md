service: tracker
service_name: K☆50:Трекер
last_modified: 2016-03-09

#Список Javascript методов

##init
Инициализирует счетчик с заданнымим параметрами. 

```js
init({
      siteId:<integer>,
      landing:<string>,
      domReady:<string>,
      label:<string>
     })
```

**Жирным** обозначены обязательные параметры.

|Параметр|Описание|
|-----|----|
|**siteId**|Идентификатор счетчика. Обязательный параметр|
|landing|URL страницы. Позволяет перезаписывать URL, определенный по умолчанию|
|label|Пользовательская метка. Любой параметр, который вы хотите передать в счетчик, чтобы его использовать в трекер. Например, можно передавать регион.|
|domReady|Если указано значение k50BeforeDomReady, то номера будут подменяться до загрузки DOM. По умолчанию номера подменяются после загрузку DOM|
|callback|Функция, которая будет вызвана после инициализации счетчика. Например, можно записать идентификатор текущего сеанса, выданный трекером|

**Пример**

```js
<script>
(function(c,a,p) {
var s = document.createElement(a); s.src = p; s.type = "text/javascript"; s.async =!0; s.readyState ? s.onreadystatechange = function() { if ( s.readyState === "loaded" || s.readyState === "complete" ) { s.onreadystatechange = null; c();}} : s.onload = function () {c();}; var n = document.getElementsByTagName(a)[0]; n.parentNode.insertBefore(s,n); })(function(){
    k50Tracker.init({
        siteId: 1234567,
        landing: 'test.ru',
        label: 'msk',
        domReady:'k50BeforeDomReady',
        callback: function(e){/*your code here*/}
})
},"script","https://k50-a.akamaihd.net/k50/k50tracker2.js");
</script>
```


##change
Принудительно запускает подмену номеров. Используется при загрузке контента с номерами телефонов с помощью ajax.

```js
change()
```

**Пример**

```js
<script>
k50Tracker.change();
</script>
```

##getResultData
Возвращает идентификаторы сеанса и пользователя, а также список выданных номеров пользователю (при использовании коллтрекинга)

```js
getResultData()
```

**Пример**

```js
<script>
k50Tracker.getResultData();
</script>
```

Возращаемые параметры

```json
{
sid: <string>,
uuid: <string>,
phones: [
          {
            number: <integer>,
            number_formatted: <string>
          },
          ...
        ]
}
```

|Параметр|Описание|
|----|----|
|sid|Идентификатор сеанса|
|uuid|Идентификатор пользователя|
|phones|Список номеров телефонов, зарезервированных за пользователем. Каждый телефон задаётся в виде объекта phoneInfo|

**Объект phoneInfo**

|Параметр|Описание|
|----|----|
|number|Номер телефон в формате **7XXXXXXXXXX**|
|number_formatted|Номер телефона в заданном форматировании. Например, **+7 (XXX) XXX-XX-XX**|