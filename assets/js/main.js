$(document).ready(function() {
    var pin_col_counter = 1;

    $.each(dataPinterest, function(i, item) {
        $(".pines-"+pin_col_counter).append(
            '<div class="pines__single"><img class="responsive-img" src="docs/img/'+item.image_url+'">' +
            '<h4 class="pines__title">'+item.title+'</h4>' +
            '<p class="pines__subtitle">'+item.description+'</p>' +
            '<p class="pines__user">'+item.user+' @'+item.username+'</p>'+
            '<p class="pines__hashtag">#'+item.hashtag+'</p></div>'
        );
        
        if(pin_col_counter == 6) {
            pin_col_counter = 1;
        } else {
            pin_col_counter++;
        }
    });
});

