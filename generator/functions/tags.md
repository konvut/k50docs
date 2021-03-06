service: generator
service_name: K☆50:Генератор
last_modified: 2016-04-21

##Область применения тегов##
Тегами называются названия столбцов в файле формата CSV или названия колонки в файле формата YML.Теги могут быть использованы в нескольких разделах кампаний К50:Генератор:

- Шаблоны для ключевых слов (вкладка Ключевые слова)
- Шаблоны для текстов объявлений и заголовков (вкладка Шаблоны объявлений)
- Выражение для URL (вкладка ссылки)
- Шаблоны дополнительных ссылок (вкладка ссылки)
- Шаблоны для названия кампаний (вкладка настройки кампаний)

##Синтаксис##

1) Теги отделяются от текста знаком `#` (решетка)
**Пример:** `#vendore# #model# в наличии`
![Пример тега](/generator/functions/tegs.png)

2) При генерации кампании на место каждого тега подставляется соответствующее значение тега из фида.
**Пример:** В заголовок объявления вместо `#vendore#` подставилось `Korting`
вместо `#model#` подставилось `KAP900G`
![Пример объявления](/generator/functions/tegs1.png)

3) Выражение может состоять из нескольких тегов, текста и специальных символов, которые являются допустимыми по правилам Яндекс.Директ
**Пример:** `#vendor# #model# в наличии от #price# руб. Бесплатная доставка!`
![Пример объявления](/generator/functions/tegs2.png)

4) Для того, чтобы использовать `#` в качестве символа, а не в качестве разделителя, ее нужно экранировать, то есть `#` заменять на `\#`.
Символ `#` может понадобиться:

- в качестве хештега(якоря) в ссылке. Так например в К50:Генератор необходимо вместо адреса: `http://site/delivery/#credit` прописать адрес `http://site/delivery/\#credit`

- для использования [шаблонов Яндекс.Директ](https://yandex.ru/support/direct/features/ad-templates.xml). Пример: Для использования ключевой фразы в тексте объявления необходимо использовать конструкцию `\#Вставить ключевое слово\#`

##Список тегов##
1) Увидеть перечень тегов из фида можно:

- на странице Проекта в поле «Используемые теги»- теги подтягиваются автоматически после сохранения проекта;
![Используемые теги](/generator/functions/tegs3.png)

- на странице Кампании на вкладке «Шаблоны объявлений» и «Ключевые слова», нажав на кнопку «Теги из фида»
![Теги из фида](/generator/functions/tegs4.png)
Сюда подтягиваются значения тегов из первого оффера yml файла или из первой строки csv файла
![Теги из фида](/generator/functions/tegs5.png)