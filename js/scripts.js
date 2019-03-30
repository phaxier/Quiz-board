$(document).ready(function(){
  $( "input[type='submit']").click(function() {
  $( ".user" ).slideUp(3000);
  });

  $( "input[type='next']").click(function() {
  $( ".questions" ).slideUp();
});

});
