$(document).ready(function() {
    var pin_col_counter = 1;

    $.each(dataPinterest, function(i, item) {
        $(".pines-"+pin_col_counter).append(
            '<div class="pines__single"><img class="responsive-img" src="docs/img/'+item.image_url+'">' +
            '<h4>'+item.title+'</h4>' +
            '<p>'+item.description+'</p>' +
            '<p>'+item.user+' '+item.username+'</p></div>'
        );
        
        if(pin_col_counter == 6) {
            pin_col_counter = 1;
        } else {
            pin_col_counter++;
        }
    });
});

