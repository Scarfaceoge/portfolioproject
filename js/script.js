$(function(){
    $(".carousel").carousel({interval: 4000, pause:"false"});
    $(".carousel-inner").click(function(){
        if($("#carouselButton").children("i").hasClass("fa-pause")){
            $("#homeCarousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
            $("#carouselButton").removeClass("d-none");
            $("#carouselButton").addClass("d-block");
        } else {
            $("#homeCarousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
            $("#carouselButton").removeClass("d-block");
            $("#carouselButton").addClass("d-none");
        }
    });
    $("#carouselButton").click(function(){
        $("#homeCarousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
            $("#carouselButton").removeClass("d-block");
            $("#carouselButton").addClass("d-none");
    })
});