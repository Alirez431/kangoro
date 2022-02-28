$(document).ready(function(){
//    $("body").mouseenter(function(){
//        $(".mian").hide(1000);
//    });
//     $(window).scroll(function(){
//         if ($(window).scrollTop()>50){
//             $(".mian").show(2000);
//         };
//     });



//     $("body").mouseenter(function(){
//         $(".coment").hide(1000);
//     });
//      $(window).scroll(function(){
//          if ($(window).scrollTop()>500){
//              $(".coment").show(2000);
//          };
//      });

     


//      $("body").mouseenter(function(){
//         $(".help").hide(1000);
//     });
//      $(window).scroll(function(){
//          if ($(window).scrollTop()>900){
//              $(".help").show(2000);
//          };
//      });

     



//      $("body").mouseenter(function(){
//         $(".singup").hide(1000);
//     });
//      $(window).scroll(function(){
//          if ($(window).scrollTop()>1200){
//              $(".singup").show(2000);
//          };
//      });
     


//      $("body").mouseenter(function(){
//         $(".footer").hide(1000);
//     });
//      $(window).scroll(function(){
//          if ($(window).scrollTop()>1500){
//              $(".footer").show(2000);
//          };
//      });

     



var scrolling = false;
   $(window).on('scroll', function(){
      if( scrolling ) {
         scrolling = true;
         (window.requestAnimationFrame)
            ? setTimeout(autoHideHeader, 500)
            : requestAnimationFrame(autoHideHeader);
      }
});































});