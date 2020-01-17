$(document).ready(function () {

    $('.menu_button').on('click', function() {
        $(this).find('i').toggleClass('active');
        $('.mask').toggle();
        $('.menu').toggle();
    });

    $('.size img').on('click', function () {
        $('.size img').removeClass('selected');
        $(this).addClass('selected');
    });

    $('.favourites .favourite').on('click', function () {
        $(this).toggleClass('selected');
    });

    $('.rate .star1').on('mouseover', function() {
        $(this).addClass('active');
    });
    $('.rate .star1').on('mouseout', function() {
        $(this).removeClass('active');
    });

    $('.rate .star2').on('mouseover', function() {
        $('.rate .star1').addClass('active');
        $(this).addClass('active');
    });
    $('.rate .star2').on('mouseout', function() {
        $('.rate .star1').removeClass('active');
        $(this).removeClass('active');
    });

    $('.rate .star3').on('mouseover', function() {
        $('.rate .star1').addClass('active');
        $('.rate .star2').addClass('active');
        $(this).addClass('active');
    });
    $('.rate .star3').on('mouseout', function() {
        $('.rate .star1').removeClass('active');
        $('.rate .star2').removeClass('active');
        $(this).removeClass('active');
    });

    $('.rate .star4').on('mouseover', function() {
        $('.rate .star1').addClass('active');
        $('.rate .star2').addClass('active');
        $('.rate .star3').addClass('active');
        $(this).addClass('active');
    });
    $('.rate .star4').on('mouseout', function() {
        $('.rate .star1').removeClass('active');
        $('.rate .star2').removeClass('active');
        $('.rate .star3').removeClass('active');
        $(this).removeClass('active');
    });

    $('.rate .star5').on('mouseover', function() {
        $('.rate .star1').addClass('active');
        $('.rate .star2').addClass('active');
        $('.rate .star3').addClass('active');
        $('.rate .star4').addClass('active');
        $(this).addClass('active');
    });
    $('.rate .star5').on('mouseout', function() {
        $('.rate .star1').removeClass('active');
        $('.rate .star2').removeClass('active');
        $('.rate .star3').removeClass('active');
        $('.rate .star4').removeClass('active');
        $(this).removeClass('active');
    });

    $('.rate .star1').on('click', function() {
        let off = false;
        if ($(this).hasClass('perm')) {
            off = true;
        }
        $('.rate i').removeClass('perm');
        if (off) return;
        $(this).addClass('perm');
    });
    $('.rate .star2').on('click', function() {
        let off = false;
        if ($(this).hasClass('perm')) {
            off = true;
        }
        $('.rate i').removeClass('perm');
        if (off) return;
        $('.rate .star1').addClass('perm');
        $(this).addClass('perm');
    });
    $('.rate .star3').on('click', function() {
        let off = false;
        if ($(this).hasClass('perm')) {
            off = true;
        }
        $('.rate i').removeClass('perm');
        if (off) return;
        $('.rate .star1').addClass('perm');
        $('.rate .star2').addClass('perm');
        $(this).addClass('perm');
    });
    $('.rate .star4').on('click', function() {
        let off = false;
        if ($(this).hasClass('perm')) {
            off = true;
        }
        $('.rate i').removeClass('perm');
        if (off) return;
        $('.rate .star1').addClass('perm');
        $('.rate .star2').addClass('perm');
        $('.rate .star3').addClass('perm');
        $(this).addClass('perm');
    });
    $('.rate .star5').on('click', function() {
        let off = false;
        if ($(this).hasClass('perm')) {
            off = true;
        }
        $('.rate i').removeClass('perm');
        if (off) return;
        $('.rate .star1').addClass('perm');
        $('.rate .star2').addClass('perm');
        $('.rate .star3').addClass('perm');
        $('.rate .star4').addClass('perm');
        $(this).addClass('perm');
    });
});