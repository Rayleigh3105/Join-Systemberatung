var owl = $('.owl-carousel.one');
owl.owlCarousel({
    items:1,
    loop:false,
    margin:50,
    autoplay:false,
    autoplayHoverPause:true
});



var owl = $('.owl-carousel.two');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:50,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true
});

var owl = $('.owl-carousel.three');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:50,
    autoplay:false,
    autoplayHoverPause:true
});
