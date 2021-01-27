$(function(){
    $(".btn1").click(function(){
        $("div").addclass("new");

    });
});
$(function(){
    $(".btn2").click(function(){
        $("div").toggleClass("new");
    });
});