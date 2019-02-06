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
$('.owl-one').owlCarousel({
    loop: true,
    margin: 82,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})
$('.owl-two').owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 320,
    isFitWidth: true
});

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = mm + '/' + dd + '/' + yyyy;

$('.todayDate').text(today);
