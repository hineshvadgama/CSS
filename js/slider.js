$(document).ready(function(){

  var position = 1;
  var autoMove = true;

  $("#tabLeft").css("background-color", "green");

  $("#tabLeft").click(function(){
    $(".viewingContainer").animate({scrollLeft: 0},500);
    position = 1;
  });

  $("#tabCentre").click(function(){
    var width = $(".viewingContainer").width();
    $(".viewingContainer").animate({scrollLeft: width},500);
    position = 2;
  });

  $("#tabRight").click(function(){
    var width = $(".viewingContainer").width();
    var a = width * 2;
    $(".viewingContainer").animate({scrollLeft: a},500);
    position = 3;
  });

  $("#leftArrow").click(function(){
    var leftPos = $('.viewingContainer').scrollLeft();
    var width = $(".slider1").width();
    $(".viewingContainer").animate({scrollLeft: leftPos - width}, 500);
    if (position != 1) {
      position = position - 1;
    } else {
      position = position;
    }
  });

  $("#rightArrow").click(function(){
    var leftPos = $('.viewingContainer').scrollLeft();
    var width = $(".slider1").width();
    $(".viewingContainer").animate({scrollLeft: leftPos + width}, 500);
    if (position != 3) {
      position = position + 1;
    } else {
      position = 1;
      $(".viewingContainer").animate({scrollLeft: 0},500);
    }
  });

  $(".tabIndicater, .arrows").click(function(){
    if (position == 1) {
      $("#tabLeft").css("background-color", "green");
      $("#tabCentre").css("background-color", "grey");
      $("#tabRight").css("background-color", "grey");
    } else if (position == 2) {
      $("#tabLeft").css("background-color", "grey");
      $("#tabCentre").css("background-color", "green");
      $("#tabRight").css("background-color", "grey");
    } else if (position == 3) {
      $("#tabLeft").css("background-color", "grey");
      $("#tabCentre").css("background-color", "grey");
      $("#tabRight").css("background-color", "green");
    }
  });

});
