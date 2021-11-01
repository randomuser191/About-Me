//DC4C4C
window.onload = function(){
var envelope = document.querySelector(".envelope");
var letter = document.querySelector(".letter");
var coverTop = document.querySelector(".coverTop");
var coverBottom = document.querySelector(".coverBottom");
var arrow = document.querySelector(".arrow");
var toggled = false;

envelope.onclick = function(){  
  if(toggled == false){
    coverTop.classList.toggle('active');
    letter.classList.toggle('active');
    toggled = true;
  }
}


coverBottom.onclick = function(){
  letter.classList.toggle("active");
  letter.classList.add("active2");
  setTimeout(() => {
    letter.classList.add("fullscreen");
  }, 300)
  setTimeout(() => {
    letter.querySelector("p").innerText = ""; 
    document.querySelector(".cont").style.opacity = "100";
  }, 500)
  setTimeout(() => {
    
  }, 1000)

 }


arrow.onclick = function(){
  document.querySelector(".cont").style.opacity = "0";
  document.body.classList.remove("active");
  envelope.classList.remove("active");
  letter.classList.remove("fullscreen");
  letter.classList.add("active2");
  window.scroll({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });
  setTimeout(() =>{
    letter.classList.remove("active2");
    letter.classList.remove("active");
    coverTop.classList.remove("active");
  }, 100)
}
}