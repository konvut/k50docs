service: tracker-api
service_name: API K☆50:Трекера
last_modified: 2016-03-09

##Получение статистики по звонкам

Данный метод возвращает подробную информацию о звонках за указанный период. Для звонков по номерам из динамического пула также предоставляется информация о каждом визите пользователя. 


###Синтаксис запроса

>GET http://api.tracker.k50.ru/api/call/ext/**counterId**/**dateFrom**/**dateTo**

|Параметр|Описание|
|---|---|
| counterId | Идентификатор счетчика клиента |
| dateFrom | Дата начала периода выборки в формате **YYYY-MM-DD HH:MM:SS** |
|dateTo | Дата окончания периода выборки в формате **YYYY-MM-DD HH:MM:SS**|

###Пример запроса

>GET http://api.tracker.k50.ru/api/call/ext/**1169056830**/**2015-12-10 00:00:00**/**2015-12-11 00:00:00**?apiKey=**ae162273-8a98-459d-abb0-3454d0470b70**

###Формат ответа

```json
[
  {
    "id": <integer>,
    "start_time": <string>,
    "stop_time": <string>,
    "caller_phone": <integer>,
    "called_phone": <integer>,
    "duration": <integer>,
    "count_call": <integer>,
    "is_matching": <boolean>,
    "sid": <string>,
    "uuid": <string>,
    "user_agent": <string>,
    "utm_source": <string>,
    "utm_medium": <string>,
    "utm_term": <string>,
    "utm_content": <string>,
    "utm_campaign": <string>,
    "label": <string>,
    "type": <integer>,
    "analytics_client_id": <integer>,
    "entryPoints": [
      {
        "sid": <string>,
        "start_time": <string>,
        "entry_point": <string>,
        "referrer": <string>,
        "label": <string>
      },
      ...
    ]
  }
]  
```

|Параметры|Описание|
|---------|--------|
|id|идентификатор звонка|
|start_time|Дата начала звонка|
|stop_time|Дата начала звонка|
|caller_phone| Номер телефона клиента|
|called_phone|Номер назначения|
|duration|Длительность звонка, в секундах|
|count_call|Порядковый номер звонка|
|is_matching|Сопоставлен ли звонок. Возможные значения: **true**,**false**|
|sid|Идентификатор сеанса, с которым ассоциирован звонок|
|uuid|Идентификатор пользователя, с которым ассоциирован звонок|
|user_agent|User Agent, определенный в рамках ассоциированного сеанса|
|utm_source|Метка utm_source, определенная в рамках ассоциированного сеанса|
|utm_medium|Метка utm_medium, определенная в рамках ассоциированного сеанса|
|utm_term|Метка utm_term, определенная в рамках ассоциированного сеанса|
|utm_content|Метка utm_content, определенная в рамках ассоциированного сеанса|
|utm_campaign|Метка utm_campaign, определенная в рамках ассоциированного сеанса|
|label|Пользовательская метка, определенная в рамках ассоциированного сеанса|
|type|Типа звонка. Возможные значения: **1** - звонок ассоциировали с конкретным сеансом, **2** - звонок ассоциировали с метками по умолчанию (не удалось определить сеанс)|
|analytics_client_id|Идентификатор клиента Google Analytics (client_id)|
|entryPoints|Список сеансов пользователя, совершившего звонок. Каждый сеанс задаётся в виде объекта entryPoinInfo|

**Объект entryPointInfo**

|Параметры|Описание|
|---------|--------|
|sid|Идентификатор сеанса|
|start_time|Дата начала сеанса|
|entry_point|Страница входа сеанса|
|referrer|Реферер сеанса|
|label|Пользовательская метка, заданная в посещении|

