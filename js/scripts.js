$(document).ready(function(){
  $( "input[type='submit']").click(function() {
  $( ".questions").slideToggle();
  $(".user").slideUp();
  });

 $( "input[type='next']").click(function() {
  $( ".questions" ).toggle();
});
  $("input[type='next']").click(function() {
  $( ".answers").toggle();
});
 //$ ('#submit').click(function() {
//$( "input[type='radio']").click(function()
 //$( ".questions" ).toggle();
  // });

});
