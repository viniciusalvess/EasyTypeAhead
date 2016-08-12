function createTypeAhead(aTypeHeadId,aFuncAfterSetKey){
    var vTypeHeadId = '#'+aTypeHeadId;
    var vHiddenId = vTypeHeadId+'_key';

    var vJq = $(vTypeHeadId);
    var vSearch = vJq.data('search');
    var vDisplay = vJq.data('display');
    var vKeyField = vJq.data('key');
    var vHiddenName = vJq.data('hidden');

    if(vSearch == ''){
        console.error('Não foi encontrado valor para o atributo: data-search no typehead: '+vTypeHeadId);
    }

    if(vDisplay == ''){
        console.error('Não foi encontrado valor para o atributo: data-display no typehead: '+vTypeHeadId);
    }

    if(vKeyField == ''){
        console.error('Não foi encontrado valor para o atributo: data-key no typehead: '+vTypeHeadId);
    }

    if(vHiddenName == ''){
        console.error('Não foi encontrado o atributo: data-hidden no typehead: '+vTypeHeadId);
    }

    if($(vHiddenId).length == 0){
        vJq.after('<input id="'+aTypeHeadId+'_key" name="'+vHiddenName+'" type="hidden">');
    }

    var bestPictures = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace(vDisplay),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: vSearch,
        remote: {
            url: vSearch+'/%QUERY',
            wildcard: '%QUERY'
        },
        cache: true
    });

    vJq.typeahead(null, {
        name: 'best-pictures',
        display: vDisplay,
        source: bestPictures
    }).bind("typeahead:selected", function(obj, datum, name) {
        if(datum.hasOwnProperty(vKeyField)) {
            $(vHiddenId).val(datum[vKeyField]);
            if (typeof aFuncAfterSetKey === "function") {
                aFuncAfterSetKey(datum);
            }
        }else{
            console.error('Não foi encontrado a propriedade Key: '+vKeyField +' para o typeahead: '+vTypeHeadId);
        }
    });
}

function createTypeAheadId(aTypeHeadId){
    return createTypeAhead(aTypeHeadId,'');
}

jQuery(document).ready(function() {
	createTypeHeadId('yourInputTextId'); // here is how to setup the typehead
});