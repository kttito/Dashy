// sidebar toggle

$(function() {
    function responsiveView() {
        var wSize = $(window).width();
        if (wSize <= 768) {
            $('#container').addClass('sidebar-close');
            $('#sidebar > ul').hide();
        }

        if (wSize > 768) {
            $('#container').removeClass('sidebar-close');
            $('#sidebar > ul').show();
        }
    }
    $(window).on('load', responsiveView);
    $(window).on('resize', responsiveView);
});

$('.fa-bars').click(function () {
    if ($('#sidebar > ul').is(":visible") === true) {
        $('#main-content').css({
            'margin-left': '0px'
        });
        $('#sidebar').css({
            'margin-left': '-210px'
        });
        $('#sidebar > ul').hide();
        $("#container").addClass("sidebar-closed");
    } else {
        $('#main-content').css({
            'margin-left': '210px'
        });
        $('#sidebar > ul').show();
        $('#sidebar').css({
            'margin-left': '0'
        });
        $("#container").removeClass("sidebar-closed");
    }
});

$(document).ready(function()) {
    $('#sidebar ul.sidebar-menu li a').click(function()) {
        $('#sidebar ul.sidebar-menu li a').removeClass('active');
        $(this).addClass('active'),
    });
});