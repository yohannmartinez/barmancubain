jQuery(document).ready(function () {

    /* debut de menudefilant */
    $('.boutonmenu').click(function () {
        if ($(".menudefilant").css("left") === '-400px') {
            $('.menudefilant').css({"left":"0px"});
        } else {
            $('.menudefilant').css({"left":"-400px"});
        }
    });

    $('#goToAcceuil').click(function(){
        $(window).scrollTop(0);
        $('.menudefilant').css({"left":"-400px"});
    });

    $('#goToPres').click(function(){
        $(window).scrollTop($('.homecontainer2').offset().top +200);
        $('.menudefilant').css({"left":"-400px"});
    });

    $('#goToCocktails').click(function(){
        $(window).scrollTop($('.homecontainer3').offset().top +200);
        $('.menudefilant').css({"left":"-400px"});
    });

    $('#goToPhotos').click(function(){
        $(window).scrollTop($('.homecontainer4').offset().top );
        $('.menudefilant').css({"left":"-400px"});
    });

    $('#goToContacts').click(function(){
        $(window).scrollTop($('.homecontainer5').offset().top );
        $('.menudefilant').css({"left":"-400px"});
    });

    /* debut de menudefilant */
    

    /* debut de homecontainer */

    $('.homecontainer').height($(window).height() + "px");
    $(window).resize(function () {
        $('.homecontainer').height($(window).height() + "px");
    });

    $('.boutongodown').click(function(){
        $(window).scrollTop($('.homecontainer2').offset().top +200);
    })

    /* fin de homecontainer */

    /* debut de contact */

    $("#instagram").click(function() { window.location="https://www.instagram.com/barmancubain/"; });
    $("#facebook").click(function() { window.location="https://www.facebook.com/Barman-Cubain-1543829105704825/"; });
    $("#linkedin").click(function() { window.location="https://www.linkedin.com/in/renelier-martinez-1bb5a4127/"; });

    /* fin de contact */


});