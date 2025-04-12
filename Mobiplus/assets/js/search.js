jQuery(document).ready(function ($) {
    var wHeight = window.innerHeight;
    //search bar middle alignment
    $('#mk-fullscreen-searchform').css('top', wHeight / 2);
    //reform search bar
    jQuery(window).resize(function () {
        wHeight = window.innerHeight;
        $('#mk-fullscreen-searchform').css('top', wHeight / 2);
    });
    // Search
    $('#search-button').click(function () {
        console.log("Open Search, Search Centered");
        $(".overlay").css("display", "block");
        $(".mk-fullscreen-search-overlay").css("display", "block");
    });
    $("a.mk-fullscreen-close").click(function () {
        console.log("Closed Search");
        $(".overlay").css("display", "none");
        $(".mk-fullscreen-search-overlay").css("display", "none");
    });
    // open and close silde bar mobi
    $("#open__silde").click(function () {
        $(".mk-fullscreen-search-overlay").css("display", "block");
    });

    $("#close__silde").click(function () {
        $(".mk-fullscreen-search-overlay").css("display", "none");
    });

    // list search
    $('.live-search-list li').each(function () {
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            $(".overlay").css("display", "none");
            $(".mk-fullscreen-search-overlay").css("display", "none");
        }
    });

    $('#mk-fullscreen-search-input').on('keyup', function () {
       /* $(".live-search-list").css("opacity", "1");*/
        var searchTerm = $(this).val().toLowerCase();
       
        if (searchTerm.length != 0) {
            $(".live-search-list").css("display", "block");
            $('.live-search-list li').each(function () {
                if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                    $(this).show();
                } else {
                    $(this).hide();
                }

            });
        } else {
            $(".live-search-list").css("display", "none");
        }
       

    });
   
});
