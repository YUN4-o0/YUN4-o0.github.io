// JavaScript Document
$(function () {
  
 $('.close-button').on("click", function () {
   $('.header nav').slideUp();
 });
 $('.open-button').on("click", function () {
    $('.header nav').slideDown();
 });

//スプラッシュスクリーン
  $(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');
  $("#splash_text").delay(1100).fadeOut('slow');
  });
});