let showPasswoed = document.getElementById('show'),
    inputPasswoed = document.getElementById('input-pass'),
    closeBtn = document.querySelector('.close'),
    btnSignup = document.querySelector('.btnSignup'),
    overlay = document.querySelector('.overlay'),
    popSignup = document.querySelector('.pop-signup'),
    btnLogin = document.querySelector('.btn-login'),
    username = document.querySelector('#username')
    
    
showPasswoed.onclick = ()=>{

    if(inputPasswoed.type == 'password'){
        inputPasswoed.setAttribute('type','text')
        showPasswoed.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#6563ff" d="M12.5,9c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S14.2,9,12.5,9z M22.4,11.6c-2-4.7-5.8-7.6-9.9-7.6s-7.9,2.9-9.9,7.6c-0.1,0.3-0.1,0.5,0,0.8c2,4.7,5.8,7.6,9.9,7.6s7.9-2.9,9.9-7.6C22.5,12.1,22.5,11.9,22.4,11.6z M12.5,17c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5C17.5,14.8,15.3,17,12.5,17z"/></svg>`
    }else if(inputPasswoed.type == 'text'){
        inputPasswoed.setAttribute('type','password')
        showPasswoed.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#6563ff" d="M12,7c2.8,0,5,2.2,5,5c0,0.2,0,0.5-0.1,0.7l3,3c0.8-1,1.4-2.1,2-3.3c0.1-0.3,0.1-0.5,0-0.8C19.9,6.9,16.1,4,12,4c-1.1,0-2.2,0.2-3.2,0.6l2.5,2.5C11.5,7,11.8,7,12,7z M21.7,20.3C21.7,20.3,21.7,20.3,21.7,20.3l-3.1-3.1l0,0l-2.5-2.4l0,0l-1.5-1.5l0,0l-4-4l0,0L9.2,7.8l0,0L7,5.5l0,0L3.7,2.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4c0,0,0,0,0,0l3.1,3.1c-1.4,1.4-2.5,3-3.3,4.8c-0.1,0.3-0.1,0.5,0,0.8c2,4.7,5.8,7.6,9.9,7.6c1.8,0,3.5-0.6,5-1.6l3.3,3.3c0.4,0.4,1,0.4,1.4,0S22.1,20.7,21.7,20.3z M12,17c-2.8,0-5-2.2-5-5c0-1,0.3-1.9,0.8-2.7l1.5,1.5C9.1,11.1,9,11.6,9,12c0,1.7,1.3,3,3,3c0.4,0,0.9-0.1,1.3-0.3l1.5,1.5C13.9,16.7,13,17,12,17z"/></svg>`
    }
}

inputPasswoed.onkeypress = ()=>{
   showPasswoed.classList.add('active')
}




btnSignup.onclick= ()=>{
    popSignup.classList.add('active')
    overlay.classList.add('active')
}


closeBtn.onclick=()=>{
    popSignup.classList.remove('active')
    overlay.classList.remove('active')
}

btnLogin.onclick = ()=>{
window.location.assign('home/home.html')

}
// username 
// inputPasswoed













