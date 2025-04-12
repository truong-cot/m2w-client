var mobiplusHome = function () {

    var initPagination = function () {
        if ($('body').outerWidth() < 739) {
            $(".row.h-100").removeClass("h-100").addClass("mt-4");
        }
        $(".page-pre").on('click', function () {
            var pageClick = $(".page-pre").attr("data-id");
            if (pageClick > 1) {
                $(".page-pre").attr("href", `#page-${--pageClick}`).attr('data-id', `${--pageClick}`);
                $(".page-next").attr("href", `#page-${++pageClick}`);
            }
            if (pageClick == 1) {
                $(".page-pre").attr("href", `#page-1`).attr('data-id', `1`);
                $(".page-next").attr("href", `#page-2`);
            }
        })
        $(".page-next").on('click', function () {
            var pageClick = $(".page-pre").attr("data-id");
            if (pageClick < 9) {
                $(".page-pre").attr("href", `#page-${--pageClick}`).attr('data-id', `${++pageClick}`);
                $(".page-next").attr("href", `#page-${++pageClick}`);
            }
            if (pageClick == 9) {
                $(".page-pre").attr("href", `#page-8`).attr('data-id', `8`);
                $(".page-next").attr("href", `#page-9`);
            }

        })
        $(window).scroll(function () {
            var wH = $(window).height(),
                wS = $(this).scrollTop();
            var page = Math.floor(((wS + wH / 2) / wH) + 1);

            if (page > 1 && page <= 9) {
                $(".page-pre").attr("href", `#page-${--page}`).attr('data-id', `${++page}`);
                $(".page-next").attr("href", `#page-${++page}`);
            }
        });
    }
    var talentRecruitment = function () {
        $('#carousel-1').owlCarousel({
            margin: 10,
            nav: true,
            navContainer: '#customNav',
            navText: [`<i class="fas fa-chevron-circle-left"></i>`, `<i class="fas fa-chevron-circle-right"></i>`],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }

        })
        $('#carousel-customer').owlCarousel({
            margin: 50,
            nav: true,
            navContainer: '#customNav-1',
            navText: [`<i class="fas fa-chevron-circle-left"></i>`, `<i class="fas fa-chevron-circle-right"></i>`],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 3
                }
            },
            loop: true,
            touchDrag: false,
            mouseDrag: false

        })
        $('#carousel-2').owlCarousel({
            margin: 5,
            dots: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        })

        $(".owl-item").hover(
            function () {
                $(this).find(".mw-100").attr('src', '/image/AboutUs/Customer1-1.png');
            },
            function () {
                $(this).find(".mw-100").attr('src', '/image/AboutUs/Customer1.png');
            }
        );
        $(".item-hover").hover(
            function () {
                $(this).find(".card-title-2").css('color', "#0C5ADB");
                $(this).find(".box-shadow").css('box-shadow', "0 0.25rem 0.75rem rgb(0 0 0 / 15%)");
                $(this).find(".text-more").css('color', "#0C5ADB");
                $(this).find(".blog-them").css('box-shadow', "0 0.25rem 0.75rem rgb(0 0 0 / 15%)");
                $(this).find(".blog-them").css('float', "right");
            }, function () {
                $(this).find(".card-title-2").css('color', "#343a40");
                $(this).find(".text-more").css('color', "#343a40");
                $(this).find(".box-shadow").css('box-shadow', "0 0.25rem 0.75rem rgb(0 0 0 / 5%)");
                $(this).find(".blog-them").css('float', "left");
            }
        )
        $(document).ready(function () {
            if ($('body').outerWidth() > 739) {
                $(".owl-dot").hide();
            } else {
                $(".owl-prev").hide();
                $(".owl-next").hide();
            }
            $(".owl-prev").addClass("btn btn-light rounded-circle box-shadow icon-pre");
            $(".owl-next").addClass("btn btn-light rounded-circle box-shadow icon-next");
        });

    }
    var pageSmooth = function () {
        $(".page-pre").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    window.location.hash = hash;
                });
            }
        });
        $(".page-next").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    window.location.hash = hash;
                });
            }
        });
    }
    //var animeMOTION = function () {
    //    var path = anime.path('.motion-path-demo path');

    //    anime({
    //        targets: '.motion-path-demo .planes',
    //        translateX: path('x'),
    //        translateY: path('y'),
    //        rotate: path('angle'),
    //        easing: 'easeInOutQuad',
    //        duration: 8000,
    //        scale: 2.5
    //    });
    //}
    //$(".card").hover(
    //    function () {
    //        var $this = $(this).parent().find(".img-size-icon").attr("id");
    //        RotateY($this, 500, [180, 0]);
    //    }
    //)
    var animation_CT = function () {
        var $this_img_flash = $(".img-slide").find(".img-flash").attr("id");
        var $this_img_scale = $(".img-slide").find(".img-scale").attr("id");
        var $this_img = $(".img-slide").find(".img-ball").attr("id");
        var $this2_img = $(".img-slide").find(".img-coin").attr("id");
        var $this3_img = $(".img-slide").find(".img-people").attr("id");
        var $this_billy = $(".billy-left").attr("id");
        var $this2_billy = $(".billy-right").attr("id");
        var $this3_billy = $(".billy-circle").attr("id");
        var $this4_billy = $(".billy-title").attr("id");
        var $this5_billy = $(".billy-lightning").attr("id");
        var $this6_billy = $(".billy-bag").attr("id");
        Rotate($this_img, 5000, 360);
        Scale($this_img_flash, 5000, 1000, -50, [1.5, 1])
        Scale($this_img_scale, 5000, 1500, 0, [1.5, 1])
        RotateY($this2_img, 3000, [180, 0])
        translateXY($this3_img, 5000, -100, 100)
        translateX($this_billy, 5000, 800, -100);
        translateX($this2_billy, 5000, 800, 100);
        translateX($this4_billy, 5000, 1200, 100);
        translateX($this6_billy, 5000, 800, 100);
        Rotate($this3_billy, 5000, 360);
        translateXandScale($this5_billy, 5000, 1000, -100, [1.5, 1]);
    }

    function Rotate(targets, duration, rotate) {
        anime.timeline({
            targets: `#${targets}`,
            duration: duration, // Can be inherited
            easing: 'easeInOutExpo', // Can be inherited
            loop: true
        }).add({
            rotate: rotate
        })
    }
    function RotateY(targets, duration, rotateY) {
        anime.timeline({
            targets: `#${targets}`,
            duration: duration, // Can be inherited
            easing: 'easeOutExpo', // Can be inherited
            loop: true
        }).add({
            rotateY: rotateY[0],
        }).add({
            rotateY: rotateY[1],
        })
    }
    function translateXY(targets, duration, translateX, translateY) {
        anime.timeline({
            targets: `#${targets}`,
            delay: 800,
            duration: duration
        }).add({
            translateX: [translateX, 0],
            translateY: [translateY, 0],
            duration: duration,
            easing: 'spring(1, 80, 10, 0)'
        }).add({
            opacity: [0, 1],
            duration: duration,
            easing: 'spring(1, 80, 10, 0)'
        }, 0)
    }
    function translateX(targets, duration, delay, translateX) {
        anime.timeline({
            targets: `#${targets}`,
            delay: delay,
            duration: duration
        }).add({
            translateX: [translateX, 0],
            duration: duration,
            easing: 'spring(1, 80, 10, 0)'
        }).add({
            opacity: [0, 1],
            duration: duration,
            easing: 'spring(1, 80, 10, 0)'
        }, 0)
    }
    function translateXandScale(targets, duration, delay, translateX, scale) {
        anime.timeline({
            targets: `#${targets}`,
            delay: delay,
            duration: duration,
            loop: true
        }).add({
            translateX: [translateX, 0],
            duration: duration,
            easing: 'spring(1, 80, 10, 0)'
        }).add({
            opacity: [0, 1],
            duration: duration,
            easing: 'spring(1, 80, 10, 0)'
        }, 0).add({
            scale: scale[0],
            duration: duration,
            easing: 'spring(1, 80, 10, 0)',
        }).add({
            scale: scale[1],
            duration: duration,
            easing: 'spring(1, 80, 10, 0)',
        })
    }
    function Scale(targets, duration, delay, rotate, scale) {
        anime.timeline({
            targets: `#${targets}`,
            delay: delay,
            duration: duration,
            loop: true
        }).add({
            rotate: rotate,
            duration: duration,
            easing: 'spring(1, 80, 10, 0)'
        }).add({
            opacity: [0, 1],
            duration: duration,
            easing: 'spring(1, 80, 10, 0)'
        }, 0).add({
            scale: scale[0],
            duration: duration,
            easing: 'spring(1, 80, 10, 0)',
        }).add({
            scale: scale[1],
            duration: duration,
            easing: 'spring(1, 80, 10, 0)',
        })
    }
    function translateXandRotate(targets, duration, delay, translateX, rotate) {
        anime.timeline({
            targets: `#${targets}`,
            delay: delay,
            duration: duration,
            loop: true
        }).add({
            translateX: [translateX, 0],
            duration: duration,
            easing: 'spring(1, 80, 10, 0)'
        }).add({
            opacity: [0, 1],
            duration: duration,
            easing: 'spring(1, 80, 10, 0)'
        }, 0).add({
            rotate: rotate[0],
            duration: duration,
            easing: 'easeInOutExpo'
        }).add({
            rotate: rotate[1],
            duration: duration,
            easing: 'easeInOutExpo'
        })
    }

    return {
        // Public functions
        init: function () {
            initPagination();
            talentRecruitment();
            pageSmooth();
            animation_CT();
            $('#customNav-1').on('click', function (event) {
                if ($(event.target).closest('.owl-prev').length == 1 || $(event.target).closest('.owl-next').length == 1) {
                    var arrayElement = [];
                    $('#carousel-customer').children().children().find('.owl-item').each(function (index, item) {


                        if ($(item).hasClass('active') == true)
                            arrayElement.push($(item))
                    });
                    if (arrayElement.length == 1) {
                        arrayElement[0].find('img').css('opacity', 1).css('width', 100).css('margin-top', 0);
                        var class_img = arrayElement[0].find('img').attr('class');
                        $('.get-title-customer').find('.customer-title').each(function (index, item) {
                            if ($(item).attr('class').includes(class_img) == true) {
                                $(item).show();
                            }
                            else {
                                $(item).show().hide()
                            }
                        });
                    }
                    else {
                        arrayElement[0].find('img').css('width', 60).css('margin-top', 25).css('opacity', 0.5);
                        arrayElement[1].find('img').css('width', 100).css('margin-top', 0).css('opacity', 1);
                        arrayElement[1].find('img').parent().css('padding', '0').css('margin-left', '-5');
                        arrayElement[2].find('img').css('width', 60).css('margin-top', 25).css('opacity', 0.5);
                        var class_img = arrayElement[1].find('img').attr('class');
                        debugger
                        $('.get-title-customer').find('.customer-title').each(function (index, item) {
                            if ($(item).attr('class').includes(class_img) == true) {
                                $(item).show();
                            }
                            else {
                                $(item).show().hide()
                            }
                        });
                    }


                }

            })

        },
    };
}();


$(document).ready(function () {
    if ($(".mobiplus-home").length) {
        mobiplusHome.init();

    }
});
