let seeMore = document.querySelectorAll('.show-text-post'),
    postTitle = document.querySelector('.post-title'),
    addLike = document.querySelectorAll('.like-him'),
    photoSH = document.querySelectorAll('.photoSH img'),
    closepopshow = document.querySelector('.close-pop-show'),
    imgPOP = document.querySelector('.image-pop')






    seeMore.forEach(msg=>{ 
       msg.addEventListener('click', ()=>{
           
        seeMore.classList.add('active')
        postTitle.classList.add('active')
    
        })
    })
    
    




photoSH.forEach(img=>{
    img.addEventListener('click', ()=>{

        let show = document.createElement('img')
        show.src = img.src
   
        imgPOP.classList.add('active')

        while(imgPOP.firstElementChild.classList.value =="imgtt"){
            imgPOP.removeChild(imgPOP.firstElementChild)
        }
        
         imgPOP.insertBefore(show,imgPOP.firstElementChild)
        show.classList.add('imgtt')
        closepopshow.classList.add('active')

    })
})


closepopshow.onclick= ()=>{
    imgPOP.classList.remove('active')
    imgPOP.removeChild(imgPOP.firstElementChild)
    closepopshow.classList.remove('active')
}
    





addLike.forEach(t=>{
    t.addEventListener('click', ()=>{
        t.classList.toggle('active')
    })
})
