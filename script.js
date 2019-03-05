$("#hide-button").click(function(){
    $("#ghost1").hide();
});
 
$("#show-button").click(function(){
    $("#ghost1").show();
});

$("#say-boo").click(function(){
    $("#text").text("Boo!");
});

$("#say-bye").click(function(){
    $("#text").text("Bye");
});

$("#make-yellow").click(function(){
    $("body").css("background-color","yellow");
});

$("#make-aqua").click(function(){
    $("body").css("background-color","aqua");
});

$("#happy-ghost").click(function(){
    $("#ghost1").atttr("src","https://www.irishtimes.com/polopoly_fs/1.3073141.1494001635!/image/image.jpg_gen/derivatives/box_620_330/image.jpg");
});

$("#cool-ghost").click(function(){
    $("#ghost1").attr("src","https://assets.teenvogue.com/photos/5887a5c6cedb26357b19500c/master/pass/snapchat-update.jpg");
});


