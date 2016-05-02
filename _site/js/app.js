(function() {

    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    }

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            if($(this).hasClass('is-active')){
              $(this).removeClass('is-active');
              $('.navigation').removeClass('open');
            }else{
              $(this).addClass('is-active');
              $('.navigation').addClass('open');
            }
        });
    }

})();

$(window).scroll(function(e, data) {
    var windowScroll = $(this).scrollTop();
    console.log(windowScroll);
    $('.brush').css({
        'transform': 'translate(0px, ' + windowScroll / 3 + '%)'
    });
    $('#greeting').css({
        'transform': 'translate(0px, ' + windowScroll / 1 + '%)'
    });

    if (windowScroll >= 300) {
        console.log("bro beans");
        $('nav').addClass('tinted-nav');
    } else {
        $('nav').removeClass('tinted-nav');
    }
});

$(document).ready(function() {
    var horizontalCenter = Math.floor(window.innerWidth / 2);
    var verticalCener = Math.floor(window.innerHeight / 2);
    console.log(horizontalCenter + " is horizontalCenter and " + verticalCener + " is vertial");

});
