$("document").ready(function(){

$(".nav li").on("click",function(){
  $(".nav li").removeClass("active");
  $(this).addClass("active");
  });

$("#header-button").click(function(){
  $("ul").slideToggle();
  }
  );

$(".navbar-fixed-top").on("show.autoHidingNavbar",function(){
  $("ul").slideUp();
});
//call autoHidingNavbar
$(".navbar-fixed-top").autoHidingNavbar();
});
var edAge;
var age;
age = new Date().getFullYear() - 1989;
edAge= new Date().getFullYear() - 2011;
$('#edAge').append(edAge);
$("#age").append(age);
