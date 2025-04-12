$('#carousel-3').owlCarousel({
    margin: 10,
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
});

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