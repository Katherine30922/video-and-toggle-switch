const btn=document.querySelector(".switcher");
const video=document.querySelector(".video");

btn.addEventListener("click",function(){
    if(video.paused){
        video.play();
        
    }else{
        video.pause();
    }
    
});

const preloader=document.querySelector(".preloader");
window.addEventListener("load",function(){
    preloader.classList.add("hidepreloader");//the load event fires when whole page has loaded.
})