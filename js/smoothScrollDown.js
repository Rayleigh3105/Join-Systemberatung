$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".serviceProgrammierungPicture").offset().top},
        'slow');
});

$("li").click(function() {
    $('html,body').animate({
        scrollTop: $(".Service").offset().top},
        'slow');
});
