// $(document).ready(function () {
//     $(window).scroll(function () {
//         // sticky navbar on scroll script
//         if (this.scrollY > 20) {
//             $('.header').addClass("sticky");
//         } else {
//             $('.navbar').removeClass("sticky");
//         }

//     });
        // scroll-up button show/hide script
        // if(this.scrollY > 500){
        //     $('.scroll-up-btn').addClass("show");
        // }else{
        //     $('.scroll-up-btn').removeClass("show");
        // }

    // https:github.com/mattboldt/typed.js
    let typed = new Typed(".text", {
        strings: ["Frontend Developer", "Web Developer", "Graphic Designer"],
        typedSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    })

    $(document).ready(function() {
        $(window).scroll(function(){
            if (this.scrollY > 20){
                $('.header').addClass("sticky");
            } else{
                $('.header').removeClass("sticky");

            }
            if(this.scrollY > 500){
                $('.scroll-up-btn').addClass("show");
            }else{
                $('.scroll-up-btn').removeClass("show");
            }
        });
        
        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0});
            $('html').css({"scrollBehavior": "auto"});

        });

        $('.navbar a').click(function(){
            $('html').css({"scrollBehavior": "smooth"})
        });
        $(".menu-btn").click(function(){
            $('.navbar .menu').toggleClass("active")
            $('.menu-btn i').toggleClass("active")
        });
        $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                600:{
                    items: 2,
                    nav: false
                },
                1000:{
                    items: 3,
                    nav: false
                }
            }
        });
        
    });
  
  

    // // toggle menu/navbar script
    // $('.menu-btn').click(function(){
    //     $('.navbar .menu').toggleClass("active");
    //     $('.menu-btn i').toggleClass("active");