$(document).ready(function() {
    $("td.toggleDetails").mouseenter(function() {
        $(this).parent().children(3).children("div").css('display', 'block');
    }).mouseleave(function() {
        $(this).parent().children(3).children("div").css('display', 'none');
    });
});