$(document).ready(function() {
    var pin_col_counter = 1;
    var ultimaImgCargada = 0;

    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            /*console.log(modal, trigger);*/
        },
        complete: function() {
        } // Callback for Modal close
    });

    function cargaPinesEnHtml(){
        var arrayDeImagenes = dataPinterest.slice(ultimaImgCargada, ultimaImgCargada+20);
        
        $.each(arrayDeImagenes, function(i, item) {
            ultimaImgCargada = item.id;

            $(".pines-"+pin_col_counter).append(
                '<div class="pines__single hoverable">' +
                    '<a class="pines__link modal-trigger" href="#modal-pin">' +
                        '<img class="responsive-img" src="dist/css/img/'+item.image_url+'">' +
                        '<h4 class="pines__title">'+item.title+'</h4>' +
                        '<p class="pines__subtitle">'+item.description+'</p>' +
                        '<p class="pines__user">'+item.user+' @'+item.username+'</p>'+
                        '<p class="pines__hashtag">#'+item.hashtag+'</p>' +
                    '</a>' +
                '</div>'
                
            );
            
            if(pin_col_counter == 6) {
                pin_col_counter = 1;
            } else {
                pin_col_counter++;
            }
        });
    }

    cargaPinesEnHtml();

    $(window).scroll(function(){
        var scrollDesdeElInicio = $(window).scrollTop();
        var altoDeVentana = $(window).height();
        var altoDelDocumentoCompleto = $(document).height();

        if ((scrollDesdeElInicio + altoDeVentana) == altoDelDocumentoCompleto){
            cargaPinesEnHtml();
        }
    });
});

