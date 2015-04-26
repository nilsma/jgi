$(document).ready(function() {
    $("td.toggleDetails").mouseenter(function() {
        $(this).parent().children(3).children("div").css('display', 'block');
        $(this).parent().children(3).children("div").css('z-index', '2');
        $(this).parent().css('position', 'relative');
    }).mouseleave(function() {
        $(this).parent().children(3).children("div").css('display', 'none');
        $(this).parent().children(3).children("div").css('z-index', '-1');
        $(this).parent().css('position', 'static');
    });
});