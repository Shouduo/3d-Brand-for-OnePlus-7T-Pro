$(function() {
  $(".brand").mouseenter(function() {
    var thisPX = $(this).offset().left;
    var thisPY = $(this).offset().top;
    var boxWidth = $(this).outerWidth();
    var boxHeight = $(this).outerHeight();
    $(this).addClass("threeD");
    $(".threeD").mousemove(function(event) {
      var mouseX = event.pageX - thisPX;
      var mouseY = event.pageY - thisPY;
      var X = mouseX - boxWidth/2;
      var Y = boxHeight/2 - mouseY;
      $(".threeD").css({
        "-webkit-transform": "rotateY(" + X / 56 + "deg) " + "rotateX(" + Y / 23 + "deg)"
      });
    });
  });
  $(".brand").mouseleave(function() {
    $(this).removeClass("threeD");
    $(this).css({
      "-webkit-transform": "rotateY(0deg) rotateX(0deg)"
    });
  });
});