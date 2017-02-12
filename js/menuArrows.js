$(document).ready(function(){
    var width = $(window).width();
    var arrow = $(".glyph-arrow");
    
    console.log("Width:" + $(window).width());
    
    // Check width on load
    if (width < 768 && (arrow.hasClass("mirror"))) {
        arrow.removeClass("mirror");
    }
    else if (width >= 768 && !arrow.hasClass("mirror")) {
        arrow.addClass("mirror");
    }
    
    // Update on resize
    $(window).resize(function() {
        width = $(window).width();
        console.log("Width:" + $(window).width());
        
        // Check on width
        if (width < 768 && arrow.hasClass("mirror")) {
            arrow.removeClass("mirror");
        }
        else if (width >= 768 && !arrow.hasClass("mirror")) {
            arrow.addClass("mirror");
        }
    })
    
    // On navbar button press
    arrow.click(function(e) {
        arrow.toggleClass("mirror");
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        
        console.log($("#wrapper").attr("class"));
    });    
    
    // On Sidebar close
/*    $(".sidebar-cerrar").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        
        console.log($("#wrapper").attr("class"));
    }); */   
})