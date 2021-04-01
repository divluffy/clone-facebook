let thePOP =document.querySelector('.creatr-post-pop'),
    closePOP =document.querySelector('.closr-create-post'),
    clickPOP =document.querySelector('.create-post')
    overlayPst =document.querySelector('.overlay-post')




  


clickPOP.onclick = ()=>{
    thePOP.classList.add('active')
    overlayPst.classList.add('active')

}




closePOP.onclick = ()=>{
    thePOP.classList.remove('active')
    overlayPst.classList.remove('active')

}

overlayPst.onclick = ()=>{
    thePOP.classList.remove('active')
    overlayPst.classList.remove('active')
}










