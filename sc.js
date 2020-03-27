// $(document).ready(function(){
//     $(".btn1").click(function(){
//         $("p").hide();
//     });
//     $(".btn2").click(function(){
//         $("h1").hide();
//     });
//     $(".btn3").click(function(){
//         $("p").show();
//     });
//     $(".btn4").click(function(){
//         $("h1").show();
//     });
// });

$(function(){
    $(".info").hide();
    $(".btn3").click(function(){
        $("img").hide();
        $(".info").show();
    });
    $(".btn4").click(function(){
        $(".info").hide();
        $("img").show();
    });
});
