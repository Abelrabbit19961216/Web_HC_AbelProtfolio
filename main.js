$("#banner").slick({
    dots:true,
    autoplay:true,
    autoplaySpeed: 1500
});

$("#works").slick({
    slidesToShow: 3,
    slidesToScroll:2,
    
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings :{
                slidesToShow: 3,
                slidesToScroll: 1 
            }
        }
    ]
});
    