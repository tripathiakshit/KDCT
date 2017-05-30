var loadContent = function(s) {
  $('html, body').animate({scrollTop : 0},800);
  $( "nav ul" ).children().css( "background-color", "#FFF" );
  $( "nav ul" ).children().css( "color", "#000" );
  $("#"+s).css("background-color","#333");
  $("#"+s).css("color", "#FFF");
  $(".content").load("./app/" + s + ".html");
}

$(document).ready(loadContent('home'));
