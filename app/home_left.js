let leftOptions = document.querySelector('.left-options'),
    shortcuts   = document.querySelector('.shortcuts'),
    seelessOptions   = document.querySelector('.see-less-options'),
    seelessGroups   = document.querySelector('.see-less-groups'),
    eventSee   = document.querySelector('.event-see'),
    eventSeeG   = document.querySelector('.event-see-g'),
    svgopti  = document.querySelector('.svg-see-less.opti'),
    svgGroup  = document.querySelector('.svg-see-less.group')


    



seelessOptions.onclick = ()=>{
    leftOptions.classList.toggle('active')

    if(eventSee.innerHTML == "see less"){
        eventSee.innerHTML = "see more"
        svgopti.innerHTML = `<svg xmlns="<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>`
    }else{
        eventSee.innerHTML = "see less"
        svgopti.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/></svg>`
    }
    
}

seelessGroups.onclick = ()=>{
    shortcuts.classList.toggle('active')

    if(eventSeeG.innerHTML == "see less"){
        eventSeeG.innerHTML = "see more"
        svgGroup.innerHTML = `<svg xmlns="<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>`
    }else{
        eventSeeG.innerHTML = "see less"
        svgGroup.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/></svg>`
    }
   
}




