var add_button = document.querySelector('#nav');
var nav_bar = document.querySelector('#nav_bar');
var display = 'no';
add_button.addEventListener('click',()=>{
    if(display == 'no'){
        nav_bar.style.display = 'block';
        add_button.innerText = '-';
        display = 'yes'
    }
    else if(display == 'yes'){
        nav_bar.style.display = 'none';
        add_button.innerText = '+';
        display = 'no'
    }
})