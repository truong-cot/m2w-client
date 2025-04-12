"use strict";
// Class definition

var intRequiment = function () {
   
    return {
        init: function () {
            $("a.Requiment").addClass("active");
            $('#requimen_zzz').load('/requiment/LoadTabItem', { keyTab: $('#requimen_zzz').attr('id') });

          /*  $('.requiment-load-more-btn').on('click', e => {
                var ele = $(e.currentTarget);
                var num = parseInt(ele.attr('num')) + 3;
                ele.attr('num', num);
                $('#requimen_zzz').load('/requiment/LoadTabItem', { keyTab: $('#requimen_zzz').attr('id'), num: num });
            });*/

           /* $(".custom-file-input").on("change", function () {
                var fileName = $(this).val().split("\\").pop();
                $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
            });*/
            $('#tuyendung').on('show.bs.modal', function (e) {
                $('body').addClass("example-open");
            }).on('hide.bs.modal', function (e) {
                $('body').removeClass("example-open");
            })
           
        },
    };
}();
$(document).ready(function () {
    if ($('.mobiplus-requiment').length) {
        intRequiment.init();
       
        $('.btn__xemthem').click(function () {
           
            var uuid = $(this).attr('data-id');
            console.log(uuid);
            location.href = `/Requiment/Detail/${uuid}`;
        })
    }
});
