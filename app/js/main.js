const chk = document.getElementById('theme-slider');


chk.addEventListener('change',()=>{
    if (chk.checked){
        document.body.setAttribute('data-theme', 'light');
        
    } else{
        document.body.setAttribute('data-theme', 'dark');
    }   
});

