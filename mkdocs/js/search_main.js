require([
    '/mkdocs/js/mustache.min.js',
    '/mkdocs/js/lunr-0.5.7.min.js',
    '/mkdocs/js/lunr.stemmer.support.js',
    '/mkdocs/js/lunr.ru.js',
    'text!search-results-template.mustache',
    'text!../search_index.json',
], function (Mustache, lunr, stemmerSupport, ru, results_template, data) {
   "use strict";
    stemmerSupport(lunr);
    ru(lunr)
    function getSearchTerm()
    {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == 'q')
            {
                return decodeURIComponent(sParameterName[1].replace(/\+/g, '%20'));
            }
        }
    }

    var index = lunr(function () {
        this.use(lunr.ru);
        this.field('title', {boost: 10});
        this.field('text');
        this.ref('location');
    });

    data = JSON.parse(data);
    var documents = {};

    for (var i=0; i < data.docs.length; i++){
        var doc = data.docs[i];
        doc.location = 'http://help.k50.ru' + doc.location;
        index.add(doc);
        documents[doc.location] = doc;
    }

    var search = function(){

        var query = document.getElementById('mkdocs-search-query').value;
        var search_results = document.getElementById("mkdocs-search-results");
        while (search_results.firstChild) {
            search_results.removeChild(search_results.firstChild);
        }

        var results = index.search(query);

        if (results.length > 0){
            for (var i=0; i < results.length; i++){
                var result = results[i];
                doc = documents[result.ref];
                doc.base_url = base_url;
                doc.summary = doc.text.substring(0, 200);
                var html = Mustache.to_html(results_template, doc);
                search_results.insertAdjacentHTML('beforeend', html);
            }
        } else {
            search_results.insertAdjacentHTML('beforeend', '<div class="products row"><div class="item col-6"><a href="http://help.k50.ru/optimisator"><div class="product-title col-12">K☆50:Оптимизатор</div><div class="product-description col-11">Оптимизируйте рекламные кампании с помощью Статистики, Правил и Стратегий K☆50</div></a></div><div class="item col-6"><a href="http://help.k50.ru/generator"><div class="product-title col-12">K☆50:Генератор</div><div class="product-description col-11">Автоматически генерируйте и обновляйте рекламные кампании на основе товарного фида</div></a></div></div><div class="products row"><div class="item col-6"><a href="http://help.k50.ru/tracker"><div class="product-title col-12">K☆50:Трекер</div><div class="product-description col-11">Отслеживайте источники звонков, offline и online заказов</div></a></div><div class="item col-6"><a href="http://help.k50.ru/tracker-api col-12"><div class="product-title col-11">API K☆50:Трекера</div><div class="product-description">Используйте данные о звонках и заказах из K☆50:Трекера в своих сервисах</div></a></div></div>');
        }

        if(jQuery){
            /*
             * We currently only automatically hide bootstrap models. This
             * requires jQuery to work.
             */
            jQuery('#mkdocs_search_modal a').click(function(){
                jQuery('#mkdocs_search_modal').modal('hide');
            })
        }

    };

    var search_input = document.getElementById('mkdocs-search-query');

    var term = getSearchTerm();
    if (term){
        search_input.value = term;
        search();
    }

    search_input.addEventListener("keyup", search);

});
