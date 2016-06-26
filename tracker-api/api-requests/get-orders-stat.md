service: tracker-api
service_name: API K☆50:Трекера
last_modified: 2016-03-09

##Получении статистики по заказам

Данный метод возвращает подробную информацию о каждом заказе 


###Синтаксис запроса

>GET http://api.tracker.k50.ru/api/order/ext/**counterId**/**dateFrom**/**dateTo**

|Параметр|Описание|
|---|---|
| counterId | Идентификатор счетчика клиента |
| dateFrom | Дата начала периода выборки в формате **YYYY-MM-DD HH:MM:SS** |
|dateTo | Дата окончания периода выборки в формате **YYYY-MM-DD HH:MM:SS**|

###Пример запроса

>GET http://api.tracker.k50.ru/api/order/ext/**1169056830**/**2015-12-10 00:00:00**/**2015-12-11 00:00:00**?apiKey=**ae162273-8a98-459d-abb0-3454d0470b70**

###Формат ответа

```json
{
  "result": [
    {
      "id": <integer>,
      "date_time": <string>,
      "track_code": <integer>,
      "order_id": <integer>,
      "amount": <string>,
      "margin": <string>,
      "revenue": <string>,
      "order_type": <string>,
      "sid": <string>,
      "uuid": <string>,
      "contact_person": <string>,
      "caller_phone": <integer>,
      "email": <string>,
      "is_matching": <boolean>,
      "user_agent": <string>,
      "utm_source": <string>,
      "utm_medium": <string>,
      "utm_term": <string>,
      "utm_content": <string>,
      "utm_campaign": <string>,
      "analytics_client_id": <integer>,
      "entryPoints": [
        {
          "sid": <string>,
          "start_time": <string>,
          "entry_point": <string>,
          "referrer": <string>,
          "user_agent": <string>,
          "ip": <string>
        },
        ...
      ]
    },
    ...
  ],
  "input": {
    "counterId": <integer>,
    "from": <string>,
    "to": <string>
  },
  "errors": []
}
```

|Параметры|Описание|
|---------|--------|
|id|Внутренний идентификатор заказа|
|date_time|Дата заказа|
|track_code|Трек-код заказа, выданный кодовым трекером. Для заказов, импортированных из CRM, возвращает 0|
|order_id|Идентификатор заказа, выданный CRM|
|amount|Количество товаров, приобретенных в рамках заказа|
|margin|Маржа заказа|
|revenue|Доход от заказа|
|order_type|Тип заказа. Возможные значения: **online**, **offline**|
|sid|Идентификатор сеанса, с которым ассоциирован заказ|
|uuid|Идентификатор пользователя, с которым ассоциирован заказ|
|contact_person|Контактное лицо, указанное в заказе|
|caller_phone|Номер телефона контактного лица|
|email|E-mail контактного лица|
|is_matching|Сопоставлен ли заказ. Возможные значения: **true**,**false**|
|user_agent|User Agent, определенный в рамках ассоциированного сеанса|
|utm_source|Метка utm_source, определенная в рамках ассоциированного сеанса|
|utm_medium|Метка utm_medium, определенная в рамках ассоциированного сеанса|
|utm_term|Метка utm_term, определенная в рамках ассоциированного сеанса|
|utm_content|Метка utm_content, определенная в рамках ассоциированного сеанса|
|utm_campaign|Метка utm_campaign, определенная в рамках ассоциированного сеанса|
|analytics_client_id|Идентификатор клиента Google Analytics (client_id)|
|entryPoints|Список сеансов пользователя, совершившего заказ. Каждый сеанс задаётся в виде объекта entryPoinInfo|
|input|Список параметрах, отправленных в запросе.|
|errors|Список ошибок, возникших во время отправки запроса.|

**Объект entryPointInfo**

|Параметры|Описание|
|---------|--------|
|sid|Идентификатор сеанса|
|start_time|Дата начала сеанса|
|entry_point|Страница входа сеанса|
|referrer|Реферер сеанса|
|user_agent|User Agent, определенный в рамках посещения|
|ip|IP-адрес пользователя|

**Объект input**

|Параметры|Описание|
|---------|--------|
|counterId|Идентификатор счетчика клиента|
|from|Дата начала периода выборки|
|to|Дата окончания периода выборки|

**Объект errors**

|Параметры|Описание|
|---------|--------|
|counterId|Ошибки, связанные с идентификатором счетчика клиента|
|from|Ошибки, связанные с датой начала периода выборки|
|to|Ошибки, связанные с датой окончания периода выборки|