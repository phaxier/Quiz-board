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
//$("questions").submit(function(){
//var d1=("input:radio[name=quiz1]:checked").val();
//var d2=("input:radio[name=quiz2]:checked").val();
//var d3=("input:radio[name=quiz3]:checked").val();
//var d4=("input:radio[name=quiz4]:checked").val();

//var marks=parseInt(d1)+parseInt(d2)+parseInt(d3)+parseInt(d4);
//$("marks").text(You Scored:"+marks+*25");

//});
});
