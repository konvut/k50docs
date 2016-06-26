service: tracker
service_name: K☆50:Трекер
last_modified: 2016-03-09

#Интеграция с Google Analytics

Вы можете настроить отправку звонков и заказов в Google Analytics.

##Настройка интеграции

Для этого необходимо указать идентификаторы счетчиков, в которые вы желаете отправлять данные и что вы хотите туда отправлять (например, только уникальные звонки). Далее трекер начнет автоматически собирать информацию об идентификаторе клиента, выданный Google Analytics пользователям и отправлять события в GA события.
Такой способ интеграции позволяет анализировать данные с привязкой к пользователям Google Analytics, смотреть отчеты в разрезе регионов, браузеров, ключевых слов и формировать списки ремаркетинга для AdWords.

!!! important "Обратите внимание"
    Привязка данных к пользователям Google Analytics осуществляется только для звонков и заказов, ассоциированных с посещением в трекере.
    Так, звонки с динамических пулов номеров будут передаваться с привязкой к client_id Google Analytics. Звонки со статических пулов - будут отправляться без привязки к существующим client_id и будут трактоваться GA как новые пользователи 

##Значения событий по умолчанию

**Звонки**

|Параметр|Значение|
|----|----|
|category|K50Tracker|
|action|call|
|label|all|

**Уникальные звонки**

|Параметр|Значение|
|----|----|
|category|K50Tracker|
|action|call|
|label|unique|