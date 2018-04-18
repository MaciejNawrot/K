//variables
let isScrolling = false;
const hamburger = document.querySelector(".hamburger");
const toQandA = document.querySelector(".toQandA");
const arrow = document.querySelector(".scroll_arrow");
const homeLi = document.querySelector(".list1");
const toTop = document.querySelector(".toTop");
const toMain = document.querySelector(".toMain");
const menu = document.querySelector("nav");
const questions = Array.from(document.querySelectorAll('.quest'));

//functions
const scrollTop = () => {
    if(pageYOffset > 0) {
        window.scrollBy(0,-5);
        if(pageYOffset > 300){
            window.scrollBy(0,-4);
            if(pageYOffset > 600){
                window.scrollBy(0,-4);
                if(pageYOffset > 900){
                    window.scrollBy(0,-4);
                }
            }
        }
        setTimeout(scrollTop, 5);
    }
    if(pageYOffset == 0){
        isScrolling = false;
    } else{
        isScrolling = true;
    }
};

const scrollToMain = () => {
    const header = document.querySelector("header");
    if(pageYOffset != header.offsetHeight){
          if(pageYOffset < header.offsetHeight){
                let diff = header.offsetHeight-pageYOffset;
                if(diff < 10){
                  window.scrollBy(0,diff);
                }
                window.scrollBy(0,10);
                setTimeout(scrollToMain, 1);
          }
          if(pageYOffset > header.offsetHeight){
                let diff = pageYOffset - header.offsetHeight;
                if(diff < -10){
                  window.scrollBy(0,diff);
                }
                window.scrollBy(0,-10);
                setTimeout(scrollToMain, 1);
          }
    }
    if(pageYOffset == header.offsetHeight){
        isScrolling = false;
    } else{
        isScrolling = true;
    }
};

const scrollToQuestionsAndContact = () => {
    let QandCoffset = document.querySelector(".questions").offsetTop - 32;
    if(window.innerWidth > 900){
        QandCoffset -= document.querySelector("nav").offsetHeight;
    }
    if(pageYOffset != QandCoffset){
        if(pageYOffset < QandCoffset){
              let diff = QandCoffset - pageYOffset;
              if(diff < 10){
                window.scrollBy(0,diff);
              }
              window.scrollBy(0,10);
              setTimeout(scrollToQuestionsAndContact, 1);
        }
        if(pageYOffset > QandCoffset){
              let diff = pageYOffset - QandCoffset;
              if(diff < -10){
                window.scrollBy(0,diff);
              }
              window.scrollBy(0,-10);
              setTimeout(scrollToQuestionsAndContact, 1);
        }
    }
    if(pageYOffset == QandCoffset){
        isScrolling = false;
    } else{
        isScrolling = true;
    }
};

const menuToggle = () => {
    let leftOff=parseInt(menu.style.left);
    let screenWidth=parseInt(window.innerWidth);
    let i = 0;
    let jump = 0.5;
    if(menu.style.left == -screenWidth + "px"){
      for(i; i < screenWidth; i++){
        setTimeout(function(){
          menu.style.left = parseInt(menu.style.left) + 1 + "px";
        }, jump * i);
      }
    }
    if(menu.style.left == "0px" ){
      for(i; i < screenWidth; i++){
        setTimeout(function(){
          menu.style.left = parseInt(menu.style.left) - 1 + "px";
        }, jump * i);
      }
    }
}

//event listeners
homeLi.addEventListener("click",function() {
    if(!isScrolling){
        scrollTop();
        if(window.innerWidth < 900){
            menuToggle();
        }
    }
});

toTop.addEventListener("click",function() {
    if(!isScrolling){
        scrollTop();
        if(window.innerWidth < 900){
            menuToggle();
        }
    }
});

toMain.addEventListener("click",function() {
    if(!isScrolling){
        scrollToMain();
    }
});

arrow.addEventListener("click",function() {
    if(!isScrolling){
        scrollToMain();
    }
});

toQandA.addEventListener("click",function() {
    if(!isScrolling){
        scrollToQuestionsAndContact();
        if(window.innerWidth < 900){
            menuToggle();
        }
    }
});

hamburger.addEventListener("click", function() {
    console.log("hamburger has been clicked");
    menuToggle();
});

questions.forEach(function(element,key){
    element.addEventListener("click", function(){
        const child = questions[key].childNodes;
        child.forEach(function(e,k){
            if(e.nodeName == "ARTICLE"){
                if(e.style.display == "none"){
                    e.style.display = "block";
                }
                else if(e.style.display == "block"){
                    e.style.display = "none";
                }
                else{
                    e.style.display = "block";
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function(event) {
  menu.style.left= -window.innerWidth + "px";
  if(window.innerWidth > 900){
      menu.style.left = 0;
  }
  console.log(menu.style.left);
});

window.addEventListener('resize', function () {
    console.log("resize");
    menu.style.window = window.innerWidth;
    if(window.innerWidth > 900){
        menu.style.left = 0;
    }
});
