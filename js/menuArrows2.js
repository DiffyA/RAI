$(document).ready(function(){
    var width = $(window).width();
    var arrow = $(".glyph-arrow");
    var arrowLeft = " <span class='glyphicon glyphicon-chevron-left'></span>";
    var arrowRight = " <span class='glyphicon glyphicon-chevron-right'></span>";
    var stringLeft = "glyphicon-chevron-left";
    var stringRight = "glyphicon-chevron-right";
    
    $(arrow).append(arrowRight);
    $(arrow).children("span").remove();
    
    console.log("Width:" + $(window).width());
    
    // Check width on load
    if (width < 768 ) {
        $(arrow).append(arrowLeft);
    }
    else if (width >= 768) {
        $(arrow).append(arrowRight);
    }
    
    // Update on resize
    $(window).resize(function() {
        width = $(window).width();
        console.log("Width:" + $(window).width());
        
        // Check on width
        if ((width < 768) && (arrow.find("span").attr("class").split(" ")[1] == stringRight)) {
            $(arrow).children("span").remove();
            $(arrow).append(arrowLeft);
            console.log("Hey!");
        }
        else if ((width >= 768) && (arrow.find("span").attr("class").split(" ")[1] == stringLeft)) {
            $(arrow).children("span").remove();
            $(arrow).append(arrowRight);
            console.log("Ho!");
        }
    })
    
    // On arrow toggle
    arrow.click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        
        // If right arrow is currently displayed
        if (arrow.find("span").attr("class").split(" ")[1] == stringRight) {
            $(arrow).children("span").remove();
            $(arrow).append(arrowLeft);
        }
        else if (arrow.find("span").attr("class").split(" ")[1] == stringLeft) {
            $(arrow).children("span").remove();
            $(arrow).append(arrowRight);
        }
        
        
        console.log($("#wrapper").attr("class"));
    });    
    
    // On Sidebar close
/*    $(".sidebar-cerrar").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        
        console.log($("#wrapper").attr("class"));
    }); */   
})