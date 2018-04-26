jQuery(document).ready(function () {

    /* debut de menudefilant */

    $('.boutonmenu').click(function () {
        if ($(".menudefilant").css("left") === '-400px') {
            $('.menudefilant').css({"left":"0px"});
        } else {
            $('.menudefilant').css({"left":"-400px"});
        }
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

    /* debut de homecontainer3 */

    

    /* fin de homecontainer3 */


});