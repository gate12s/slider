// $('.owl-carousel').owlCarousel({
//     loop:false,
//     margin:10,
//     nav:true,
//     dots:true,
//     autoplay:true,
//     autoplayTimeout: 2000,
//     autoplayHoverPause: true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })
$('.owl-carousel').owlCarousel({
    items:5,
    loop:true,
    margin:10,
    merge:true,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    }
});