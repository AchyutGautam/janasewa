$('#car1').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true
        },
        600:{
            items:3,
            nav:false,
            loop:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// $('#car2').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true,
//             loop:true
//         },
//         600:{
//             items:3,
//             nav:false,
//             loop:true
//         },
//         1000:{
//             items:3,
//             nav:true,
//             loop:true
//         }
//     }
// })
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })


// $('#car3').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true,
//             loop:true
//         },
//         600:{
//             items:3,
//             nav:false,
//             loop:true
//         },
//         1000:{
//             items:3,
//             nav:true,
//             loop:true
//         }
//     }
// })
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })


$('#car4').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true
        },
        600:{
            items:2,
            nav:false,
            loop:true
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
})
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})



//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


AOS.init({
    duration: 1200,
});






