function doc(el){
  return document.querySelector(el)
}
  let swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  keyboard: {
    enabled: true,
    onlyInViewport: false
  },
  slidesPerView: 1,
  mousewheel: true,
  speed: 600
});
swiper.on('slideChangeTransitionStart', function() {
  if (swiper.activeIndex == 0) {
      doc(".up").style = "opacity:0.2"
  } else {
      doc(".up").style = "opacity:1"
  }
  if (swiper.activeIndex == 3) {
      doc(".down").style = "opacity:0.2"
  } else {
      doc(".down").style = "opacity:1"
  }
  opCl = true;
  doc("#anim2").style = "left: -100%;";
  let elem = doc(".swiper-slide-active");
  if (elem == null) {
      doc('.toolbar').style = "opacity:0"
  }
  if (elem != null) {
      if (elem.className.includes("intro-bg") == false) {
          doc('.toolbar').style = "height:55px; background:rgb(40 41 61 / 30%); backdrop-filter: blur(10px)"
      } else {
          doc('.toolbar').style = "opacity:1";
          doc('.toolbar').style = "height:100px; background:none"
      }
  } else {
      doc('.toolbar').style = "opacity:1";
      doc('.toolbar').style = "height:100px; background:none"
  }
});
swiper.on('slideChangeTransitionEnd', function() {
  let elem = doc(".swiper-slide-active");
  check(swiper.activeIndex)
});
function check(pos) {
  swiper.slideTo(pos);
  doc(".active").classList.remove("active");
  document.getElementsByClassName("triple")[pos].classList.add("active")
}
let swiper2 = new Swiper(".mySwiper2", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
  }
});


//script for navbar
let opCl=!0;const nav=()=>{opCl?(0==swiper.activeIndex&&(document.getElementsByClassName("toolbar")[0].style="height:55px; background:#1c1b1b"),document.getElementById("anim2").style="left: 0px",opCl=!1):(0==swiper.activeIndex&&(document.getElementsByClassName("toolbar")[0].style="opacity:1",document.getElementsByClassName("toolbar")[0].style="height:100px; background:none"),document.getElementById("anim2").style="left: -100%",opCl=!0)},slider=e=>{0==e?swiper.slidePrev():swiper.slideNext()},slide=e=>{0==e?swiper2.slidePrev():swiper2.slideNext()},sendMassage=()=>{let e=document.getElementsByName("name")[0].value,t=document.getElementsByName("message")[0].value;var s=new XMLHttpRequest;s.open("GET","https://api.telegram.org/bot1872875916:AAFZoVul7V-yihUB5esqIOsPFdcbVvXpELM/sendMessage?chat_id=1329000291&text="+e+", "+t,!1),s.send(null),document.getElementsByName("name")[0].value="",document.getElementsByName("message")[0].value="",alert("thanks to message, we will read this text and respond to you")};

