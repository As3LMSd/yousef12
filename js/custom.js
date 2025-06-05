$(function(){



// $(window).on("scroll",function(){
//     console.log($(window).scrollTop());
// });

// $(window).on("scroll",function(){
//     if($(window).scrollTop()>=100){
//         $(".top").animate({
//             opacity:"1"
//         },500)
//         else{
//             $(".top").animate({
//                 opacity:"0"
//             },500)
//         }
//     }
// })

// $(".top").on("click",function(){
//     $("html").animate({
//         scrollTop:"0"
//     },1000)
// })


// $('.js-example-basic-single').select2();
// $(".bars").on("click",function(){
// $(".bars").hide(".b")
// })


})

$(window).on("load",function(){
    $(".lds-hourglass").fadeOut(500,function(){
        $(this).parent().fadeOut(500,function(){
            $(this).remove();
        });
     })
    })