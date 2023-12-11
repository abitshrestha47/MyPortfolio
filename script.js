window.addEventListener('scroll',function(){
    var header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>0);
});

let menu=document.querySelector('#menu-btn'); 
var nav=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
}

var prevScrollpos=window.pageYOffset;
console.log(`The previous offset is:${prevScrollpos}`);
window.onscroll=function(){
    var currentPos=window.pageYOffset;
    console.log(`The now offset is:${currentPos}`);
    if(currentPos>prevScrollpos){
        document.querySelector('header').style.top="-50rem";
        console.log('this is the test');
    }
    else{
        document.querySelector('header').style.top='0';
    }
    prevScrollpos=currentPos;
}