$(document).ready(function(){
  $( "input[type='submit']").click(function() {
  $( ".questions").slideToggle();
  $(".user").slideUp();
  });

 $( "input[type='next']").click(function() {
  $( ".questions" ).toggle();
});


});
