$(document).ready(function () {
    $(".setsize").each(function () {
        $(this).height($(this).width());
    });
});
$(window).on('resize', function () {
    $(".setsize").each(function () {
        $(this).height($(this).width());
    });
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})