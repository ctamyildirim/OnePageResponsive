$(document).ready(function(){


    $(document).on("click","h5.accordion_collapse_header i", (e)=>{
        $("h5.accordion_collapse_header").removeClass("active")
        var status = $(e.target).hasClass("collapsed"); 
        console.log($(e.target).parent().attr("aria-expanded"))
        status ? $(e.target).parent().removeClass("active") : $(e.target).parent().addClass("active");

    })

    $(document).on("click","#banner_bottom_prev", function(){
        $('#carousel_slide2').carousel("prev");
    })
    $(document).on("click","#banner_bottom_next", function(){
        $('#carousel_slide2').carousel("next");
    })

    $(document).on("click",".hidden_nav_button", function(){
        var menu_status = $(".hidden_mobile_nav").hasClass("d-flex");
        
        menu_status ? $(".hidden_mobile_nav").removeClass("d-flex").addClass("d-none") : $(".hidden_mobile_nav").removeClass("d-none").addClass("d-flex");


    })
})