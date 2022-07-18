export function setOwlCarousel() {
    $('.owl-carousel').owlCarousel({
        items:1,
        margin:10,
        nav:true,
        dots: false,
        loop:true,
        smartSpeed:1000,
        autoplay:true,
        autoplaySpeed: 4000,
        autoplayTimeout: 8000,
        autoplayHoverPause:true
    })
}