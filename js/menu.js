$(document).ready(function(){
    var width = $(window).width();
    var bars = $(".navbar-toggle");
    console.log("Width:" + $(window).width());
    
    // Check width on load
    if (width < 768 && (bars.hasClass("gone"))) {
        bars.removeClass("gone");
        console.log("added");
    }
    else if (width >= 768 && !bars.hasClass("gone")) {
        bars.addClass("gone");
        console.log("removed");
    }
    
    // Update on resize
    $(window).resize(function() {
        width = $(window).width();
        console.log("Width:" + $(window).width());
        
        // Check on width
        if (width < 768 && bars.hasClass("gone")) {
            bars.removeClass("gone");
            console.log("added");
        }
        else if (width >= 768 && !bars.hasClass("gone")) {
            bars.addClass("gone");
            console.log("removed");
        }
    })
    
    // On navbar button press
    $(".bar-button").click(function(e) {
        e.preventDefault();
        bars.addClass("gone");
        $("#wrapper").toggleClass("toggled");
        
        console.log($("#wrapper").attr("class"));
    });    
    
    // On Sidebar close
    $(".sidebar-cerrar").click(function(e) {
        e.preventDefault();
        bars.removeClass("gone");
        $("#wrapper").toggleClass("toggled");
        
        console.log($("#wrapper").attr("class"));
    });    
})