


  document.querySelectorAll(".keys")[0].addEventListener("click",function (){

    setTimeout(function(){
      var audio=new Audio("a6.ogg");
      audio.play();},80);
    anime("a");
  });

  document.querySelectorAll(".keys")[1].addEventListener("click",function (){
    setTimeout(function(){
      var audio=new Audio("b6.ogg");
      audio.play();},80);
    anime("s");
  });

  document.querySelectorAll(".keys")[2].addEventListener("click",function (){
    setTimeout(function(){
      var audio=new Audio("c6.ogg");
      audio.play();},80);
    anime("d");

  });

  document.querySelectorAll(".keys")[3].addEventListener("click",function (){
    setTimeout(function(){
      var audio=new Audio("d6.ogg");
      audio.play();},80);
    anime("f");
  });

  document.querySelectorAll(".keys")[4].addEventListener("click",function (){
    setTimeout(function(){
      var audio=new Audio("e6.ogg");
      audio.play();},80);
    anime("g");
  });

  document.querySelectorAll(".keys")[5].addEventListener("click",function (){
    setTimeout(function(){
      var audio=new Audio("f6.ogg");
      audio.play();},80);
    anime("h");
  });

  document.querySelectorAll(".keys")[6].addEventListener("click",function (){
    setTimeout(function(){
      var audio=new Audio("g6.ogg");
      audio.play();},80);
    anime("j");
  });

  document.querySelectorAll(".keys")[7].addEventListener("click",function (){
    setTimeout(function(){
      var audio=new Audio("a7.ogg");
      audio.play();},80);
    anime("k");
  });

  document.querySelectorAll(".keys")[8].addEventListener("click",function (){
    setTimeout(function(){
      var audio=new Audio("b7.ogg");
      audio.play();},80);
    anime("l");
  });



document.addEventListener("keypress",function (event){
  switch (event.key){
    case "a":
    var audio=new Audio("a6.ogg");
    audio.play();
    break;

  case "s":
  var audio=new Audio("b6.ogg");
  audio.play();
  break;

  case "d":
  var audio=new Audio("c6.ogg");
  audio.play();
  break;

 case "f":
 var audio=new Audio("d6.ogg");
 audio.play();
 break;

 case "g":
 var audio=new Audio("e6.ogg");
 audio.play();
 break;

 case "h":
 var audio=new Audio("f6.ogg");
 audio.play();
 break;

 case "j":
 var audio=new Audio("g6.ogg");
 audio.play();
 break;

 case "k":
 var audio=new Audio("a7.ogg");
 audio.play();
 break;

case "l":
var audio=new Audio("b7.ogg");
audio.play();
break;
}
anime(event.key);
})


function anime(press){
  activebutton=document.querySelector("."+press);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },30);

}
