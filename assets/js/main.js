$(document).ready(function() {
    var pin_col_counter = 1;

    console.log("antes");
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
    console.log("despues");

    $.each(dataPinterest, function(i, item) {
        $(".pines-"+pin_col_counter).append(
            '<div class="pines__single hoverable">' +
                '<a class="pines__link modal-trigger" href="#modal-pin">' +
                    '<img class="responsive-img" src="docs/img/'+item.image_url+'">' +
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
});

