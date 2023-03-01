let clicked = false; 

document.addEventListener('click', (e)=>{
    const el = e.target;
    const menuBtn = document.querySelector('#menu');
    const hiddenNav = document.querySelector('.hiddennav');


    if(el === menuBtn){
        clicked = !clicked ? clicked = true : clicked = false;
        return !clicked ? hiddenNav.classList.add("showed") : hiddenNav.classList.remove("showed");
    }else{
        hiddenNav.classList.remove('showed');
    }
});