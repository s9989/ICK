$(document).ready(function () {
    $('.menu_button').on('click', function() {
        $(this).find('i').toggleClass('active');
        $('.menu').toggle();
    });
    $('.size img').on('click', function () {
        $('.size img').removeClass('selected');
        $(this).addClass('selected');
    })
});