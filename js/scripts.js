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

var d1=("input:radio[name=quiz1]:checked").val();
var d2=("input:radio[name=quiz2]:checked").val();
var d3=("input:radio[name=quiz3]:checked").val();
var d4=("input:radio[name=quiz4]:checked").val();
 function add(d1,d2,d3,d4){
   var marks= d1+d2+d3+d4;
   return marks;
 });
});
