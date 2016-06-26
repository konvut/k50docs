service: tracker-api
service_name: API K☆50:Трекера
last_modified: 2016-03-09

##Авторизация по токену

Авторизация по токену позволяет обращаться к API от имени любого пользователя, который разрешил доступ к своим проектам. В запросе указывают ключ token — [авторизационный токен](token_creation), созданный пользователем в <a href="https://passport.k50.ru" target="_blank">passport.k50.ru</a>.
Токен необходимо передавать для каждого метода в HTTP-заголовке `apiKey` или в параметрах URL.

### Пример запроса с токеном в заголовках


>**Request URL**: "http://api.tracker.k50.ru/api/me"
>**Request Method**:GET
>
>**Request Headers**:
>**apiKey**: `8dc57515-2c3d-4ebe-o845-vzd663e59c709`
>**Content-Type**:application/json


### Пример запроса с токеном в параметрах URL

>**Request URL**: "http://api.tracker.k50.ru/api/me?apiKey= `8dc57515-2c3d-4ebe-o845-vzd663e59c709`"
>**Request Method**:GET
>
>**Request Headers**:
>**Content-Type**:application/json
