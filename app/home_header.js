
let homeSVG = document.querySelector('.home-svg'),
    friendsSVG = document.querySelector('.friends-svg'),
    watchSVG = document.querySelector('.watch-svg'),
    groupsSVG = document.querySelector('.groups-svg'),
    gamesSVG = document.querySelector('.games-svg'),
    borderBot = document.querySelector('.border-bottom'),
    homes = document.querySelector('.home'),
    friends = document.querySelector('.friends'),
    watchs = document.querySelector('.watch'),
    groups = document.querySelector('.groups'),
    games = document.querySelector('.games'),
    creates = document.querySelector('.create'),
    messenger = document.querySelector('.messenger'),
    notifications = document.querySelector('.notifications'),
    accounts = document.querySelector('.account'),
    overlay = document.querySelector('.overlay'),
    createPOP = document.querySelector('.create-pop'),
    messengerPOP = document.querySelector('.messenger-pop'),
     notifiPOP = document.querySelector('.notifi-pop'),
     accountPOP = document.querySelector('.account-pop')

    creates.onclick=()=>{
        createPOP.classList.toggle("active")
        overlay.classList.add("active")
    }

    messenger.onclick=()=>{
        messengerPOP.classList.toggle("active")
        overlay.classList.add("active")
    }

    notifications.onclick=()=>{
        notifiPOP.classList.toggle("active")
        overlay.classList.add("active")
    }

    accounts.onclick=()=>{
        accountPOP.classList.toggle("active")
        overlay.classList.add("active")
    }


overlay.onclick=()=>{
    createPOP.classList.remove("active")
    notifiPOP.classList.remove("active")
    messengerPOP.classList.remove("active")
    accountPOP.classList.remove("active")
    overlay.classList.remove("active")
    
}


    

    homes.onclick = ()=>{
        window.location.pathname = "home"
    }
    friends.onclick = ()=>{
        window.location.pathname = "friends"
    }
    watchs.onclick = ()=>{
        window.location.pathname = "watch"
    }
    groups.onclick = ()=>{
        window.location.pathname = "groups"
    }
    games.onclick = ()=>{
        window.location.pathname = "games"
    }

 if(window.location.hash.indexOf("home")){
    homeSVG.id = "active"
    borderBot.style.left = "0px"
 }else if(window.location.hash.indexOf("friends")){
    friendsSVG.id = "active"
    borderBot.style.left = "85px"

}
else if(window.location.hash.indexOf("watch")){
    watchSVG.id = "active"
    borderBot.style.left = "175px"

}
else if(window.location.hash.indexOf("groups")){
    groupsSVG.id = "active"
    borderBot.style.left = "260px"

}
else if(window.location.hash.indexOf("games")){
    gamesSVG.id = "active"
    borderBot.style.left = "340px"

}

















