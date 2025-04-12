


$(document).ready(e => {
    $('#project-tab-item .tab-pane.active').load('/Project/LoadTabItem', { keyTab: $('#project-tab-item .tab-pane.active').attr('id'), num: 9 });

    $('.project-load-more-btn').on('click', e => {
        var ele = $(e.currentTarget);
        var num = parseInt(ele.attr('num')) + 3;
        ele.attr('num', num);

        $('#project-tab-item .tab-pane.active').load('/Project/LoadTabItem', { keyTab: $('#project-tab-item .tab-pane.active').attr('id'), num: num });
    });

    $('#project-tab-nav a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var id = $(e.target).attr('aria-controls');
        $('.project-load-more-btn').attr('num', 9)
        $('#' + id).load('/Project/LoadTabItem', { keyTab: id, num: 9 });
    });

    $('#project-tab-item').on('click', '.tab_item_container', e => {
        var uuid = $(e.currentTarget).children('.tab_item').attr('uuid');
        //$(`#tab_item_container_${uuid}`).attr('style', 'z-index:1;')
        //goBig(uuid, [0, 10], 500, 0);

        setTimeout(e => {
            location.href = `/Project/Detail/${uuid}`;
        }, 200);
    });

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