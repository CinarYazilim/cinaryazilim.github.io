$.holdReady( true );

$(document).ready(function() {

    //alert("aaa");

    $('[data-toggle="brand"]').each(function() {
        var ele = $(this);

        $(window).on('scroll resize', function() {
            if($(this).scrollTop() > 30){
                ele.removeClass("brand-large");
                ele.addClass("brand-small");
                ele.closest("nav").addClass("nav-border");
            }else{
                ele.removeClass("brand-small");
                ele.addClass("brand-large");
                ele.closest("nav").removeClass("nav-border");
            }
        });

    });

    $('[data-toggle="tooltip"]').tooltip();
    $('.parallax-window').parallax();

});

window.toCamelCase = function(str){
    return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}
