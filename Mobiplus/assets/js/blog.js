/*const searchFocus = document.getElementById('search-focus');
const keys = [
    { keyCode: 'AltLeft', isTriggered: false },
    { keyCode: 'ControlLeft', isTriggered: false },
];

window.addEventListener('keydown', (e) => {
    keys.forEach((obj) => {
        if (obj.keyCode === e.code) {
            obj.isTriggered = true;
        }
    });

    const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

    if (shortcutTriggered) {
        searchFocus.focus();
    }
});
*/
/*var mobiplusBlog = function () {
};
$(document).ready(function () {
    if ($(".mobiplus-blog").length) {
        mobiplusBlog();
    }
});*/



$(document).ready(e => {
    $('#blog-tab-item .tab-pane.active').load('/blog/LoadTabItem', { keyTab: $('#blog-tab-item .tab-pane.active').attr('id'), num: 0 });
    console.log(1)
    $('.blog-load-more-btn').on('click', e => {
        debugger
        var ele = $(e.currentTarget);
        var num = parseInt(ele.attr('num')) + 3;
        ele.attr('num', num);

        $('#blog-tab-item .tab-pane.active').load('/blog/LoadTabItem', { keyTab: $('#blog-tab-item .tab-pane.active').attr('id'), num: num });
    });

    $('#blog-tab-nav a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        debugger
        var id = $(e.target).attr('aria-controls');
        if (id == "blog-app") {
            $('.blog-load-more-btn').attr('num', 9)
            $('#' + id).load('/blog/LoadTabItem', { keyTab: id, num: 9 });
        }
        else if (id == "blog-web") {
            $.ajax({
                url: '/blog/TabItem1',
                method: 'GET',

            })
                .done(function (data) {
                    $('#blog-web').empty();
                    $('#blog-web').append(data);
                    console.log(data)

                })
                .fail(function (data) {

                });
        }
        else if (id == "blog-all" && $('#blog-all').children().length < 2) {
            $('.blog-load-more-btn').attr('num', 9)
            $('#' + id).load('/blog/LoadTabItem', { keyTab: id, num: 9 });
            $.ajax({
                url: '/blog/TabItem1',
                method: 'GET',

            })
                .done(function (data) {

                    $('#blog-all').append(data);
                    console.log(data)

                })
                .fail(function (data) {

                });
        }

    });

    $('#blog-tab-item').on('click', '.tab_item_container', e => {
        var uuid = $(e.currentTarget).children('.tab_item').attr('uuid');
        $(`#tab_item_container_${uuid}`).attr('style', 'z-index:1;')
        goBig(uuid, [0, 10], 500, 0);

        setTimeout(e => {
            console.log(ádas);
            location.href = `/blog/Detail/${uuid}`;
        }, 200);
    });
    //$('#tag_2').on('click', function () {
    //    debugger
    //    $.ajax({
    //        url: '/blog/TabItem_1',
    //        method: 'GET',

    //    })
    //        .done(function (data) {
    //            $('#blog-web').empty();
    //            $('#blog-web').append(data);
    //            console.log(data)

    //        })
    //        .fail(function (data) {

    //        });

    //})
    function goBig(id, scale, duration, delay) {
        anime.timeline({
            targets: `#tab_item_container_${id}`,
            delay: delay,
            duration: duration
        })
            .add({
                scale: scale,
                duration: duration,
                easing: 'spring(1, 80, 10, 0)'
            }, 0)
            .add({
                opacity: [1, 0.2],
                duration: duration,
                easing: 'spring(1, 80, 10, 0)'
            }, 0);
    }
});